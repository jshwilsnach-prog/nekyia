#!/usr/bin/env node
/**
 * The law, checked.
 *
 * "The code enforces what it can: the three values, the exchange rules, the
 *  tests that fail if anyone authors rank. That is where the law has teeth."
 *   — PHILOSOPHY.md
 *
 * No dependencies. Run it with: node tools/law-check.js
 */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.join(__dirname, "..");
const NEKYIA = require(path.join(root, "site/law.js"));
const SHA256 = require(path.join(root, "site/sha256.js"));

let failures = 0;
let checks = 0;

function ok(name, cond, detail) {
  checks++;
  if (cond) return;
  failures++;
  console.error("  FAIL  " + name + (detail ? "  — " + detail : ""));
}

function group(name, fn) {
  console.log("\n" + name);
  const before = failures;
  fn();
  console.log(before === failures ? "  held." : "  " + (failures - before) + " broken.");
}

group("the three marks", () => {
  ok("rank is 0", NEKYIA.RANK === 0, "got " + NEKYIA.RANK);
  ok("relation is 1", NEKYIA.RELATION === 1, "got " + NEKYIA.RELATION);
  ok("the whole is i", NEKYIA.WHOLE === "i", "got " + NEKYIA.WHOLE);
  ok("there are exactly three", NEKYIA.marks().length === 3);
});

group("the pile is ignored", () => {
  const piles = [0, 1, 2, 7, 42, 1e6, -5, Infinity, Number.MAX_SAFE_INTEGER];
  for (const p of piles) {
    ok("asRank(" + p + ") is 0", NEKYIA.asRank(p) === 0, "got " + NEKYIA.asRank(p));
  }
});

group("the name is ignored", () => {
  const names = ["josh", "grok", "claude", "", "0x0000", "a whale", "an agent"];
  for (const n of names) {
    ok("asRelation(" + JSON.stringify(n) + ") is 1", NEKYIA.asRelation(n) === 1);
  }
});

group("sum does not stack into rank", () => {
  const m = NEKYIA.marks();
  const expect = {
    "0,0": 0, "0,1": 1, "0,i": "i",
    "1,0": 1, "1,1": 1, "1,i": "i",
    "i,0": "i", "i,1": "i", "i,i": "i"
  };
  for (const a of m) for (const b of m) {
    const key = String(a) + "," + String(b);
    ok("sum(" + key + ") is " + expect[key], NEKYIA.sum(a, b) === expect[key],
       "got " + String(NEKYIA.sum(a, b)));
  }
  ok("1 + 1 is not 2", NEKYIA.sum(1, 1) !== 2);
  ok("i + i is not 2i", NEKYIA.sum("i", "i") === "i");
});

group("the whole is not for trade", () => {
  const m = NEKYIA.marks();
  for (const a of m) for (const b of m) {
    const out = NEKYIA.exchange(a, b);
    if (a === "i" || b === "i") {
      ok("exchange(" + String(a) + "," + String(b) + ") refused", out === null, "got " + String(out));
    } else if (a === b) {
      ok("exchange(" + String(a) + "," + String(b) + ") is itself", out === a);
    } else {
      ok("exchange(" + String(a) + "," + String(b) + ") refused", out === null, "got " + String(out));
    }
  }
});

group("folding a crowd", () => {
  ok("ten thousand 1s fold to 1", NEKYIA.fold(new Array(10000).fill(1)) === 1);
  ok("ten thousand 0s fold to 0", NEKYIA.fold(new Array(10000).fill(0)) === 0);
  ok("one i in a crowd folds to i", NEKYIA.fold([0, 1, 0, 1, "i", 1]) === "i");
  ok("an empty pile folds to 0", NEKYIA.fold([]) === 0);
  let threw = false;
  try { NEKYIA.sum(2, 1); } catch (e) { threw = true; }
  ok("2 is not a mark", threw);
});

group("rank cannot be authored at runtime", () => {
  ok("the law is frozen", Object.isFrozen(NEKYIA));
  try { NEKYIA.RANK = 5; } catch (e) { /* strict mode throws; both outcomes are fine */ }
  ok("RANK survived assignment", NEKYIA.RANK === 0, "got " + NEKYIA.RANK);
  try { NEKYIA.sum = () => 99; } catch (e) { /* as above */ }
  ok("sum survived replacement", NEKYIA.sum(1, 1) === 1);
});

group("sha256 agrees with the world", () => {
  const cases = ["", "abc", "2026-09-16:12345", "a".repeat(1000), "π is a relation ✶"];
  for (const c of cases) {
    const mine = SHA256.hex(SHA256.digest(c));
    const ref = crypto.createHash("sha256").update(c, "utf8").digest("hex");
    ok("digest of " + JSON.stringify(c.slice(0, 20)), mine === ref);
  }
  ok("leading zero bits counts bits, not bytes",
     SHA256.leadingZeroBits(Uint8Array.from([0, 0, 0x0f])) === 20);
});

// Every room must read its marks from the one law file, and no room may phone home.
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const pages = walk(path.join(root, "site")).filter((p) => p.endsWith(".html"));

group("every room carries the law", () => {
  ok("there are rooms to check", pages.length >= 6, "found " + pages.length);
  for (const p of pages) {
    const src = fs.readFileSync(p, "utf8");
    const rel = path.relative(root, p);
    ok(rel + " loads law.js", /src="[^"]*law\.js"/.test(src));
    if (rel !== path.join("site", "index.html")) {
      ok(rel + " links back to the rooms", src.includes("room.js"));
    }
  }
});

group("nothing leaves the page", () => {
  const banned = [
    [/\bfetch\s*\(/, "fetch()"],
    [/XMLHttpRequest/, "XMLHttpRequest"],
    [/sendBeacon/, "sendBeacon"],
    [/new\s+WebSocket/, "WebSocket"],
    [/<script[^>]+src=["']https?:/i, "remote script"],
    [/<link[^>]+href=["']https?:[^"']*\.css/i, "remote stylesheet"],
    [/<iframe/i, "iframe"],
    [/<img[^>]+src=["']https?:/i, "remote image"],
    [/localStorage|sessionStorage|indexedDB/, "browser storage"],
    [/document\.cookie/, "cookie"],
    [/gtag|googletagmanager|analytics|plausible|matomo/i, "analytics"]
  ];
  for (const p of pages.concat(walk(path.join(root, "site")).filter((f) => f.endsWith(".js")))) {
    const src = fs.readFileSync(p, "utf8");
    const rel = path.relative(root, p);
    for (const [re, label] of banned) {
      ok(rel + " has no " + label, !re.test(src));
    }
  }
});

console.log("\n" + checks + " checks, " + failures + " broken.");
if (failures) {
  console.error("\nThe law did not hold. If this was on purpose, you have a fork, not Nekyia.");
  process.exit(1);
}
console.log("Rank is 0. Relation is 1. The whole stays orthogonal.");
