# Création du parent

### Objectif pédagogique
Cette première étape pose les fondations de notre architecture orientée objet. La classe abstraite est un concept fondamental en POO qui permet de définir un contrat que les classes enfants devront respecter, tout en fournissant certaines implémentations communes.

Une classe parente regroupe tout ce qu'on retrouve dans **tous** les enfants.

## Activité :
- Faites la liste de toutes les propriétés d'un toast, qu'on retrouvera tout le temps.
- Faites également la liste de toutes les méthodes (actions) réalisables par ou sur un toast.

## Réalisation :
Ecrivez la classe AbstractToast, dont les enfants hériteront.  
Elle devra répondre à ces principes :
  - être abstraite
  - être exportable par défaut
  - avoir des propriétés privées ou protégées
  - avoir un constructeur
  - avoir une méthode pour construire l'objet HTML
  - avoir des méthodes pour intéragir avec l'objet.

Le parent ne doit gérer que ce qu'on retrouve dans tous les enfants. Elle peut définir des méthodes qui seront redéfinies ensuite par les enfants.

### Étapes détaillées
1. **Créer le fichier `src/Abstracts/AbstractToast.ts`**:
   - Définir la classe abstraite `AbstractToast` qui servira de base pour tous les types de toasts
   - Inclure les propriétés communes: `id`, `message`, `duration`, `element`
   - Implémenter le patron Template Method avec la méthode `show()` qui définit le squelette d'algorithme (affichage en HTML)
   - Ajouter des méthodes abstraites que les classes filles devront implémenter pour garantir la cohérence du système

2. **Application du patron Template Method**:
   - La méthode `show()` décompose le processus d'affichage en étapes: création d'élément, configuration des événements, rendu, auto-suppression
   - Les classes filles n'ont pas besoin de réimplémenter tout ce processus, elles définissent seulement les parties spécifiques
   - Cela illustre comment factoriser le code commun tout en permettant des variations dans les classes dérivées

### Intérêt pédagogique
- Comprendre le concept d'abstraction et de contrat entre classes
- Voir comment le patron Template Method permet de définir un squelette d'algorithme fixe avec des variations dans les étapes
- Apprendre à utiliser le mot-clé `abstract` de TypeScript qui n'existe pas en JavaScript natif
