# Links

A constellation under the lintel: copied law plus static rooms. The walking is
still `joshua`. The door is still the name that was bought.

Titles are short on purpose. A link is a relation, not a pitch.

## The order

The door first and always. Then the rooms on the lintel, once Pages is serving
them. Then the law, the source, the wallet.

Status is honest rather than aspirational. **Live** works right now. **Waiting**
returns GitHub's empty 404 until Settings &rarr; Pages &rarr; Source: GitHub
Actions is set on the `lintel` repository and a run goes green.

| # | Title | URL | Status |
| --- | --- | --- | --- |
| 1 | Play &mdash; nekyia.me | https://nekyia.me/ | live |
| 2 | Seven | https://jshwilsnach-prog.github.io/lintel/apps/seven.html | waiting |
| 3 | Two counts on a circle | https://jshwilsnach-prog.github.io/lintel/apps/pi.html | waiting |
| 4 | Marks | https://jshwilsnach-prog.github.io/lintel/apps/marks.html | waiting |
| 5 | Dimensions | https://jshwilsnach-prog.github.io/lintel/apps/dimensions.html | waiting |
| 6 | Aught | https://jshwilsnach-prog.github.io/lintel/apps/aught.html | waiting |
| 7 | Loop | https://jshwilsnach-prog.github.io/lintel/apps/loop.html | waiting |
| 8 | The law | https://github.com/jshwilsnach-prog/nekyia/blob/main/LAW.md | live |
| 9 | The philosophy | https://github.com/jshwilsnach-prog/nekyia/blob/main/PHILOSOPHY.md | live |
| 10 | Table consensus | https://github.com/jshwilsnach-prog/nekyia/blob/main/CONSENSUS.md | live |
| 11 | joshua | https://github.com/jshwilsnach-prog/joshua | live |
| 12 | nekyia | https://github.com/jshwilsnach-prog/nekyia | live |
| 13 | aught | https://github.com/jshwilsnach-prog/aught | live |
| 14 | Zodl | https://zodl.com/ | live |
| 15 | How the wallet works | https://github.com/jshwilsnach-prog/joshua/blob/main/WALLET.md | live |

Rows 1 and 8 through 15 can go up today. Rows 2 through 7 should wait. A dead
row on a shelf is worse than a missing one.

## What the rooms still need

Two things, both in the `lintel` repository, neither of them code:

1. **Pages is off.** The workflow is committed and correct, but every run has
   failed at the deploy step with `Failed to create deployment (status: 404)`
   and the message `Ensure GitHub Pages has been enabled`. Set the source to
   GitHub Actions in Settings.
2. **Enabling it does not re-run anything.** The workflow fires on push to
   `main` and on `workflow_dispatch` only. After the switch, run it from the
   Actions tab, re-run the last failed run, or push a commit.

There is also a two-line defect worth folding into that push: commit `810c194`
added `apps/dimensions.html` and `apps/loop.html` without linking either from
`index.html`, so both rooms are reachable only by typing the address. Add a
Dimensions row after Marks and a Loop row after Aught, matching the surrounding
`<a class="door">` lines.

## Two things that behave differently off the door

- Every lintel page loads Cormorant Garamond from Google, so every visitor's
  address reaches Google before they have done anything. For a house whose law
  is that there is no who on the tally, that sits awkwardly in the `<head>`.
  Self-hosting the font file removes it.
- `apps/aught.html` fetches `nekyia.me/api/aught` cross-origin. Served from
  `github.io` that needs `Access-Control-Allow-Origin` on the Worker. Its
  `.catch()` degrades to "the door still opens" rather than breaking, so the
  worst case is a missing count, not a broken room.

## The rooms in this repository

Separate from the list above, and not on it. `site/` holds a second, heavier set
of six: a raycast labyrinth walked in 3D, 2D, 1D, 0D and a loop; π squeezed from
both sides in eighty-digit integer arithmetic; the value algebra with buttons on
it. No build step, and `tools/law-check.js` fails if any of them grows a tracker
or authors rank.

Nothing points at them and they replace nothing. If they are ever wanted on the
shelf, the work is reskinning to `house.css` and flattening
`apps/<name>/index.html` to `apps/<name>.html`, not rewriting.

## What these rooms refuse

No account. No score. No leaderboard. No tracker, no analytics, no cookie, no
browser storage. No network request after the page has loaded. That is checked
by `tools/law-check.js`, which fails the build if any page grows a `fetch`, an
iframe, a remote script, or a call to `localStorage`.

Rank is 0. Relation is 1. The whole stays orthogonal.
