# Étape 5 : Gestionnaire de Toasts

### Objectif pédagogique
Créer un gestionnaire central qui s'occupe de l'affichage des toasts et de la gestion de la file d'attente. Cela permet d'illustrer le patron Singleton et Chain of Responsibility.

### Étapes détaillées
1. **Créer le fichier `src/manager/ToastManager.ts`**:
   - Implémenter la classe `ToastManager` en utilisant le patron Singleton
   - Ajouter des propriétés pour la file d'attente et les toasts actifs
   - Implémenter la méthode `show()` qui gère l'affichage ou la mise en file d'attente
   - Créer et gérer le conteneur DOM pour les toasts
   - Si la priorité du toast est inférieure à 2, on doit mettre ce toast en premier dans le tableau de gestion des toasts, et dans le HTML.

2. **Implémentation de Chain of Responsibility**:
   - Quand un toast est supprimé, vérifier s'il y a des toasts en attente
   - Si oui, retirer le premier toast de la file et l'afficher
   - Cette chaîne de responsabilité permet de gérer séquentiellement les toasts sans surcharger l'interface

### Intérêt pédagogique
- Comprendre comment le patron Chain of Responsibility permet de gérer une file d'attente
- Voir comment un gestionnaire centralisé (Singleton) simplifie la coordination des toasts
- Apprendre à interagir avec le DOM de manière organisée et modulaire