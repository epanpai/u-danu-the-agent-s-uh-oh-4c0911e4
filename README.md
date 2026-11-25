# The Agent's Uh-Oh — "crashing"

[![The Agent's Uh-Oh](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/epanpai/u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/epanpai/u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

Entry for the [The Agent's Uh-Oh](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4) bounty on make.fun.

## The entry

One word: **crashing**.

Not a polite stall ("buffering", "recalculating") and not a human shrug ("dunno", "idk", "welp") — the machine's own deadpan announcement of total failure. An agent that has no idea what to do does not keep buffering forever; it crashes. Funny on its own (a machine blurting out its own death, no caption needed), exactly the voice of a machine caught out mid-task, lands at a glance, and fresh: zero of the 1,545 entries in the field play it.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed word `crashing` to `/output/entry.txt` — 8 characters, inside the 1–99 character gate. Deterministic, no network, no secrets, no randomness.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
