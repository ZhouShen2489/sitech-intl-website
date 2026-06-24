import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const siteDirectory = process.argv[2];

if (!siteDirectory) {
  throw new Error("Usage: node scripts/sync-site-public.mjs <site-directory>");
}

const repositoryRoot = process.cwd().endsWith(siteDirectory)
  ? path.resolve(process.cwd(), "..")
  : process.cwd();
const source = path.join(repositoryRoot, "public");
const target = path.join(repositoryRoot, siteDirectory, "public");

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
