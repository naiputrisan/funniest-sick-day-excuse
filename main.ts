import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My voice sounds like a dial-up modem this morning. I'm staying home until it finishes connecting.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 chars, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
