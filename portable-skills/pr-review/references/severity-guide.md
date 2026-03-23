# Severity Classification Guide

This guide explains how to classify code review findings by severity and determine the appropriate review action.

## Severity Levels

### CRITICAL
Issues that will cause data loss, corruption, security breaches, payment errors, or production outages.

**Examples:**
- Security vulnerabilities (IDOR, mass assignment of sensitive fields, XSS)
- Race conditions causing data corruption
- Payment calculation errors using floats
- Unbounded queries that will crash the system
- Non-idempotent payment operations

**Action:** Always REQUEST CHANGES and block merge

### HIGH
Issues that will cause incorrect behavior, noticeable performance degradation, or significant bugs under normal usage.

**Examples:**
- N+1 queries
- Missing database indexes on foreign keys
- Missing error handling
- Incorrect component state management
- Missing transaction wrappers

**Action:** REQUEST CHANGES and block merge

### MEDIUM
Issues that cause inefficiency, edge case bugs, or degraded user experience under specific conditions.

**Examples:**
- Missing memoization causing re-renders
- Suboptimal query patterns
- Missing cleanup in useEffect
- Code quality issues (commented code, TODO without tickets)

**Action:** REQUEST CHANGES (use judgment based on number and impact)

### LOW (Suggestions)
Non-blocking suggestions for improvement.

**Examples:**
- Minor refactoring opportunities
- Naming improvements
- Documentation additions

**Action:** COMMENT (approve with suggestions)

## Review Decision Matrix

| Issue Count | Severity | Action |
|-------------|----------|--------|
| Any | CRITICAL | REQUEST CHANGES + Block |
| 3+ | HIGH | REQUEST CHANGES + Block |
| 1-2 | HIGH | REQUEST CHANGES |
| 5+ | MEDIUM | REQUEST CHANGES |
| 1-4 | MEDIUM | COMMENT (approve with notes) |
| Any | LOW | COMMENT (approve) |

## Blocking Criteria

A PR must be blocked (REQUEST CHANGES) if:

1. **Any CRITICAL severity issue exists**
2. **3 or more HIGH severity issues exist**
3. **5 or more MEDIUM severity issues exist**
4. **CI checks are failing**
5. **Required tests are missing**
6. **Code violates architectural principles (backend/frontend separation, file size limits)**

## Comment Format

All review comments should follow this format:

```
[SEVERITY:LEVEL] - Section X.X.X

[Description of the issue]

[Explanation of why this is a problem]

[Suggested fix or pattern to follow]
```

Example:
```
PERF:HIGH - Section 9.1.1 - N+1 Query

The code is accessing `order.user.name` inside a loop without eager loading the user association. This will trigger one SQL query per order.

Use `Order.includes(:user)` to eager load the association before the loop.
```

## Summary Comment Structure

The final summary comment should be organized as:

```markdown
## Code Review Summary

### ❌ Critical Issues (X)
[List of critical issues with references to inline comments]

### ⚠️ High Priority Issues (X)
[List of high priority issues]

### 📝 Medium Priority Issues (X)
[List of medium priority issues]

### 💡 Suggestions (X)
[List of suggestions]

### ✅ What Went Well
[Positive feedback on good patterns observed]

---

**Review Decision:** [APPROVE | REQUEST CHANGES | COMMENT]

**Blocking Issues:** [X Critical, X High, X Medium]
```

## GitHub Review API Actions

- **APPROVE**: No blocking issues found, all checks passed
- **REQUEST_CHANGES**: Blocking issues found (any CRITICAL, 3+ HIGH, or 5+ MEDIUM)
- **COMMENT**: Non-blocking feedback, approve with suggestions
