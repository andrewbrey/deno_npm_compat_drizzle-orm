# Reproduction of issue with Deno npm-compat for `drizzle-orm`

When attempting to use the `drizzle-orm` (https://orm.drizzle.team) tool called
`drizzle-kit` to generate sql schema migrations from TypeScript model
definitions **via npm-specifiers in Deno**, I encountered the following error:

```
error: Uncaught TypeError: worker.unref is not a function
    at <anonymous> (file:///home/andrew/.cache/deno/npm/registry.npmjs.org/esbuild/0.18.12/lib/main.js:2295:10)
```

This repository contains a minimal setup needed to test out if `drizzle-orm`
works with Deno npm-specifier based compatibility. The main point of interest is
actually the `migrate` task defined in the `deno.jsonc`:

```
// deno.jsonc

{
  "tasks": {
    ...
    "migrate": "deno run -A npm:drizzle-kit generate:sqlite"
  }
}
```

in which we use npm-specifiers to invoke the `drizzle-kit` cli tool to generate
sql migration files. If this were working correctly (and didn't produce the
error above out of its `esbuild` dependency) I would expect the tool to
successfully generate files in the`./drizzle` directory, at which point running
`deno task dev` would work, though that part is not _necessarily_ the subject of
this issue report.
