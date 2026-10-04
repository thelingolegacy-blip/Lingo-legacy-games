# Lingo Legacy Games — Full Loaded Platform Experience Contract

STATUS: DEVELOPMENT / QA CONTRACT. Financial activation remains disabled.

## 1. Complete Visual/Asset Stack
Every flagship and mini-game receives a complete asset manifest covering:
- logos and title marks
- title screens
- loading screens
- hero/background environments
- character/avatar assets
- NPC/card/symbol sets
- UI icons
- buttons and states
- panels/modals
- VFX
- transitions
- achievements/reward art
- store art
- profile art
- leaderboard art
- referral/share art
- tutorial illustrations
- error/empty/offline states
- thumbnails, social art and feature art

Asset lifecycle:
SOURCE -> NORMALIZE -> OPTIMIZE -> CHECKSUM -> MANIFEST -> PRELOAD -> VALIDATE -> RUNTIME

Required runtime states:
DEFAULT / HOVER / FOCUS / PRESSED / DISABLED / LOADING / SUCCESS / ERROR / LOCKED / UNLOCKED.

## 2. Animation + Cinematic Director
Shared director controls:
- scene transitions
- camera profiles
- parallax/depth
- particles/VFX
- reward reveals
- score celebrations
- leaderboard movement
- achievement unlocks
- level-up sequences
- store purchase feedback
- tutorial guidance
- loading transitions
- victory/defeat
- pause/resume
- reduced-motion fallback

Animations must remain interruptible, state-driven and recoverable.

## 3. Audio Director
Audio manifest supports:
- boot
- menu
- navigation
- button
- confirm/cancel
- hover/focus
- gameplay
- combo
- win/loss
- reward
- achievement
- level-up
- store
- leaderboard
- tutorial
- notification
- error
- ambient/world loops
- music stems
- voiceover

Controls:
master / music / SFX / voice / ambient / captions / mute.

## 4. Global Navigation
Primary surfaces:
HOME / GAMES / MINI-GAMES / WORLDS / PROFILE / STORE / REWARDS / LEADERBOARDS / FRIENDS / REFERRALS / EVENTS / NOTIFICATIONS / SETTINGS / SUPPORT.

Every surface gets loading, empty, error and offline-safe states.

## 5. Identity + Signup
Identity contract:
- Lingo ID
- email signup
- password/auth provider adapter
- guest mode where permitted
- profile creation
- avatar
- display name
- onboarding
- account recovery
- session state
- consent/age gates where required

No sensitive credential data is stored in client gameplay state.

## 6. Progression
Shared progression:
- XP
- levels
- achievements
- titles/badges
- daily/weekly challenges
- streaks
- collections
- unlocks
- seasonal/event progression
- cross-game progression contract

Each game can maintain title-specific progression without corrupting shared progression.

## 7. Scoreboards + Leaderboards
Supported views:
- global
- friends
- game-specific
- mini-game-specific
- daily
- weekly
- seasonal
- event
- all-time

Features:
rank movement
score history
player comparison
privacy controls
anti-cheat validation contract
pagination
empty/error states.

## 8. Rewards
Reward catalog supports:
- XP
- virtual coins
- Loyalty Bucks
- Lingo Tokens
- cosmetics
- badges
- titles
- avatars
- profile frames
- emotes
- achievement rewards
- event rewards
- referral rewards

Reward issuance must be idempotent and server-authoritative when backend is enabled.

## 9. Store / Monetization
Store architecture supports:
- featured items
- cosmetics
- bundles
- virtual currency catalog
- subscriptions
- seasonal offers
- event passes
- inventory
- purchase history
- restore purchases
- receipts/entitlement adapter
- regional/platform pricing adapter
- promotional codes where supported

Development mode may display complete store UI using test products.

Production purchase execution requires verified provider configuration and release gates.

## 10. Referrals
Referral system:
- referral code/link
- attribution
- invite flow
- signup attribution
- eligibility
- reward pending
- reward granted
- fraud/abuse checks
- referral history
- share targets

Referral rewards remain virtual/test rewards until production backend authorization exists.

## 11. Wallet / Future Financial Surfaces
UI may reserve clearly marked future surfaces:
- Wallet
- Balance
- Deposit
- Withdraw
- Transactions
- Payment methods
- Cash-out status

Current implementation status:
DEPOSIT = DISABLED
WITHDRAWAL = DISABLED
REAL-MONEY WAGERING = DISABLED

These buttons may exist as locked/coming-soon presentation states but must not submit, charge, transfer or withdraw funds.

Activation requires, at minimum:
- approved financial/wallet architecture
- provider integration
- identity/age/eligibility controls
- jurisdiction/compliance review
- fraud/abuse controls
- transaction ledger
- reconciliation
- audit trail
- server-side authorization
- security review
- production evidence
- explicit release authorization

## 12. Notifications
Notification center supports:
- rewards
- achievements
- friend activity
- event reminders
- referral status
- store announcements
- system messages
- security/account messages

User controls notification categories.

## 13. Social
Supported contracts:
- friends
- presence
- invites
- parties/lobbies
- safe messaging adapter
- blocking/reporting
- privacy
- activity feed
- share cards

## 14. Settings
Settings include:
- account
- privacy
- accessibility
- graphics
- motion
- audio
- captions
- notifications
- controls
- language
- data
- support
- logout/reset.

## 15. QA / Release
Every surface requires:
- unit contract
- integration contract
- interaction smoke
- responsive validation
- accessibility validation
- audio validation
- asset-manifest validation
- security contract
- store-package contract
- failure/empty/loading validation.

This contract expands development coverage. It does not establish CI PASS, G02 PASS, device certification, store approval, deployment authorization or production activation.
