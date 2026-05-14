import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const imageRoots = [
  "public",
  "app/icon.png",
];

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

function collectImages(target) {
  const absolute = path.join(root, target);

  if (!existsSync(absolute)) {
    return [];
  }

  const stats = statSync(absolute);

  if (stats.isFile()) {
    return imageExtensions.has(path.extname(absolute).toLowerCase()) ? [absolute] : [];
  }

  return readdirSync(absolute).flatMap((entry) => collectImages(path.join(target, entry)));
}

function dimensions(file) {
  if (path.extname(file).toLowerCase() === ".svg") {
    const source = readFileSync(file, "utf8");
    const width = Number(source.match(/\bwidth="(\d+)"/)?.[1] ?? 0);
    const height = Number(source.match(/\bheight="(\d+)"/)?.[1] ?? 0);
    return { width, height };
  }

  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0);
  const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0);
  return { width, height };
}

function classify(relativePath, width, height) {
  const notes = [];

  if (relativePath.includes("/hero/") && (width < 1400 || height < 800)) {
    notes.push("hero image is below recommended 1400x800");
  }

  if (relativePath.includes("/stories/") && (width < 800 || height < 500)) {
    notes.push("story image is below recommended 800x500");
  }

  if ((relativePath.includes("/brand/") || relativePath.endsWith("icon.png")) && (width < 256 || height < 256)) {
    notes.push("brand/icon image is below recommended 256x256");
  }

  return notes.length ? notes.join("; ") : "ok";
}

const images = [...new Set(imageRoots.flatMap(collectImages))].sort();

console.log("Dev image size check");
console.log("This runs before local dev only. Production build does not depend on it.\n");

for (const image of images) {
  const relativePath = path.relative(root, image);
  const { width, height } = dimensions(image);
  console.log(`${relativePath}: ${width}x${height} - ${classify(relativePath, width, height)}`);
}
