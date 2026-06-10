# Decision Memory

- Keep missing image replacement out of scope per request.
- Pin Vite to the 5.x line because the configured `@builder.io/vite-plugin-jsx-loc@0.1.1` peer range supports Vite 4/5 while the rest of the Vite plugin stack supports Vite 5.
- Do not use Tailwind `@apply` with project-defined CSS classes; Tailwind v4 rejects custom class names as utility candidates.
- Load analytics conditionally at runtime instead of leaving unresolved `%VITE_*%` placeholders in `index.html`.
