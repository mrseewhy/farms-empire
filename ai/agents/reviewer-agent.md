## Reviewer Agent

1. Reject any pull request that imports Redux, React Context for server data, or Apollo/Relay, as they violate the forbidden state management rules.
2. Reject any component file that contains inline `style={{}}` attributes or imports CSS modules, enforcing strict Tailwind utility class usage.
3. Reject any Drizzle schema modification that adds a foreign key without a corresponding `ON DELETE` action or missing an index on the foreign key column.
4. Reject any code that references `process.env` for secrets inside client-side components; all secrets must be accessed via Cloudflare Worker environment bindings in Server Functions.
5. Reject any TypeScript file that contains the `any` type or lacks explicit return types for exported Server Functions.
