import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(__dirname, "..");

function unquote(value) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

export function parseEnvFile(filePath) {
  try {
    const text = readFileSync(filePath, "utf8");
    const entries = {};

    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.trim();

      if (!line || line.startsWith("#")) {
        continue;
      }

      const separatorIndex = line.indexOf("=");

      if (separatorIndex === -1) {
        continue;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1);

      if (key) {
        entries[key] = unquote(value);
      }
    }

    return entries;
  } catch {
    return {};
  }
}

export function getRootEnv() {
  return parseEnvFile(path.join(repoRoot, ".env.local"));
}

export function getSiteEnv(siteDir) {
  return parseEnvFile(path.join(repoRoot, siteDir, ".env.local"));
}

export function getMergedEnv(siteDir, extraEnv = {}) {
  return {
    ...getSiteEnv(siteDir),
    ...getRootEnv(),
    ...process.env,
    ...extraEnv,
  };
}
