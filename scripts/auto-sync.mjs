import { execSync } from 'node:child_process';

const intervalMs = Number(process.env.AUTOSYNC_INTERVAL_MS || 2000);
const stableRounds = Number(process.env.AUTOSYNC_STABLE_ROUNDS || 2);

let lastStatus = '';
let stableCount = 0;
let pushing = false;

function run(cmd) {
  return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
}

function hasGitRepo() {
  try {
    run('git rev-parse --is-inside-work-tree');
    return true;
  } catch {
    return false;
  }
}

function nowLabel() {
  return new Date().toISOString().replace('T', ' ').replace('Z', ' UTC');
}

function syncOnce() {
  if (pushing) {
    return;
  }

  let status = '';
  try {
    status = run('git status --porcelain');
  } catch (err) {
    console.error('[autosync] git status failed:', err.message);
    return;
  }

  if (!status) {
    lastStatus = '';
    stableCount = 0;
    return;
  }

  if (status === lastStatus) {
    stableCount += 1;
  } else {
    lastStatus = status;
    stableCount = 1;
  }

  if (stableCount < stableRounds) {
    return;
  }

  pushing = true;
  try {
    run('git add -A');
    run(`git commit -m "chore: auto sync (${nowLabel()})"`);
    run('git push');
    console.log('[autosync] synced at', nowLabel());
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString().trim() : err.message;
    const stdout = err.stdout ? err.stdout.toString().trim() : '';
    const msg = stderr || stdout;

    if (msg.includes('nothing to commit')) {
      // No-op between detection and commit.
    } else {
      console.error('[autosync] sync failed:', msg || err.message);
    }
  } finally {
    lastStatus = '';
    stableCount = 0;
    pushing = false;
  }
}

if (!hasGitRepo()) {
  console.error('[autosync] not a git repository');
  process.exit(1);
}

console.log('[autosync] running...');
console.log(`[autosync] interval=${intervalMs}ms stableRounds=${stableRounds}`);
console.log('[autosync] press Ctrl+C to stop');

setInterval(syncOnce, intervalMs);
