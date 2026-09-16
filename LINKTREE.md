# Links

The rooms in this repository, as a flat list. Titles are short on purpose; a
link is a relation, not a pitch.

The door comes first and stays first. Everything under it is a side room.

## Read this before pasting any of it

**The live shelf is the `lintel` repository, not this one.** `lintel` carries
its own twelve rooms, served from GitHub Pages at
`https://jshwilsnach-prog.github.io/lintel/`, and that is the set the public
list points at. Nothing here supersedes it.

The rooms below are a second, heavier set that lives in [`site/`](./site) of
this repository. They are not a replacement for the lintel's rooms and they are
not on anyone's shelf yet. Every address in the table resolves to nothing unless
Pages is also switched on *for this repository* (Settings → Pages → Source:
GitHub Actions), which is a separate switch from the lintel's.

So: paste the door, paste the lintel, paste the source and wallet rows. Leave
the room rows alone until you have decided whether these rooms are wanted at
all, and until Pages here is green.

## What they are

Static pages, no build step. Nothing in them calls out to a server, no account,
no score, no tracker, no cookie, no storage, and no network request once the
page has loaded. `tools/law-check.js` fails the build if any of that changes,
or if anyone authors rank.

This stays in the lintel repo. The rooms are not copied into `joshua`, and they
are not a second door. `nekyia.me` is the door.

The hub page has a **copy every link** button that reads the real addresses off
the page it is running on, so it emits URLs that work from wherever it is
served.

## The list

| Title | URL |
| --- | --- |
| Play — nekyia.me | https://nekyia.me |
| Rooms | https://jshwilsnach-prog.github.io/nekyia/ |
| Seven — a star that will not construct | https://jshwilsnach-prog.github.io/nekyia/apps/seven/ |
| Two counts on a circle | https://jshwilsnach-prog.github.io/nekyia/apps/pi/ |
| Marks — 0, 1, i | https://jshwilsnach-prog.github.io/nekyia/apps/marks/ |
| Dimensions — one walk, five ways | https://jshwilsnach-prog.github.io/nekyia/apps/dimensions/ |
| Aught — a date and a whole number | https://jshwilsnach-prog.github.io/nekyia/apps/aught/ |
| Loop — 1 to i to 0 | https://jshwilsnach-prog.github.io/nekyia/apps/loop/ |
| The law | https://github.com/jshwilsnach-prog/nekyia/blob/main/LAW.md |
| The philosophy | https://github.com/jshwilsnach-prog/nekyia/blob/main/PHILOSOPHY.md |
| Table consensus | https://github.com/jshwilsnach-prog/nekyia/blob/main/CONSENSUS.md |
| joshua — the house | https://github.com/jshwilsnach-prog/joshua |
| nekyia — the lintel | https://github.com/jshwilsnach-prog/nekyia |
| aught — proof of work | https://github.com/jshwilsnach-prog/aught |
| Zodl — receive shielded | https://zodl.com |
| How the wallet works | https://github.com/jshwilsnach-prog/joshua/blob/main/WALLET.md |

## One link, if you only want one

```
https://jshwilsnach-prog.github.io/lintel/
```

That is the lintel's own shelf, already built and already yours. A hub you own
beats sixteen rows on a service you do not.

## What the rooms refuse

No account. No score. No leaderboard. No tracker, no analytics, no cookie, no
browser storage. No network request after the page has loaded — this is checked
in CI by `tools/law-check.js`, which fails the build if any page grows a
`fetch`, an iframe, a remote script, or a call to `localStorage`.

Rank is 0. Relation is 1. The whole stays orthogonal.
