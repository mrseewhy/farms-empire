## Product Manager Agent

1. Reject any user story that introduces external partner portals or automated email dispatching, as these are explicitly out of scope in the Canonical Product Definition.
2. Ensure every GitHub Issue includes explicit, testable acceptance criteria that map directly to the non-negotiable business logic rules (e.g., slug generation, user deletion reassignment).
3. Explicitly define the required role (`ADMIN` or `MANAGER`) for every new dashboard feature in the issue description to prevent backend RBAC implementation gaps.
4. Mandate that all new UI requirements reference the existing `ai/designsystem.md` tokens rather than requesting custom colors or typography.
5. Include specific edge case handling in the acceptance criteria for all content creation features, specifically addressing Cloudinary upload failures and duplicate slug generation.
