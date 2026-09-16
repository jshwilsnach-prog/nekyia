/**
 * THE LAW — the browser copy.
 *
 * This is src/game/law.ts, carried into the rooms that run in a page.
 * It is a classic script on purpose: it loads from file:// with no build,
 * no bundler, no server. Fork it. Keep it.
 *
 *   0  — rank. Nobody is more. Nobody is less.
 *   1  — relation. Eye to eye. 1 2 1.
 *   i  — the whole. Orthogonal to 0 and 1. Not spendable. Not a third currency.
 *
 * Every app under site/apps reads its value marks from here. If you author
 * rank, you have to edit this file, and then you have left Nekyia.
 */
(function (global) {
  "use strict";

  var RANK = 0;
  var RELATION = 1;
  var WHOLE = "i";

  /** Totals do not rank. Any pile equals the same in relation to all. */
  function asRank(_amount) {
    return RANK;
  }

  /** A tip, a bounty, a planet, a body: still one relation. */
  function asRelation(_who) {
    return RELATION;
  }

  /** The whole. Cannot be minted from a pile. */
  function asWhole() {
    return WHOLE;
  }

  function isMark(v) {
    return v === RANK || v === RELATION || v === WHOLE;
  }

  /**
   * i does not add into 0, and 0 does not add into it.
   * i + i is still i — not 2i, not a bigger whole.
   * 1 + 1 is still 1 — relation does not stack into rank.
   */
  function sum(a, b) {
    if (!isMark(a) || !isMark(b)) throw new TypeError("not a mark");
    if (a === WHOLE || b === WHOLE) return WHOLE;
    if (a === RELATION || b === RELATION) return RELATION;
    return RANK;
  }

  /** The whole cannot be exchanged. Nothing becomes i by trade. */
  function exchange(from, to) {
    if (!isMark(from) || !isMark(to)) throw new TypeError("not a mark");
    if (from === WHOLE || to === WHOLE) return null;
    if (from === to) return from;
    return null;
  }

  /** A pile of anything, folded. The pile is ignored; only the marks speak. */
  function fold(list) {
    var acc = RANK;
    for (var i = 0; i < list.length; i++) acc = sum(acc, list[i]);
    return acc;
  }

  function marks() {
    return [RANK, RELATION, WHOLE];
  }

  var LAW =
    "1 to i to 0 in a loop. All money equals 0 or 1 or i. All value is the " +
    "same in relation to all. We are all one. Different relations. " +
    "Unchanging whole. The game is the game.";

  var api = {
    RANK: RANK,
    RELATION: RELATION,
    WHOLE: WHOLE,
    LAW: LAW,
    asRank: asRank,
    asRelation: asRelation,
    asWhole: asWhole,
    isMark: isMark,
    sum: sum,
    exchange: exchange,
    fold: fold,
    marks: marks,
  };

  // The constants are frozen so a fork has to be a fork, not a patch at runtime.
  Object.freeze(api);

  if (typeof module === "object" && module.exports) module.exports = api;
  global.NEKYIA = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
