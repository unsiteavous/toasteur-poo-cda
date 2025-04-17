# Création des enfants

### Objectif pédagogique
Implémenter l'héritage en créant des classes concrètes qui étendent notre classe abstraite. Cela permet de comprendre comment spécialiser des comportements tout en respectant le contrat défini.

On va avoir quatre classes : `SuccessToast`, `InfoToast`, `WarningToast`, `ErrorToast`.
Elles hériteront toutes de l'AbstractToast.  
Elles redéfiniront tous les paramètres selon leurs propres besoins.  

## Création d'un fichier de configuration
Afin de pouvoir facilement modifier les toasts sans avoir à rentrer dans le code, on va créer un fichier qui va regrouper toutes les variables dont on aura besoin pour construire nos toasts. Par exemple :
- Des variables pour la couleur de chacun des toasts,
- Des variables pour l'icône,
- Des variables pour le titre
- une variable pour le délai d'affichage, 
- ...

L'avantage est qu'ensuite, si je veux changer le délai d'affichage, je le change à un seul endroit dans ce fichier, et tous mes toasts sont modifiés.

## Création d'une première classe : SuccessToast
Commencez avec cette classe. Elle doit être :
  - exportée par défaut,
  - appeler le parent dans son constructeur,
  - modifier l'objet HTML en fonction de ses règles propres

Je reste volontairement vague sur ce qu'il y a à faire, pour vous permettre de mettre en place vous-même les étapes intermédiaires, qui seront de toute manière vues en cours.

## Appel dans `index.ts`
Pour tester votre premier rendu, vous devez créer un fichier `index.ts` qui sera ensuite appelé dans votre fichier html, en `type='module'`.

Dans ce fichier, on va importer notre SuccessToast, et on va l'appeler pour le créer.

## Création des autres toasts
Une fois qu'on a fait un toast correctement, on peut passer à la suite, puisque ce sera sensiblement la même chose pour chacun d'entre eux.

### Étapes détaillées
1. **Créer les fichiers pour chaque type de toast**:
   - `src/models/SuccessToast.ts`: toast pour les opérations réussies
   - `src/models/ErrorToast.ts`: toast pour les erreurs
   - `src/models/InfoToast.ts`: toast pour les informations
   - `src/models/WarningToast.ts`: toast pour les avertissements

2. **Pour chaque classe**:
   - Étendre la classe `Toast`
   - Implémenter les méthodes abstraites requises: `getType()`, `getIconClass()`, `getBackgroundColor()` et `getDefaultTitle()`
   - Personnaliser le comportement spécifique à chaque type

### Intérêt pédagogique
- Comprendre le polymorphisme: les différentes classes de toast partagent la même interface mais ont des comportements spécifiques
- Apprécier comment l'héritage permet de réutiliser du code tout en spécialisant certains comportements
- Voir comment TypeScript vérifie que toutes les méthodes abstraites sont correctement implémentées dans les classes filles