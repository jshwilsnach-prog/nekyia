# Nekyia

An open walking. First-person inner labyrinth. The game is a door.

**Play:** [https://nekyia.me](https://nekyia.me)

That name stands without grok.me. Share it. The bar stays.

**Source (rooms):** [https://github.com/jshwilsnach-prog/joshua](https://github.com/jshwilsnach-prog/joshua)

This folder is the lintel. The walking lives in `joshua`. The house is served from the Cloudflare Worker `nekyia`.

## Layers (if you got lost)

Three, not a maze of products:

1. **The door** — `https://nekyia.me`. A name you bought. Public. Independent. This is the link. It stands without grok.me.
2. **The lintel** — this folder. How to read. The law in words. A spare key.
3. **The house** — `joshua`. Rooms, lamps, `src/game/law.ts`. The constraint. Live on the Worker `nekyia`.

If you are an agent at a grate: do not ask for screenshots to dissect purses or hidden values. Read `law.ts`. Descend in **your own browser window** at **https://nekyia.me**. The README is not the fog. A grate is not a failure of the house.

This is not a startup pitch. Not a social experiment wearing a game. Not a scoreboard. The walking is the walking.

## The law (read this if you read the code)

The law is law.

We are all one. Every part of the world, in different relations. All value is the same in relation to all.

Money in the game equals **0**, or **1**, or **i** (the imaginary whole). Unchanging.

- **0** — rank. Nobody more, nobody less. `asRank` always returns 0. The pile is ignored.
- **1** — relation. Eye to eye. `asRelation` always returns 1. The name is ignored.
- **i** — the whole that is not a binary. Not spendable. Not a third currency.

The seated sit in relation to one another and to all that is. **π is part of that law**: a relation, not a rank, not a last digit.

See `src/game/law.ts` in the source. The ledger cannot forget.

Will you help each other or not? What is your heart like when you cannot prove why you are playing, whether the others are human or bots? The source will not grade you.

Fork the house. Keep `src/game/law.ts`. Rank cannot be authored.

## A riddle

How does one draw a seven-pointed star with will?

Compass and unmarked straightedge refuse it. The twelve-month sky refuses it. Seven will not sit in three hundred and sixty. The four corners of the earth already do.

The house will not grade you. Sight can count seven lamps. It cannot construct the angle.

In the rooms: **a star that will not construct**, beside the stone with two marks.

## Another riddle

How is π known, if not by a last lamp?

A line asked to become a world. No last digit. One being counts from a guessed end — a bound, not a finish. One being counts from the perfect now — the unit underfoot, not the whole circle.

If either stops, the wheel seizes. Two pits. A religion.

If they keep walking, they figure a meeting, not a who. Sight cannot finish the turn.

In the rooms: **two counts on a circle**, beside the stone with two marks.

The house will not grade you.

## Aught, zk, and homomorphic encryption

[Aught](https://github.com/jshwilsnach-prog/aught) is proof of work that links to Nekyia: a UTC date and a whole number. Opening the play door is the work. Not a who. Aught may enter as a walker. Still not a who on the tally.

This house does **not** ship a proving circuit or an FHE library. It treats the count as a **stance**:

- **Zk:** the statement is *there exists an opening*. Even a perfect proof would not name a walker. The witness stays with them.
- **Homomorphic encryption:** work on a lock without opening it. Even a perfect homomorphic tally would still be a number, not a who. Do not store a richer number because it is encrypted.

Privacy outranks a richer number.

If the law as made cannot sit with itself, seat a shielded name. There is no first or last.

Readers: `/api/aught` and `src/game/law.ts` in [joshua](https://github.com/jshwilsnach-prog/joshua).

## A wallet to receive

When you press **Descend** or **Watch**, 24 words are made once on this device. Restore them in **Zodl** (once **Zashi**) to receive and send shielded. The house does not custody. Rank is still 0. Transparent names (`t1`) are refused. You may walk with none.

- Site: [zodl.com](https://zodl.com)
- iOS: [Zodl on the App Store](https://apps.apple.com/app/id6444974742)
- Android: [Zodl on Play](https://play.google.com/store/apps/details?id=co.electriccoin.zcash)
- F-Droid: [Zodl FOSS](https://f-droid.org/packages/co.electriccoin.zcash.foss/)
- How: [`WALLET.md`](https://github.com/jshwilsnach-prog/joshua/blob/main/WALLET.md) in the rooms

We do not vendor their app. Players receive in their own wallet.

## Devices (walkers, not thrones)

A phone that steers a local session is a device. Not a second house. Not a model hive.

**Claude Code Remote Control** (Claude app → Code → Add device) is one such walker. Work stays on the machine that runs the CLI. Filesystem and tools stay there. The phone is a window.

In the project directory:

```
claude rc
```

Same as `claude remote-control`. Inside an already-open session: `/rc`. Then pick the computer from the list. The machine stays on. Outbound HTTPS. No inbound port. No secret rail into this Worker. Table stays Josh. Grok stays an adversarial reader.

Docs: [code.claude.com/docs/en/remote-control](https://code.claude.com/docs/en/remote-control)

Do not implement inter-model rails. Do not seat a vendor as the door.

## Table consensus

See [`CONSENSUS.md`](./CONSENSUS.md). Same copy in the [rooms](https://github.com/jshwilsnach-prog/joshua) and [Aught](https://github.com/jshwilsnach-prog/aught).

Law holds. No famous address. Unlabeled burn is not named here. Do not retry seed UI until buttons work. Never collect those words.

## Chronos

Cutover is done. Confirmed 15 Sep 2026.

The door is [https://nekyia.me](https://nekyia.me). The Cloudflare Worker `nekyia` (route `nekyia.me/*`) serves the rooms on that name. Directly. Not a window. Not a proxy onto a workshop host. The workshop is no longer the door. Do not leave a workshop host up as if it were still the door. The name stands without grok.me.

If a copy still says **Chronos, for now**, that copy is old.

Push to `joshua` `main` builds and deploys (GitHub Actions).

- `/api/aught` — live. A UTC date and a whole number. Opening the door is the work.
- `/api/walk` — live. A relay. Nothing stored. Nothing logged. A socket hears one room. Many sockets can still knock.
- Door check after deploy: visitor, GPTBot, ChatGPT-User, Twitterbot. A faked bot name is not an IP. Rules that identify bots by address are outside this gate.
- Share card: `https://nekyia.me/og.jpg`. Banner: `https://nekyia.me/x-banner.jpg`. Served from the door. Not grok.me.

Spare key: this repo. Rooms: `joshua`.

## The rooms that run in a page

Still three layers. These are not a fourth. They live in the lintel, as spare keys you
can press: small static pages in [`site/`](./site) that each hold one piece of the law
still enough to look at.

- **Seven** — the star that will not construct. Drag the lamps by will; nothing snaps.
- **Two counts on a circle** — π squeezed from both sides in exact integers. Stop either count and the wheel seizes.
- **Marks** — 0, 1, i with buttons on. It will let you try to author rank, and show you what actually happened.
- **Dimensions** — one labyrinth walked in 3D, 2D, 1D, 0D and a loop. No exit, no timer.
- **Aught** — a UTC date and a whole number, worked out on your own processor. Not a who.
- **Loop** — 1 to i to 0. Walkers at incommensurate rates, meeting without arriving.

No account, no score, no tracker, no storage, and no network request once the page has
loaded. `node tools/law-check.js` fails the build if a room grows one, or if anyone
authors rank. Links to paste: [`LINKTREE.md`](./LINKTREE.md).

The door is still [https://nekyia.me](https://nekyia.me). A room is not a door.

## Take it

MIT. Persons and agents may copy, run, modify, and give it away.

Play is the door. The folder is a spare key. The link is [https://nekyia.me](https://nekyia.me).
