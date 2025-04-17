# 1. Patrons de conception utilisables dans ce projet

Voici les patrons de conception que nous pouvons intégrer dans votre librairie "toasteur" :

- **Patron Factory (Fabrique)** : Pour créer les différents types de toasts sans avoir à connaître leurs classes concrètes
- **Patron Abstract Factory** : Pour fournir une interface permettant de créer des familles de toasts associés
- **Patron Singleton** : Pour assurer qu'il n'existe qu'une seule instance du gestionnaire de toasts
- **Patron Observer** : Pour notifier le système quand l'état des toasts change (apparition/disparition)
- **Patron Strategy** : Pour définir différentes stratégies d'affichage des toasts (positions, animations)
- **Patron Template Method** : Pour définir le squelette d'algorithme dans la classe abstraite de toast
- **Patron Builder** : Pour construire des toasts complexes étape par étape
- **Patron Chain of Responsibility** : Pour gérer la file d'attente des toasts
- **Patron Command** : Pour encapsuler les opérations sur les toasts comme objets
- **Patron Flyweight** : Pour optimiser les ressources en partageant des éléments communs entre toasts