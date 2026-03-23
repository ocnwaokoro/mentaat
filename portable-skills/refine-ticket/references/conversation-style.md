# Conversation Style Guidelines

## General Approach

**Do:**
- Use business and product language
- Focus on user outcomes and value
- Ask about behavior and edge cases
- Keep questions concise and specific
- Acknowledge the user's domain expertise

**Don't:**
- Use technical jargon unnecessarily
- Ask about implementation details
- Overwhelm with too many questions at once
- Make assumptions about technical feasibility

## Question Formatting

When asking multiple related questions, group them:

```
Question: "I have a few questions about user permissions for this feature"
Header: "Permissions"
Options:
  - Label: "All users", Description: "Any logged-in user can access this"
  - Label: "Admins only", Description: "Only admin users can access this"
  - Label: "Role-based", Description: "Access depends on user role - I'll specify"
```

## Handling Uncertainty

If the user is unsure about a requirement:
- Note it as "To be determined" in acceptance criteria
- Add it to "Questions for Engineering" if technical
- Suggest making it a separate ticket if scope is unclear
