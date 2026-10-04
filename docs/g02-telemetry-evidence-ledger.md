# G02 Telemetry / Sentinel Evidence Ledger

## Purpose
Correlate one executable GitHub Actions sentinel to one runner, one job, one commit and one retrievable artifact.

## Acceptance predicates
P1 real matching runner
P2 runner_id > 0
P3 runner_name populated
P4 job assigned
P5 steps instantiated
P6 sentinel executes
P7 logs generated
P8 logs retrievable
P9 evidence independently verified

G02 PASS requires every predicate to be TRUE.

## Correlation tuple
RUN_ID + COMMIT_SHA + RUNNER_ID + RUNNER_NAME + JOB_NAME

The sentinel writes this tuple to `g02-evidence.txt` and uploads it as `g02-sentinel-evidence`.

## Evidence classes
- configuration: workflow and runner labels
- execution: workflow run/job/step state
- telemetry: sentinel output and correlation tuple
- artifact: uploaded evidence file
- verification: independent inspection of run, job, logs and artifact

Configuration alone is never acceptance evidence.

## Current state
SENTINEL_CONFIGURED = TRUE
LIVE_RUN_VERIFIED = FALSE
RUNNER_ACCEPTANCE = NOT_ESTABLISHED
G02 = FAIL_CLOSED

## Downstream authority
Until P1-P9 are independently verified:
- certification blocked
- release candidate promotion blocked
- deployment blocked
- activation blocked
- merge-as-production-transition blocked

A GitHub PR merge, by itself, is not production authorization.
