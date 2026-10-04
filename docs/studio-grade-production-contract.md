# Studio-Grade Production Contract

This development contract defines the minimum studio-grade surface for every Lingo Legacy Games experience. It is implementation guidance, not production certification.

## Shared runtime
- Boot and preload orchestration with deterministic loading/error states.
- Lingo ID/profile boundary with guest-to-account upgrade contract.
- Cloud-save contract, local fallback, save slots, conflict policy, and recovery path.
- XP, levels, achievements, rewards, inventory, digital-item and cross-game progression contracts.
- Settings, accessibility, localization-ready text, reduced-motion and audio controls.
- Notifications/news/event contracts with opt-in boundaries.
- Analytics/telemetry schema with privacy-safe event names and no invented credentials.

## Player-facing systems
- Main menu, continue/new game, profile, tutorial, pause, settings, help/support.
- Game HUD and state feedback.
- Results/rewards summary.
- Collection/codex/journal where applicable.
- Friends/presence/party/lobby contracts where applicable.
- Leaderboards, challenges, events and replay/highlight contracts where applicable.

## Commerce and economy
- Virtual-only economy boundaries.
- Demo Coins, Loyalty Bucks and Lingo Tokens where a title uses them.
- Store/catalog contract, item ownership, receipt-validation boundary and entitlement states.
- No real-money wagering is enabled by this development contract.
- No payment provider credentials are embedded or invented.

## Content and asset pipeline
- Manifest-driven assets.
- Source -> normalize -> optimize -> checksum -> manifest -> preload -> runtime validation.
- Logo, title screen, loading screen, hero art, characters/cards, environments, UI icons, VFX, music, SFX, voice and store-art slots.
- Missing media must fail gracefully to a deterministic fallback state.

## Quality
- Unit, integration, interaction smoke, responsive, accessibility, audio, asset-manifest, security-contract and store-package tests.
- Test hooks must expose deterministic state transitions without bypassing production authorization.
- Evidence must identify commit, environment, test scope, timestamp and artifact provenance.

## Operations
- Feature flags and kill-switch contracts.
- Error boundary and recovery UI.
- Health/readiness telemetry contract.
- Content/event registry.
- Admin/operator surface contract with least-privilege boundaries.
- Version/build metadata visible in development diagnostics.

## Release governance
SPECIFICATION -> IMPLEMENTATION -> TEST -> EVIDENCE -> VERIFICATION -> ACCEPTANCE -> AUTHORIZATION -> PROMOTION.

Development completeness never implies production authorization. GitHub runner, device/runtime, deployment and store evidence remain mandatory release gates.
