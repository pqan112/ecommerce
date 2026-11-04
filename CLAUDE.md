## Graphify

Use `graphify-out/graph.json` as the primary codebase navigation tool.

### Code Exploration

- For codebase questions, run `graphify query "<question>"` first, before Grep, Glob, or reading source files.
- Use `graphify path "<A>" "<B>"` to trace relationships and `graphify explain "<concept>"` for focused component analysis.
- For broad architecture exploration, use `graphify-out/wiki/index.md` if available; otherwise consult `graphify-out/GRAPH_REPORT.md`.
- Read source files to verify implementation details, understand runtime behavior, and investigate gaps in the graph.
- If the graph is missing or outdated, run `graphify update .` before querying.
- Apply these rules to subagents tasked with codebase exploration.

### Graph Maintenance

- Claude Code `PostToolUse` automatically runs `graphify update .` after successful `Write` and `Edit` operations. Do not manually rebuild after these operations.
- Husky `pre-commit` runs `graphify update .` before committing and stages updated graph artifacts.
- Run `graphify update .` manually after changes made through Bash, external tools, `git pull`, merges, or branch changes when the graph may be outdated.
- `graphify update .` is local and AST-based; it does not require an LLM API call.
