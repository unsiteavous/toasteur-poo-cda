# Étape 8 : Point d'entrée et exposition globale

### Objectif pédagogique
Créer un point d'entrée unique pour la librairie et l'exposer globalement. Cela permet d'avoir une API simple et intuitive pour les utilisateurs.

### Étapes détaillées
1. **Créer le fichier `src/Toasteur.ts`**:
   - Implémenter la classe `Toasteur` en utilisant le patron Singleton
   - Définir des méthodes publiques simplifiées: `success()`, `error()`, etc.
   - Exposer les configurations et options avancées

2. **Créer le fichier `src/index.ts`**:
   - Importer et instancier les composants nécessaires
   - Ajouter les styles CSS automatiquement
   - Exposer l'API via l'objet global `window.toasteur`
   - Exporter aussi l'instance pour les utilisateurs de modules

### Intérêt pédagogique
- Comprendre comment créer une API simple qui masque la complexité sous-jacente
- Voir comment exposer une librairie module à la fois pour les systèmes de modules et pour l'utilisation globale
- Apprendre à intégrer des styles CSS programmatiquement