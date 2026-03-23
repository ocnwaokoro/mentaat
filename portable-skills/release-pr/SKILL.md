---
name: release-pr
description: Create a release PR from staging to main for either the backend or frontend repository. Use this skill whenever the user mentions "release PR", "create a release", "cut a release", "release branch", "bump version", or asks to create a PR from staging to main. Triggers on "new release", "release backend", "release frontend", "tag a release", or any request to prepare a production deployment.
---

# Release PR

Create a versioned release PR using the release flow defined in `.claude/skills/config.md` → Branch Strategy.

## Step 1: Gather inputs

**Read config.md** to get the list of repos and their GitHub repo names.

Ask the user two questions (you can ask them together):

1. **Which repo?** Present the repo names from config.md as options.
2. **Release type?** `major`, `minor`, or `patch`

Map repo names to GitHub repos using config.md → Repositories table.

## Step 2: Determine the next version

Fetch all tags from GitHub and find the latest semver tag:

```bash
gh api repos/<REPO>/tags --paginate --jq '.[].name' | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | sort -V | tail -1
```

Parse the tag (strip the leading `v`) into `MAJOR.MINOR.PATCH`, then increment based on release type:

| Type  | Result                          |
|-------|---------------------------------|
| major | `(MAJOR+1).0.0`                 |
| minor | `MAJOR.(MINOR+1).0`             |
| patch | `MAJOR.MINOR.(PATCH+1)`         |

The new PR title will be: `Release X.Y.Z`

## Step 3: Collect merged PRs since last release

Get all squash-merge commits that exist on `staging` but not yet on `main`, working from the local repo path:

```bash
cd ./<REPO_PATH>
git fetch origin
git log origin/main..origin/staging --oneline
```

Each squash commit typically looks like:
```
a1b2c3d GRO-637: EN/ES language toggle + full i18n for all onboarding steps (#203)
abc1234 Fix payment flow edge case (#87)
ef01234 Modifying the +1 to add it just when is not present (#208)
```

Extract the PR number from the trailing `(#NNN)` pattern. For commits without a PR number, use the commit message directly as the description.

## Step 4: Fetch PR descriptions

For each extracted PR number, fetch its description:

```bash
gh pr view <PR_NUMBER> --repo <REPO> --json title,body --jq '{title: .title, body: .body}'
```

Use the **PR title** as the primary description. If the PR body has a meaningful first line (non-empty, not boilerplate), include it as a sub-bullet. Keep it concise — one line per PR is the default.

## Step 5: Build the PR description

Format the body as a changelog. Example:

```markdown
## What's in this release

- GRO-637: EN/ES language toggle + full i18n for all onboarding steps (#203)
- GRO-621: Stripe Payment Method Integration (#202)
- Fix payment flow edge case (#87)
- Modifying the +1 to add it just when is not present (#208)

**Full diff:** staging → main
```

Rules:
- List every PR/commit — don't omit any
- Keep the GRO ticket prefix when present (it's useful for traceability)
- If a commit has no PR number, include it as-is using the commit message
- Order: newest commits first (the git log order)

## Step 6: Create the PR

```bash
gh pr create \
  --repo <REPO> \
  --base main \
  --head staging \
  --title "Release X.Y.Z" \
  --body "$(cat <<'EOF'
<DESCRIPTION>
EOF
)"
```

After creation, print the PR URL so the user can open it directly.

## Error handling

- **No tags found**: Start versioning from `v0.1.0` for patch, `v0.1.0` for minor, `v1.0.0` for major. Tell the user.
- **staging is already up-to-date with main**: Warn the user that there's nothing to release — no commits differ between the two branches.
- **PR already exists** (staging → main): Tell the user and show the existing PR URL instead of creating a duplicate.
