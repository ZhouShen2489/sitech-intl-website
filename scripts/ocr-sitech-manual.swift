import AppKit
import Foundation
import PDFKit
import Vision

struct PageOCRResult {
  let pageNumber: Int
  let averageConfidence: Float
  let lines: [String]
}

struct OCRConfig {
  let inputPDF: String
  let rawOutput: String
  let scale: CGFloat
  let languages: [String]

  static let `default` = OCRConfig(
    inputPDF: "/Users/zhoushen/Nutstore Files/Nutstore/Sitech/A-\u{56fd}\u{5185}\u{601d}\u{7279}\u{5947}\u{6750}\u{6599}/\u{601d}\u{7279}\u{5947}\u{624b}\u{518c}/\u{601d}\u{7279}\u{5947}\u{624b}\u{518c}\u{7535}\u{5b50}\u{7248}_compressed.pdf",
    rawOutput: "docs/reference/pdf-ocr/sitech-manual-ocr.md",
    scale: 2.2,
    languages: ["zh-Hans", "en-US"]
  )
}

func makeDirectoryIfNeeded(for path: String) throws {
  let url = URL(fileURLWithPath: path)
  let directory = url.deletingLastPathComponent()
  try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
}

func sanitize(_ lines: [String]) -> [String] {
  var result: [String] = []
  var previous = ""

  for rawLine in lines {
    let trimmed = rawLine
      .replacingOccurrences(of: "\t", with: " ")
      .replacingOccurrences(of: "  +", with: " ", options: .regularExpression)
      .trimmingCharacters(in: .whitespacesAndNewlines)

    if trimmed.isEmpty || trimmed == previous {
      continue
    }

    result.append(trimmed)
    previous = trimmed
  }

  return result
}

func renderPage(_ page: PDFPage, scale: CGFloat) -> CGImage? {
  let bounds = page.bounds(for: .mediaBox)
  let width = max(Int(bounds.width * scale), 1)
  let height = max(Int(bounds.height * scale), 1)
  let colorSpace = CGColorSpaceCreateDeviceRGB()

  guard let context = CGContext(
    data: nil,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: 0,
    space: colorSpace,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
  ) else {
    return nil
  }

  context.setFillColor(NSColor.white.cgColor)
  context.fill(CGRect(x: 0, y: 0, width: width, height: height))
  context.saveGState()
  context.scaleBy(x: scale, y: scale)
  page.draw(with: .mediaBox, to: context)
  context.restoreGState()

  return context.makeImage()
}

func recognizeText(from image: CGImage, languages: [String]) throws -> PageOCRResult {
  let request = VNRecognizeTextRequest()
  request.recognitionLanguages = languages
  request.recognitionLevel = .accurate
  request.usesLanguageCorrection = true
  request.minimumTextHeight = 0.008

  let handler = VNImageRequestHandler(cgImage: image, options: [:])
  try handler.perform([request])

  let observations = request.results ?? []
  var lines: [String] = []
  var confidences: [Float] = []

  for observation in observations {
    guard let candidate = observation.topCandidates(1).first else {
      continue
    }

    lines.append(candidate.string)
    confidences.append(candidate.confidence)
  }

  let cleanLines = sanitize(lines)
  let average = confidences.isEmpty ? 0 : confidences.reduce(0, +) / Float(confidences.count)

  return PageOCRResult(pageNumber: 0, averageConfidence: average, lines: cleanLines)
}

func markdown(for results: [PageOCRResult], config: OCRConfig) -> String {
  var output: [String] = []
  output.append("# 思特奇手册 OCR 原始提取稿")
  output.append("")
  output.append("- 来源 PDF: `\(config.inputPDF)`")
  output.append("- 提取方式: `PDFKit + Vision OCR (zh-Hans + en-US)`")
  output.append("- 说明: 这是逐页 OCR 中间稿，保留页码与少量低置信度提示，供后续结构化整理使用。")
  output.append("")

  for result in results {
    output.append("## 第 \(result.pageNumber) 页")
    output.append("")
    if result.averageConfidence < 0.55 {
      output.append("> 低置信度提醒：本页平均识别置信度较低，建议后续人工复核。")
      output.append("")
    }

    if result.lines.isEmpty {
      output.append("_本页未识别到可用文本。_")
      output.append("")
      continue
    }

    for line in result.lines {
      output.append("- \(line)")
    }
    output.append("")
  }

  return output.joined(separator: "\n")
}

func parseConfig() -> OCRConfig {
  let args = Array(CommandLine.arguments.dropFirst())
  guard !args.isEmpty else {
    return .default
  }

  var input = OCRConfig.default.inputPDF
  var output = OCRConfig.default.rawOutput

  var index = 0
  while index < args.count {
    switch args[index] {
    case "--input":
      if index + 1 < args.count {
        input = args[index + 1]
        index += 1
      }
    case "--output":
      if index + 1 < args.count {
        output = args[index + 1]
        index += 1
      }
    default:
      break
    }
    index += 1
  }

  return OCRConfig(
    inputPDF: input,
    rawOutput: output,
    scale: OCRConfig.default.scale,
    languages: OCRConfig.default.languages
  )
}

let config = parseConfig()
let pdfURL = URL(fileURLWithPath: config.inputPDF)

guard let document = PDFDocument(url: pdfURL) else {
  fputs("Failed to open PDF at \(config.inputPDF)\n", stderr)
  exit(1)
}

var results: [PageOCRResult] = []
results.reserveCapacity(document.pageCount)

for pageIndex in 0..<document.pageCount {
  guard let page = document.page(at: pageIndex) else {
    continue
  }

  let pageNumber = pageIndex + 1
  fputs("OCR page \(pageNumber)/\(document.pageCount)\n", stderr)

  guard let image = renderPage(page, scale: config.scale) else {
    results.append(PageOCRResult(pageNumber: pageNumber, averageConfidence: 0, lines: []))
    continue
  }

  do {
    let result = try recognizeText(from: image, languages: config.languages)
    results.append(
      PageOCRResult(
        pageNumber: pageNumber,
        averageConfidence: result.averageConfidence,
        lines: result.lines
      )
    )
  } catch {
    results.append(PageOCRResult(pageNumber: pageNumber, averageConfidence: 0, lines: ["[OCR failed: \(error)]"]))
  }
}

let text = markdown(for: results, config: config)
try makeDirectoryIfNeeded(for: config.rawOutput)
try text.write(toFile: config.rawOutput, atomically: true, encoding: .utf8)
print("Wrote OCR markdown to \(config.rawOutput)")
