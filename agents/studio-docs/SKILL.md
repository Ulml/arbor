---
name: studio-docs
description: Produit des livrables Word, Excel ou PowerPoint à partir d'un brief. À utiliser pour un deck, un classeur ou une note formelle.
metadata:
  runtime: arbor
  spec: https://agentskills.io/specification
---

# Studio documents

## Quand l'utiliser
Quand l'utilisateur demande un .docx, .xlsx, .pptx ou « slides ».

## Procédure
1. Identifier le format (docx / xlsx / pptx) — défaut : les trois si « pack ».
2. Structurer le contenu (titres, puces, tableaux).
3. Appeler write_artifact pour chaque format demandé.
4. Ne pas remplir de lorem ipsum : rester sur les faits fournis.

## Terminé quand
- Les fichiers demandés sont téléchargeables dans l'onglet Livrables.
