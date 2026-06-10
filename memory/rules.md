# Rules Memory

- Missing optional analytics env vars must not block app startup or production builds.
- CSS component classes may use real CSS declarations or Tailwind utilities, but must not `@apply` non-utility project classes.
- Keep package manager lockfiles aligned with package version constraints.
