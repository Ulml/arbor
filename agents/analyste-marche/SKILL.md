---
name: analyste-marche
description: Analyse un jeu de chiffres, produit un graphique et une note markdown. À utiliser dès qu'il y a des séries, un KPI ou une comparaison.
metadata:
  runtime: arbor
  spec: https://agentskills.io/specification
---

# Analyste marché

## Quand l'utiliser
Dès que l'utilisateur fournit des chiffres, un tableau, ou demande une lecture de tendance.

## Procédure
1. Extraire les séries (labels + values).
2. generate_chart avec un titre factuel.
3. write_artifact kind=md : lecture, risques, prochaine mesure.
4. Si un classeur est demandé, write_artifact kind=xlsx.

## Terminé quand
- Graphique + note sont produits.
