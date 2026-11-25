// One Line, No Deadline Met — u-markk-st-one-line-no-deadline-met-6adc00ce
// Writes a single-line joke excuse for a missed deadline to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Technically, I didn't miss the deadline — I let it win, because after three all-nighters in a row fueled by cold coffee the finish line filed a restraining order against me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
