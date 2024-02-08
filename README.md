# Simple Nasa API Project with Typescript
## Description du projet.

NASA Open APIs est un projet qui offre un accès simplifié aux données et aux fonctionnalités de la NASA via des API publiques. Destiné à être utilisé dans un environnement Node.js, il permet aux développeurs et aux utilisateurs de Postman d'interagir facilement avec une variété de données et de services fournis par la NASA, notamment des images satellites, des données sur les planètes, des informations sur les missions spatiales et bien plus encore. Ces API offrent aux utilisateurs la possibilité de découvrir et d'explorer l'univers et les activités de la NASA grâce à des interfaces de programmation conviviale.

## Technologies Utilisées
- Express pour créer le serveur HTTP
- Axios pour faire des requêtes HTTP à l'API Nasa
- TypeScript pour ajouter une typage statique au code JavaScript
- ts-Node pour exécuter des scripts TypeScript directement sans compilation préalable

## Instruction d'installation
1. Clonez le dépôt : `git clone https://github.com/Livy2809/APINasa.git
2. Installez les dependances `npm install`
```bash
npm install express
npm i axios
npm install --save-dev typescript ts-node
npm i --save-dev @types/express
npx tsc --init
```

## Configuration requise
- Node.js : Une version récente de Node.js est nécessaire
- NPM : Pour la gestion des paquets et l'installation des dépendances.
- TypeScript: Simple Weather API with Typescript



## Utilisation de Postman
Utilisez Postman pour envoyer des requêtes à l'API configurée via Express. Lancez le serveur avec ts-node et faites des requêtes pour obtenir des données météo.

```bash
`https://api.nasa.gov/planetary/earth/imagery?date=${dateImage}&api_key=${this.API_KEY}`

