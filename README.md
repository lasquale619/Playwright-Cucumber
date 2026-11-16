# Playwright + Cucumber — tests BDD

[![Playwright Tests](https://github.com/lasquale619/Playwright-Cucumber/actions/workflows/playwright.yml/badge.svg)](https://github.com/lasquale619/Playwright-Cucumber/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-23D96C?logo=cucumber&logoColor=white)

Tests de la page de connexion de l'application [Notes](https://practice.expandtesting.com/notes/app/login) écrits en **Gherkin** (BDD) avec **Cucumber.js**, et exécutés avec **Playwright**.

## Ce que montre ce projet

- **Scénarios lisibles par tous** : les cas de test sont rédigés en Gherkin (`Given / When / Then`) dans [`login.feature`](tests/features/login.feature).
- **Scenario Outline** : les 5 cas de connexion refusée (mauvais mot de passe, email inconnu, champs vides) sont pilotés par un tableau d'exemples.
- **Page Object Model** : les sélecteurs et actions de la page de connexion sont regroupés dans [`LoginPage.js`](tests/pages/LoginPage.js) ; les steps restent courts.
- **Hooks Cucumber** : un navigateur partagé, un contexte neuf par scénario, blocage des pubs et des trackers, capture d'écran jointe au rapport en cas d'échec.
- **Tags** (`@login`, `@valid`, `@invalid`) pour lancer une partie des scénarios.
- **CI GitHub Actions** : les scénarios tournent à chaque push, le rapport HTML Cucumber est disponible dans les artefacts du run.

## Stack

Playwright · Cucumber.js · JavaScript · GitHub Actions

## Installation

```bash
git clone https://github.com/lasquale619/Playwright-Cucumber.git
cd Playwright-Cucumber
npm ci
npx playwright install chromium
```

## Lancer les tests

```bash
npm test                                   # tous les scénarios
npx cucumber-js --tags "@invalid"          # seulement les cas de connexion refusée
```

Rapports générés dans `test-results/` : `cucumber-report.html` (à ouvrir dans le navigateur) et `cucumber-report.json`.

## Structure

```
tests/
├── features/login.feature   # scénarios Gherkin
├── steps/login.steps.js     # implémentation des steps
├── pages/LoginPage.js       # Page Object de la page de connexion
└── hooks/hooks.js           # navigateur, contexte, captures d'écran
cucumber.json                # configuration Cucumber (chemins, rapports, retry)
platform/config.js           # timeout par défaut des steps
```

## Auteur

**Mohamed Bouguellid** — Testeur QA · [LinkedIn](https://www.linkedin.com/in/mohamed-bouguellid)
