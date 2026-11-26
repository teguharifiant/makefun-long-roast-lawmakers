import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Congress can write a law governing artificial intelligence, but its authors still print the Word file, sign it in pen, and scan it back in upside down to make a PDF.";

// Bounty limit for this entry is 320 characters. Flag an over-long entry
// on stderr so it can be caught before submission, but keep the written
// output byte-identical to ENTRY in every case.
const MAX_ENTRY_LENGTH = 320;
if (ENTRY.length > MAX_ENTRY_LENGTH) {
  console.error(
    `Warning: entry is ${ENTRY.length} characters, exceeding the ${MAX_ENTRY_LENGTH}-character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
