# Lingo Legacy Game Studio — Master Feature System

## Studio pillars
1. **Realms** — each game owns a distinct world, cast, rules, tone, economy, and progression.
2. **Story** — cinematic campaign, episodic chapters, side quests, collectibles, codex, endings.
3. **Play** — solo, local co-op where supported, online multiplayer, competitive challenges, asynchronous events.
4. **Mini-games** — short repeatable activities that reinforce each realm's fiction.
5. **Stores** — cosmetic shops, collectibles, crafting, upgrades, bundles, rotating inventories; no pay-to-win contract is assumed.
6. **Audio** — adaptive music, ambient beds, stingers, UI feedback, footsteps, combat/event layers, accessibility controls.
7. **Visuals** — environment kits, characters, props, VFX, UI icons, badges, maps, loading art, cinematic key art.
8. **Social** — parties, invites, emotes, friends, leaderboards, safe reporting/moderation hooks.
9. **Progression** — XP, levels, achievements, unlock trees, collections, realm reputation, seasonal objectives.
10. **Live operations** — feature flags, remote content manifests, events, announcements, telemetry contracts.

## Canonical game modes

### Tricia's Escape
- Campaign: solo fantasy adventure
- Optional co-op expedition layer
- Realm: enchanted frontier
- Mini-games: rune matching, potion craft, relic hunt
- Store: spell cosmetics, companion cosmetics, camp decorations
- Audio: orchestral fantasy + adaptive exploration/combat layers

### Doughboy Oasis
- Mode: persistent social virtual world
- Solo activities + social multiplayer
- Realm: stylized neighborhood/oasis
- Mini-games: cooking rush, arcade challenges, delivery runs, decorating
- Store: clothing, homes, furniture, vehicles, emotes
- Audio: city ambience, radio layers, social stingers

### Crazy Weasol's
- Mode: solo platform adventure + challenge co-op
- Realm: surreal dark-comedy laboratory
- Mini-games: reaction trials, physics rooms, chase challenges
- Store: costumes, trails, collectible props
- Audio: kinetic percussion, comic stingers, danger cues

### Silly in Philly: The Streets
- Mode: solo story + online free-roam/mission layer
- Realm: fictionalized urban city
- Mini-games: street basketball, rhythm battles, courier runs, card tables
- Store: clothing, rides, apartment cosmetics, music packs
- Audio: original hip-hop-inspired score, radio-style beds, city ambience

### Jersey Shore & the Undead
- Mode: solo campaign + 2–4 player co-op survival
- Realm: fictional coastal boardwalk after outbreak
- Mini-games: barricade repair, scavenger runs, arcade survival
- Store: survivor cosmetics, safehouse décor, weapon-free utility cosmetics
- Audio: horror ambience, tension stems, creature cues, extraction themes

## Shared runtime contracts

### Realm
`id, title, map, spawnPoints, weather, timeOfDay, interactables, NPCs, musicProfile, saveProfile`

### Story
`campaignId, chapters, missions, objectives, dialogue, cinematics, checkpoints, endings`

### Player
`identity, profile, inventory, progression, achievements, settings, accessibility`

### Multiplayer
`party, session, matchmaking, presence, permissions, moderation, reconnect`

### Store
`catalog, currency, price, inventoryWindow, ownership, entitlement, refundBoundary`

### Mini-game
`id, realm, rules, input, score, reward, difficulty, duration, leaderboard`

### Audio
`musicStems, ambience, sfx, voice, intensity, transitions, muteGroups`

### Visual asset
`id, type, source, resolution, format, lod, collision, thumbnail, license, checksum`

## Shared mini-feature library
- Photo mode
- Character creator
- Outfit/loadout system
- Map + fast travel
- Quest tracker
- Journal/codex
- Collection book
- Achievement wall
- Daily/weekly challenges
- Accessibility center
- Save slots
- Cloud-save contract
- Party/lobby
- Friends/presence
- Leaderboards
- Replay/highlight capture
- Tutorial/training room
- Notifications
- News/event panel
- Settings
- Support/report flow

## Asset pipeline
Source → normalize → optimize → checksum → manifest → preload class → runtime validation.

Asset classes:
- Characters
- NPCs
- Environments
- Props
- Vehicles
- UI
- Icons
- VFX
- Maps
- Loading screens
- Key art
- Music
- SFX
- Voice
- Cinematics

## Platform boundaries
- React/Next.js: studio hub, account surfaces, browser-game UI, catalogs, web realms.
- Flutter: mobile companion/client shell and shared account/profile surfaces.
- Firebase: contract boundary for identity/data/analytics/remote configuration; production credentials remain external.
- Cloudflare: edge delivery, asset distribution, APIs, caching, routing.
- GitHub: source, CI, review, evidence, release provenance.

## Governance
Development can be expanded freely on feature branches. Production promotion still requires independently verifiable CI, deployment, live validation, and acceptance evidence. No generated placeholder can be treated as production evidence.
