# Lingo Legacy Games — Cinematic Graphics, Logic, Rules, Cheats & Tutorials Contract

## Status
DEVELOPMENT CONTRACT ONLY. No production activation authority is granted.

## Cinematic Graphics
Every title supports:
- 16:9 hero composition and title-safe zones
- establishing, gameplay, close-up, reward, victory and defeat camera profiles
- layered depth: foreground, gameplay plane, background and atmosphere
- neutral, tension, reward, danger and celebration lighting states
- title-specific material language
- particles, bloom, impact, trails and environmental VFX
- animated UI transitions with reduced-motion fallback
- loading, pause, transition, error, reward and results presentation
- audio-reactive hooks without making audio a gameplay dependency
- manifest, preload, checksum and runtime asset validation

### Graphics quality gate
A visual feature is not production-ready merely because it renders. It needs deterministic assets, responsive composition, loading/error fallback, accessibility behavior, performance budget, test hooks and telemetry contracts where applicable.

## Gameplay Logic
Deterministic loop:
INPUT -> VALIDATE -> STATE TRANSITION -> RESOLVE RULES -> REWARD/PENALTY -> TELEMETRY -> PRESENTATION

Required boundaries:
- input and legal-action validation
- state-transition guards
- cooldown/timer handling
- scoring and reward calculation
- win/loss/draw resolution
- save/checkpoint semantics
- replay-safe deterministic seeds where randomness exists
- idempotent reward resolution
- error recovery without corrupting player state

## Rules System
Rules are explicit data/contracts, not hidden UI behavior.

Each game defines:
- objective
- player actions
- legal/illegal actions
- turn/round boundaries
- scoring
- modifiers
- win/loss/draw conditions
- progression
- reward and penalty tables
- accessibility substitutions
- tutorial unlock conditions

## Cheat / Debug System
Cheats are development and QA tooling, never production entitlement.

Environment separation:
DEV CHEAT -> TEST ENVIRONMENT ONLY
DEBUG FLAG -> LOCAL/QA ONLY
PRODUCTION -> DISABLED BY DEFAULT

Controlled test commands may include:
- god mode
- infinite test currency
- unlock all test content
- skip tutorial
- force win/loss
- set level/XP
- spawn test reward
- deterministic replay seed
- telemetry echo
- reset save/cache
- hitbox/FPS/state inspection
- asset-manifest inspection

Safety rules:
- no real-money value
- no auth bypass
- no production economy mutation
- no hidden public activation
- every command emits an audit/debug event
- availability is environment/build gated
- release builds fail closed when debug capability is requested

## Tutorial System
Tutorials are interactive systems.

State model:
INTRO -> DEMONSTRATE -> PLAYER_ATTEMPT -> VALIDATE -> REINFORCE -> COMPLETE

Required features:
- first-run onboarding
- contextual prompts
- controller/touch/keyboard mapping
- progressive disclosure
- safe skipping
- replayable training
- practice sandbox
- failure recovery
- accessibility narration/text alternatives
- reduced-motion mode
- completion persistence
- tutorial versioning for changed mechanics

## Game-Specific Logic

### That's My Lingo
5x3 / 20-payline slot-style loop: symbol evaluation, wild/scatter behavior, bonus states, virtual-currency contracts, XP and reward resolution.
Tutorial: paylines -> spin -> symbol evaluation -> bonus -> reward collection.

### Spades Is My Lingo
Trick-taking logic: deal, turn order, suit-following validation, bidding/contract resolution, trick winner and score progression.
Tutorial: deal -> bid -> lead -> follow suit -> win trick -> score.

### UhNo Lingo University
Campus game-show logic: question state, answer validation, timers, streaks, difficulty progression, score multipliers and round transitions.
Tutorial: choose class -> answer -> streak -> multiplier -> checkpoint.

### Lingo Eruptions
Arcade survival logic: movement/input, hazard timing, combo chains, environmental triggers, checkpoints, score and survival state.
Tutorial: move -> dodge -> chain -> trigger eruption -> survive -> checkpoint.

### Cashman Lingo Mania
Prize-show logic: round state, selection validation, reveal sequence, prize resolution, bonus multipliers and results.
Tutorial: choose -> reveal -> resolve -> bonus -> collect.

## Cinematic Event Grammar
Standard events:
GAME_BOOT
WORLD_ENTER
ROUND_START
ACTION_COMMITTED
COMBO_STARTED
BONUS_TRIGGERED
REWARD_PRESENTED
VICTORY
DEFEAT
CHECKPOINT
TUTORIAL_STEP
ERROR_RECOVERED

Presentation, audio, analytics and accessibility consume these events independently.

## Production Boundary
This contract expands the development/studio layer only.

It does not establish CI success, runner verification, device validation, store certification, deployment authorization or production activation. Those remain governed by the existing fail-closed evidence chain.
