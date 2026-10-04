# Lingo Legacy Games — Standalone Game Completion Contract

STATUS: DEVELOPMENT / QA CONTRACT. Production activation remains governed by independent evidence.

Each standalone title is independently playable and testable. Shared services are adapters, not gameplay dependencies.

## Standalone minimum
Every game must have:
1. independent boot/loading/error flow
2. independent gameplay state machine
3. title-specific rules and win/loss resolution
4. title-specific tutorial
5. title-specific progression
6. title-specific save/checkpoint contract
7. title-specific cinematic presentation
8. audio/SFX event map
9. responsive controls
10. accessibility and reduced-motion behavior
11. debug/cheat layer disabled outside development/QA
12. deterministic test hooks
13. asset manifest and fallback assets
14. telemetry contract
15. standalone smoke/E2E test matrix
16. results/replay/reset flow

## Title completion definitions

### That's My Lingo
BOOT -> LOBBY -> BET CONFIGURATION -> SPIN -> REEL RESOLUTION -> PAYLINE EVALUATION -> BONUS -> REWARD -> RESULTS.
Rules: 5x3 / 20 paylines, virtual currencies only, deterministic test seeds, no real-money wagering.
Tutorial: paylines, spin, symbol evaluation, wild/scatter, bonus and reward.
Standalone shell: title screen, profile, wallet test adapter, settings, tutorial, play screen, results and reset.

### Spades Is My Lingo
BOOT -> TABLE -> DEAL -> BID -> TURN LOOP -> TRICK RESOLUTION -> ROUND SCORE -> MATCH RESULT.
Rules: valid card play, follow-suit validation, bid contract, trick winner, score and match completion.
Tutorial: deal, bid, lead, follow suit, win trick, score.
Standalone shell: local table, rules/help, tutorial, scorecard, replay/reset.

### UhNo Lingo University
BOOT -> CAMPUS -> CLASS -> QUESTION ROUND -> ANSWER -> STREAK/MULTIPLIER -> CHECKPOINT -> RESULT.
Rules: answer validation, timer, difficulty, streak, multiplier and progression.
Tutorial: navigation, class selection, answering and scoring.
Standalone shell: campus map, class selector, gameplay, results, progress and reset.

### Lingo Eruptions
BOOT -> HUB -> LEVEL -> MOVE -> HAZARD LOOP -> COMBO -> ERUPTION EVENT -> CHECKPOINT -> RESULT.
Rules: movement, collision/hazard timing, combo chain, environmental triggers, checkpoint and survival state.
Tutorial: movement, dodge, combo, environmental trigger and checkpoint.
Standalone shell: level select, gameplay, pause, checkpoint, results and replay/reset.

### Cashman Lingo Mania
BOOT -> SHOW OPEN -> ROUND -> CHOICE -> REVEAL -> PRIZE RESOLUTION -> BONUS -> RESULTS.
Rules: selection validation, reveal sequencing, prize resolution, bonus multiplier and round completion.
Tutorial: selection, reveal, prize resolution and bonus.
Standalone shell: show intro, round UI, results, replay/reset and settings.

## Independence rule
A shared service outage must not make the core standalone gameplay state machine undefined. Integrations fail gracefully behind adapters.

## QA rule
Standalone completion is a development milestone only. It does not imply CI PASS, G02 PASS, device certification, store approval, deployment authorization or production activation.
