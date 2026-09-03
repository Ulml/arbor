# Arbor

Système d'exploitation pour agents, fondé sur
[Agent Skills](https://agentskills.io/specification) et l'architecture
procédurale (lifecycle, L1/L2/L3, sandbox, mémoire).

**Aucune dépendance Google.** Le runner est agnostique : il ne lit que les
instructions des skills, et parle à n'importe quel LLM OpenAI-compatible.

Application : preview Grok / déploiement Vercel.
Repo skills : ce dépôt (`agents/`).

## Arborescence d'un agent

```
agents/<slug>/
  SKILL.md           # L1 YAML frontmatter + L2 instructions
  scripts/           # L3 exécutable
  references/        # L3 documentation
  assets/            # L3 templates
  examples/          # paire input / output (prompt | fichier | http)
  cron.json          # planificateur optionnel
```

## Ce que fait l'UI

- Colonne gauche : liste d'agents, création à tout moment.
- Création : un seul texte naturel pour L2+L3, plus un exemple d'entrée et de
  résultat (prompt, fichier ou HTTP). Arbor compile un `SKILL.md` valide.
- Onglet **Instruction** : édition L2 / L3.
- Chat : exécution. Les demandes de correction du livrable partent dans
  **Mémoire** (cases à cocher).
- **Intégrer la sélection** reformate la skill et, si un token est fourni,
  commit ici même.

## Runner

- Sandbox JS / Python / bash, timeout, env filtré
- Livrables : Markdown, Word, Excel, PowerPoint, graphiques, images
- `http_fetch`, fonctions codées, MCP
- Cron lu dans `cron.json` / champ cron de l'agent
