import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Congress can write a law governing artificial intelligence, but its authors still print the Word file, sign it in pen, and scan it back in upside down to make a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
