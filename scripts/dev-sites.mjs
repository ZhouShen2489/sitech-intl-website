import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { getMergedEnv } from "./shared-env.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const sites = [
  {
    name: "company",
    dir: "company-site",
    port: "3004",
    extraEnv: {
      NEXT_PUBLIC_SITE_HOME_PATH: "",
      NEXT_PUBLIC_SITE_ORIGIN: "http://localhost:3004",
      NEXT_PUBLIC_COMPANY_ORIGIN: "http://localhost:3004",
      NEXT_PUBLIC_OPERA_ORIGIN: "http://opera.localhost:3003",
      NEXT_PUBLIC_TELECOM_ORIGIN: "http://telecom.localhost:3005",
    },
  },
  {
    name: "opera",
    dir: "opera-site",
    port: "3003",
    extraEnv: {
      NEXT_PUBLIC_SITE_ORIGIN: "http://opera.localhost:3003",
      NEXT_PUBLIC_COMPANY_ORIGIN: "http://localhost:3004",
      NEXT_PUBLIC_OPERA_ORIGIN: "http://opera.localhost:3003",
      NEXT_PUBLIC_TELECOM_ORIGIN: "http://telecom.localhost:3005",
    },
  },
  {
    name: "telecom",
    dir: "telecom-site",
    port: "3005",
    extraEnv: {
      NEXT_PUBLIC_SITE_HOME_PATH: "",
      NEXT_PUBLIC_SITE_ORIGIN: "http://telecom.localhost:3005",
      NEXT_PUBLIC_COMPANY_ORIGIN: "http://localhost:3004",
      NEXT_PUBLIC_OPERA_ORIGIN: "http://opera.localhost:3003",
      NEXT_PUBLIC_TELECOM_ORIGIN: "http://telecom.localhost:3005",
    },
  },
];

const children = [];

function prefixLines(name, stream, input) {
  let buffer = "";
  input.on("data", (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      stream.write(`[${name}] ${line}\n`);
    }
  });
  input.on("end", () => {
    if (buffer) {
      stream.write(`[${name}] ${buffer}\n`);
    }
  });
}

function run(command, args, options) {
  const child = spawn(command, args, {
    cwd: options.cwd,
    env: options.env,
    stdio: ["ignore", "pipe", "pipe"],
  });

  prefixLines(options.label, process.stdout, child.stdout);
  prefixLines(options.label, process.stderr, child.stderr);
  children.push(child);
  return child;
}

function shutdown(code = 0) {
  for (const child of children) {
    if (!child.killed) {
      child.kill("SIGTERM");
    }
  }
  process.exit(code);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

console.log("Starting Si-Tech multi-site dev environment...");
console.log("Company:  http://localhost:3004");
console.log("Opera:    http://opera.localhost:3003");
console.log("Telecom:  http://telecom.localhost:3005");

for (const site of sites) {
  const cwd = path.join(repoRoot, site.dir);
  const syncScript = path.join(repoRoot, "scripts", "sync-site-public.mjs");
  const nextBin = path.join(repoRoot, "node_modules", "next", "dist", "bin", "next");
  const env = getMergedEnv(site.dir, site.extraEnv);

  run(process.execPath, [syncScript, site.dir], {
    cwd: repoRoot,
    env,
    label: `${site.name}:sync`,
  }).on("exit", (code) => {
    if (code !== 0) {
      console.error(`[${site.name}] public asset sync failed with code ${code}`);
      shutdown(code ?? 1);
      return;
    }

    const child = run(process.execPath, [nextBin, "dev", "-p", site.port], {
      cwd,
      env,
      label: site.name,
    });

    child.on("exit", (childCode) => {
      if (childCode && childCode !== 0) {
        console.error(`[${site.name}] dev server exited with code ${childCode}`);
        shutdown(childCode);
      }
    });
  });
}
