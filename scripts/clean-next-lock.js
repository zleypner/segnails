import fs from "fs";
import path from "path";

const lockPath = path.join(process.cwd(), ".next", "dev", "lock");

if (fs.existsSync(lockPath)) {
  console.log("⚠️ Removing stale Next.js dev lock...");
  fs.rmSync(path.join(process.cwd(), ".next", "dev"), { recursive: true, force: true });
}
