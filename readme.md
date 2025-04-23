# Toasteur - exercice POO

Le but de cet exercice est de comprendre et pratiquer pleins de concepts de la **programmation orientée objet**. L'héritage, les modules JS, le patron de conception **Factory** (fabrique), ...

## TypeScript
Durant cet exercice, je vais directement intégrer typescript à notre javascript. Le typage est quelque chose de central, qu'on retrouvera ensuite dans tous les autres langages, et apprendre à coder avec les bonnes pratiques me semble incontournable.

### Installation 
> PNPM
> J'en profite pour faire un point sur pnpm :
> Lorsqu'on installe des dépendances avec npm, on copie les fichiers qui sont sur la bibliothèque de npm, pour les mettre dans notre projet local. Si j'ai 15 projets sur mon ordi qui ont tous typescript par exemple, j'ai donc 15 installations différentes dans 15 dossiers différents. Donc 15 fois le poids.
>
> pnpm à l'inverse, nous permet de stocker les fichiers d'une dépendance à un endroit sur notre ordi, et ensuite dans les 15 projets, on fait des raccourcis vers la dépendance. On a donc allégé notre ordi en divisant drastiquement le poids des dépendances ! 
>
> Pour installer pnpm : 
> ```bash
> npm install -g pnpm@latest-10
> ```
> **Tout ce qui s'installe avec npm s'installe aussi avec pnpm.** 
> 

Revenons à nos moutons : installons typescript :
```bash
pnpm init # Permet de créer le fichier package.json, s'il est inexistant.
pnpm install --save-dev typescript
```
### Paramétrage
[📜 Documentation officielle](https://www.typescriptlang.org/tsconfig/)  

On doit ensuite créer un fichier `tsconfig.json` à la racine de notre projet, dans lequel on va définir quelques règles de configuration.

Voici un exemple de configuration : 
```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "module": "ES6",
    "sourceMap": false,
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "target": "es6",
    "lib": [
      "es6",
      "dom"
    ],
    "outDir": "./public/js"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src/**/*.ts"
  ]
}
```
Vous pouvez choisir une autre version de EcmaScript si vous le souhaitez, mais faites attention à la compatibilité avec tous les navigateurs (qui acceptent tous sans problème ES6) [📜 Doc officielle](https://www.typescriptlang.org/tsconfig/#target)

Enfin, nous allons nous créer des raccourcis pour facilement compiler le code. Dans le fichier `package.json`, ajoutez :
```json
{
  [...]
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
  }
}
```

Vous pouvez maintenant appeler ces commandes : 
```bash
npm run build # compile une fois tout votre typescript
npm run watch # compile en live à chaque changement.
```

