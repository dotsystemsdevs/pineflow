# AGENTS.md

New Expo projects come with an AGENTS.md full of Expo's own rules. Keep all of it.
Paste the part below under Expo's text and fill it in. The whole file stays under 150 lines:
long files get skimmed, by agents too. CLAUDE.md holds one line: @AGENTS.md

## Stack

[One line from docs/TechDesign.md, e.g. Expo SDK [version] + Expo Router, StyleSheet, data on the phone (expo-sqlite), RevenueCat, EAS]

## Folders

- `src/app/`: screens (Expo Router, one file per route)
- `src/components/`: shared parts
- `src/lib/`: logic without UI (storage, purchases, analytics)
- `docs/`: PRD.md, TechDesign.md, TASKS.md

## Rules

1. Read before you write. Never overwrite code you were not asked to change.
2. One task from docs/TASKS.md at a time. Plan first, then build.
3. No file over 500 lines.
4. 3 tests per feature: one normal case, one edge case, one failure.
5. `npx tsc --noEmit` and `npm test` pass before a task is done.
6. Ask before adding a new package, and add it with `npx expo install`.
7. Secret keys never go in the app. Nothing secret is named `EXPO_PUBLIC_`.
8. [Your own rule]

## Never touch

- `.env` (your secret keys) and `package-lock.json` (pinned package versions)
- Never write a secret into this file or any other file in the repo

Change a rule? Update this file in the same commit, so the rules always match the code.
