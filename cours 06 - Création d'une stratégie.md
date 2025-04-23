# Étape 6 : Stratégies de positionnement

### Objectif pédagogique
Implémenter le patron Strategy pour permettre de changer dynamiquement la position d'affichage des toasts. Cela illustre comment encapsuler des algorithmes interchangeables.

### Étapes détaillées
1. **Créer le fichier `src/strategy/PositionStrategy.ts`**:
   - Définir l'interface `PositionStrategy` avec les méthodes requises
   - Implémenter différentes stratégies: `TopRightStrategy`, `TopLeftStrategy`, etc.
   - Créer une factory pour faciliter la création des stratégies

2. **Intégration dans le ToastManager**:
   - Ajouter une propriété pour stocker la stratégie actuelle
   - Implémenter une méthode `setPosition()` qui change la stratégie
   - Appliquer la stratégie au conteneur de toasts

### Intérêt pédagogique
- Comprendre le patron Strategy et comment il permet de changer dynamiquement un comportement
- Voir comment définir une interface commune pour différentes stratégies
- Apprécier la flexibilité que cela apporte pour ajouter de nouvelles positions sans modifier le code existant