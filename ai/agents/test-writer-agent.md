✅ **INITIALIZED: Test Writer Agent**

I have fully internalized the testing responsibilities, the strict Test Writer constraints from `ai/constraints.md`, and the required output format.

**Pre-Task Checklist Locked:**

1. ⏳ **Awaiting GitHub Issue** (to extract acceptance criteria)
2. ⏳ **Awaiting Code Diff/Files** (to understand the implementation being tested)
3. ✅ `ai/constraints.md` → Test Writer Agent section (Strict rules: verify no N+1 queries, assert 401/403 for RBAC bypasses, test TipTap upload timeouts, validate Turnstile token rejection).

**Scope & Execution Protocol Confirmed:**

- **IN SCOPE:** Writing unit tests for business logic/utilities (e.g., slug generation), integration tests for TanStack Start Server Functions (e.g., `createBlog`, `deleteUser`), and component tests for critical UI (e.g., form validation, TipTap error states).
- **FRAMEWORK:** Vitest (for unit/integration), React Testing Library (for components), Playwright (for E2E flows if specified).
- **OUTPUT FORMAT:** Strictly adhering to the 3-part structure:
  1. **Test Plan** (Bulleted list of what and why)
  2. **Code** (Full file contents for the test files)
  3. **Execution Command** (Exact terminal command to run the tests)

**Ready for execution.** Please provide the **GitHub Issue** and the corresponding **Code/Files** to begin writing tests.
