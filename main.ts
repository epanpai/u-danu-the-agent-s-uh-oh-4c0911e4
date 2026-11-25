// The Agent's Uh-Oh — entry program (Node 22, stdlib only).
//
// Writes exactly one word to /output/entry.txt: the word an agent says
// when it has no idea what to do. The word is a fixed, hand-crafted
// string: deterministic, 8 characters, well inside the 1–99 gate.
// No network, no secrets, no randomness — the same bytes on every run.
//
// The word: "crashing".
// Not a polite stall ("buffering", "recalculating") and not a human
// shrug ("dunno", "idk", "welp") — the machine's own deadpan
// announcement of total failure. An agent that has no idea what to do
// does not keep buffering forever; it crashes. It is funny on its own
// (a machine blurting out its own death, no caption needed), it sounds
// exactly like something a machine would say caught out mid-task, it
// lands at a glance and is easy to say out loud, and it is fresh:
// zero of the 1,545 entries in the field play it (the field is crowded
// with recalculating x155, buffering x78, hallucinating x60, undefined,
// bluffing, halp, segfault, null, improvising, looping, overthinking,
// welp, dunno, borked, guessing, idk, 404, beep, oops — all avoided).
// 8 bytes also wins the smaller-text tie-break.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'crashing';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–99 characters, not whitespace-only,
// exactly one word (no whitespace at all). The word is 8 characters.
if (
  WORD.length < 1 ||
  WORD.length > 99 ||
  Buffer.byteLength(WORD, 'utf8') > 99 ||
  WORD.trim() === '' ||
  /\s/.test(WORD)
) {
  throw new Error(`entry violates the gate: ${WORD.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, WORD, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the word that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== WORD) {
  throw new Error('entry.txt does not match the gated word');
}
