# Error Handling

## Linear MCP Connection Failures

```
Unable to access Linear via MCP. Possible causes:
- Linear MCP server not connected (see .claude/skills/linear/SKILL.md for setup)
- OAuth token expired (re-run authentication)
- Ticket ID doesn't exist
- Network connectivity issue

Would you like to:
1. Try again
2. Enter ticket details manually
3. Cancel refinement
```

## Linear Update Failures

```
Unable to update Linear ticket. The generated content will be displayed below.

You can manually add this to the ticket, or try again once Linear access is restored.
[Display content to copy]
```

## Insufficient Information

If after 4 rounds of questions requirements are still unclear:

```
I still have some unclear areas that may need stakeholder discussion:
- [Unclear area 1]
- [Unclear area 2]

Would you like to:
1. Continue with partial acceptance criteria and flag unclear areas
2. Schedule a follow-up discussion and pause refinement
3. Proceed and let engineering identify gaps during implementation
```
