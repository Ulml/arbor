---
name: brief-writer
description: Rédige un brief structuré puis un fichier Markdown ou Word. À utiliser pour un résumé, un compte-rendu ou une note d'une page.
metadata:
  runtime: arbor
  spec: https://agentskills.io/specification
---

# Brief writer

## Quand l'utiliser
Quand l'utilisateur veut un brief, une note, un compte-rendu ou un document court.

## Préconditions
- Workspace local. Réseau facultatif.

## Procédure
1. Lire l'objectif utilisateur.
2. Structurer titre, contexte, points clés, prochaine action.
3. Appeler write_artifact kind=md, puis kind=docx.
4. Ajouter generate_chart seulement si des chiffres sont fournis.

## Outils autorisés
- write_artifact (md, docx, pptx)
- generate_chart
- run_script on scripts/outline.js

## Terminé quand
- Un fichier est produit et le chemin est renvoyé.

## En cas d'échec
- Renvoyer le plan en texte brut.
