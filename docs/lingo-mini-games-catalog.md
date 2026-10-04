# Lingo Legacy Games — Shared LINGO Mini-Games Catalog

STATUS: DEVELOPMENT / QA CONTRACT. No production activation authority.

Every flagship game exposes the shared LINGO Mini-Games layer. Mini-games are independently addressable gameplay modules with title-specific skins, rules modifiers and unlock conditions.

## Core catalog

### Lingo Jeopardy
Quiz-board competition.
Core loop: CATEGORY -> CLUE -> ANSWER -> VALIDATE -> SCORE -> NEXT CLUE.
Systems: categories, timers, wagers, streaks, difficulty, score multipliers, final-round resolution.

### Lingo Pit Ball
Physics/arcade ball challenge.
Core loop: AIM -> LAUNCH -> PHYSICS -> TARGETS -> COMBO -> SCORE -> RESET.
Systems: trajectory, collision, targets, combo chains, hazards, bonus gates and score multipliers.

### Wheel of Lingo
Wheel-based choice/reward game.
Core loop: SPIN -> DECELERATE -> LAND -> RESOLVE -> BONUS -> RESULT.
Systems: deterministic QA seed, weighted segments, animation states, reward resolution and cooldown rules.

### Lingo Rep Battle
Competitive performance/battle mini-game.
Core loop: SELECT -> ROUND -> ATTACK/COUNTER -> SCORE -> COMBO -> WIN/LOSS.
Systems: timing, matchup modifiers, crowd meter, streaks, counters, round scoring and results.

### Craps
Craps-inspired virtual dice table.
Core loop: SET TABLE -> SELECT VIRTUAL BET -> ROLL -> RESOLVE -> SETTLE -> NEXT ROLL.
Systems: pass-line style virtual rules, point state, dice resolution, payout table and session state.
No real-money wagering.

### Rocket
Risk/reaction multiplier mini-game.
Core loop: START -> MULTIPLIER RISES -> PLAYER CASH-OUT DECISION -> RESOLVE.
Systems: deterministic QA mode, multiplier curve, timing window, win/loss state and reset.
No real-money wagering.

## Shared mini-game contract

Each module must provide:
- boot/init
- rules/help
- tutorial
- gameplay state machine
- input validation
- deterministic QA mode
- score/reward resolution
- cinematic event hooks
- audio event hooks
- accessibility/reduced-motion behavior
- pause/resume where applicable
- result/reset flow
- telemetry contract
- asset manifest
- debug/cheat controls disabled outside development/QA

## Flagship integration

Each flagship game can:
1. launch any eligible mini-game;
2. apply a world-specific visual/audio skin;
3. apply permitted difficulty or rules modifiers;
4. award title-specific progression;
5. surface mini-game achievements;
6. return the player to the host game's state;
7. preserve host-game state across entry/exit.

Mini-game modules must not corrupt the host game's save state.

## Example host mapping

That's My Lingo -> all six mini-games
Spades Is My Lingo -> all six, with card/table variants
UhNo Lingo University -> all six, with campus/game-show variants
Lingo Eruptions -> all six, with arcade/volcanic variants
Cashman Lingo Mania -> all six, with prize-show variants

## Architecture

FLAGSHIP GAME
  -> MINI-GAME REGISTRY
      -> Lingo Jeopardy
      -> Lingo Pit Ball
      -> Wheel of Lingo
      -> Lingo Rep Battle
      -> Craps
      -> Rocket
  -> MINI-GAME RESULT
  -> HOST GAME PROGRESSION

Mini-games are shared gameplay modules, not merely promotional cards.

## Governance
Mini-game contracts expand development scope only. CI, runner, device, store, deployment and production gates remain independently governed.
