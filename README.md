# Projet Node.js avec React, Babel, Webpack, ESLint et SASS

## Objectif
Ce projet vise à mettre en place un environnement de développement professionnel pour une application Node.js utilisant React. L'objectif est de configurer un environnement structuré avec des tests unitaires, de la documentation automatique, une convention de commits, ainsi que l'utilisation d'outils modernes tels que Webpack, Babel et SASS.

## Prérequis
- Node.js (version 18 ou supérieure)
- npm (version 9 ou supérieure)

## Installation
1. Cloner le dépôt :
   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```

## Configuration de l'environnement
Créer un fichier `.env` à la racine du projet pour stocker les variables d'environnement sensibles :
```
DB_PASSWORD=mySecretPassword
API_KEY=myApiKey
```
Assurez-vous que le fichier `.env` est bien ignoré par Git grâce au fichier `.gitignore`.

## Commandes npm
- **Lancer l'environnement de développement** :
  ```bash
  npm run dev
  ```
- **Compiler le projet pour la production** :
  ```bash
  npm run prod
  ```
- **Exécuter les tests unitaires** :
  ```bash
  npm test
  ```
- **Lancer l'analyse avec le linter** :
  ```bash
  npm run lint
  ```
- **Générer la documentation automatique** :
  ```bash
  npm run doc
  ```

## Outils et Technologies
- **Tests unitaires** : Mocha/Jest
- **Documentation automatique** : JSDoc
- **Convention de commits** : Commitizen/Commitlint
- **Linting** : ESLint avec la norme Airbnb
- **Bundling** : Webpack
- **Transpilation** : Babel
- **Styles** : SASS
- **Hot Reload** : Webpack Dev Server

## Structure du Projet
```
├── src
│   ├── components
│   ├── styles
│   ├── tests
│   └── index.js
├── public
├── .env
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

## Convention de Commits
Le projet utilise la convention de commits suivante :
```
type(scope): description
```
Exemple :
```
feat(auth): ajout de la connexion par Google
fix(api): correction de la gestion des erreurs
```
Pour vous assurer que les commits respectent la convention, utilisez Commitizen :
```
npm run commit
```

## Lancer les Tests
Les tests sont gérés avec Mocha ou Jest. Pour exécuter les tests :
```
npm test
```
Les rapports de couverture sont générés automatiquement et affichés dans le terminal.

## Génération de la Documentation
La documentation est générée automatiquement avec JSDoc :
```
npm run doc
```
Les fichiers de documentation sont accessibles dans le dossier `docs/`.


