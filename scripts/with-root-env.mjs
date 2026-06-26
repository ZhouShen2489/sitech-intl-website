import { spawn } from "node:child_process";
import process from "node:process";

import { getMergedEnv } from "./shared-env.mjs";

const [siteDir, ...command] = process.argv.slice(2);

if (!siteDir || command.length === 0) {
  console.error("Usage: node ../scripts/with-root-env.mjs <site-dir> <command> [...args]");
  process.exit(1);
}

const child = spawn(command[0], command.slice(1), {
  env: getMergedEnv(siteDir),
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
