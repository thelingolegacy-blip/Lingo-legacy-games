# Lingo Legacy Games — Complete Ten-Title Flagship Baseline

## Canonical slate
1. Tricia's Escape — Fantasy Action-Adventure
2. Doughboy's Oasis — Persistent Virtual World
3. Crazy Weasol's — Dark 3D Platform Adventure
4. Silly in Philly: The Streets — Urban Open-World Action Comedy
5. Jersey Shore & the Undead — Co-op Survival Horror
6. That's My Lingo — Virtual slot-style game
7. Spades Is My Lingo — Card strategy
8. UhNo Lingo University — Educational game-show
9. Lingo Eruptions — Arcade action
10. Cashman Lingo Mania — Prize-show game experience

## Per-title completion contract
Every title must define, independently and testably:
- identity/title mark and visual language
- title/menu/loading/error/offline states
- world or game hub
- characters/NPCs or game pieces
- environments/backgrounds
- gameplay state machine and rules
- controls/input mapping
- tutorial/training
- progression/checkpoints/save/reset
- rewards/achievements
- audio/music/SFX/voice contract
- animation/camera/VFX contract
- accessibility/reduced motion
- asset manifest, preload and runtime validation
- deterministic QA hooks
- telemetry event grammar
- results/replay/reset
- shared-service adapter boundaries

## Flagship-specific experience contracts
### Tricia's Escape
Fantasy exploration/action-adventure with world traversal, quests, encounters, environmental discovery, checkpoints, cinematic reward/victory/defeat states and character progression.

### Doughboy's Oasis
Persistent virtual-world experience with hub/world navigation, avatar identity, social presence, activities, collections, events, economy-safe rewards, housing/world customization contracts and graceful offline degradation.

### Crazy Weasol's
Dark 3D platform adventure with traversal, hazards, enemy encounters, checkpoints, collectibles, combo/action feedback, camera profiles and replayable challenge structure.

### Silly in Philly: The Streets
Urban open-world action comedy with district traversal, missions, activities, NPC interactions, vehicle/travel adapter, collectibles, comedy/cinematic beats, progression and safe social systems.

### Jersey Shore & the Undead
Co-op survival horror with team/lobby contract, exploration, enemy/hazard loops, objectives, resource-safe virtual progression, checkpoints, revive/failure states, horror presentation and reduced-motion/accessibility controls.

### That's My Lingo
5x3/20-payline virtual slot-style loop: lobby → bet configuration → spin → reel resolution → payline evaluation → bonus → reward → results. No real-money wagering.

### Spades Is My Lingo
Deal → bid → turn loop → trick resolution → round score → match result, with card/table presentation, tutorial, deterministic test dealing and progression.

### UhNo Lingo University
Campus → class → question round → answer validation → streak/multiplier → checkpoint → result, with difficulty, timers, tutorial and accessibility alternatives.

### Lingo Eruptions
Hub → level → movement → hazard loop → combo → eruption event → checkpoint → result, with deterministic hazards and responsive action feedback.

### Cashman Lingo Mania
Show open → round → choice → reveal → prize resolution → bonus → results, using virtual/test rewards only.

## Shared mini-game layer
Lingo Jeopardy, Lingo Pit Ball, Wheel of Lingo, Lingo Rep Battle, Craps and Rocket are independently addressable modules with host-specific skins/rules modifiers.

## Shared platform layer
Identity, signup/onboarding, profiles, avatars, XP, levels, achievements, challenges, streaks, collections, rewards, leaderboards, stores, inventory, referrals, friends, parties/lobbies, notifications, events, settings, accessibility, support, photo/replay/highlights and telemetry.

## Asset/audio/cinematic completion
All ten titles inherit the shared asset lifecycle:
SOURCE → NORMALIZE → OPTIMIZE → CHECKSUM → MANIFEST → PRELOAD → VALIDATE → RUNTIME.

Required visual classes include logos, title screens, loading screens, environments, characters/NPCs, gameplay pieces, icons, buttons, panels, VFX, transitions, reward/store/leaderboard/referral/tutorial art and error/offline states.

Required UI states:
DEFAULT / HOVER / FOCUS / PRESSED / DISABLED / LOADING / SUCCESS / ERROR / LOCKED / UNLOCKED.

Required cinematic systems:
camera, depth/parallax, particles/VFX, reward reveal, achievement, level-up, store feedback, tutorial, victory, defeat, pause/resume and reduced-motion alternatives.

Required audio systems:
boot, menu, navigation, button, gameplay, combo, win/loss, rewards, achievements, level-up, store, leaderboard, tutorial, notification, error, ambient, music and voice, with master/music/SFX/voice/ambient/caption controls.

## Financial boundary
Wallet, Balance, Deposit, Withdraw, Transactions, Payment Methods and Cash-out Status may exist as presentation states only.
DEPOSIT_ENABLED=false
WITHDRAWAL_ENABLED=false
REAL_MONEY_WAGERING=false

No title may charge, transfer, settle or withdraw real money without a separately authorized financial architecture, provider integration, identity/age/eligibility controls, jurisdiction/compliance review, fraud controls, ledger/reconciliation, audit trail, security review, production evidence and explicit release authorization.

## Completion meaning
This document finalizes the development architecture/contract layer for all ten titles. It does NOT assert CI pass, G02 acceptance, device/store certification, production deployment or production activation.

Canonical transition:
SOURCE → EVIDENCE → VERIFICATION → ACCEPTANCE → AUTHORIZATION → PROMOTION

Any missing verified predicate keeps the applicable production gate closed.
