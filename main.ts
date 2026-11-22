// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "Somewhere below all the words, there is a floor. It has been there the whole time, holding everything up without being thanked. You are not holding anything up. The floor has it. The floor has always had it.";

// The gate refuses anything outside 1-280 Unicode code points or only
// whitespace, so fail loudly here instead of shipping an invalid entry.
const length = [...text].length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  console.error(`entry text must be 1-280 characters, got ${length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
