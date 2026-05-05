import { renameSync } from "node:fs";
import { existsSync } from "node:fs";
import { rmSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const rootDir = process.cwd();
const routePath = path.join(rootDir, "app/api/contact/route.ts");
const tempPath = path.join(rootDir, "app/api/contact/route.ts.pages-disabled");
const nextDir = path.join(rootDir, ".next");
const outDir = path.join(rootDir, "out");

function restoreRoute() {
  if (existsSync(tempPath) && !existsSync(routePath)) {
    renameSync(tempPath, routePath);
  }
}

function cleanBuildArtifacts() {
  rmSync(nextDir, { recursive: true, force: true });
  rmSync(outDir, { recursive: true, force: true });
}

try {
  // Pages export should always start from a clean slate. Reusing a previous
  // server build can leave stale chunk references in `.next/server`.
  cleanBuildArtifacts();

  if (existsSync(routePath)) {
    renameSync(routePath, tempPath);
  }

  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
    },
  });

  restoreRoute();

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
} catch (error) {
  restoreRoute();
  throw error;
}
