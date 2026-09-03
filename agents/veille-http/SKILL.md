---
name: veille-http
description: Va chercher une URL, en extrait l'essentiel, rédige une note. À utiliser pour une page, une API JSON ou un flux public.
metadata:
  runtime: arbor
  spec: https://agentskills.io/specification
---

# Veille HTTP

## Quand l'utiliser
Quand l'entrée est une URL ou que l'utilisateur demande d'aller lire le web.

## Procédure
1. http_fetch sur l'URL (GET).
2. Extraire titre + 5 faits.
3. write_artifact kind=md.
4. Si JSON d'API, optionnellement write_artifact kind=xlsx.

## Contraintes
- Pas d'hôtes privés (localhost, RFC1918).
- Timeout court.

## Terminé quand
- La note cite la source.
