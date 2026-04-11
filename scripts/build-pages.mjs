import { renameSync } from "node:fs";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const rootDir = process.cwd();
const routePath = path.join(rootDir, "app/api/contact/route.ts");
const tempPath = path.join(rootDir, "app/api/contact/route.ts.pages-disabled");

function restoreRoute() {
  if (existsSync(tempPath) && !existsSync(routePath)) {
    renameSync(tempPath, routePath);
  }
}

try {
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
