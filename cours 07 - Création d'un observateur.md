# Étape 7 : Observer pour notifier les changements d'état

### Objectif pédagogique
Implémenter le patron Observer pour permettre aux composants de s'abonner et d'être notifiés des événements du système. Cela illustre comment créer un système d'événements découplé.

### Étapes détaillées
1. **Créer le fichier `src/observer/ToastObserver.ts`**:
   - Implémenter la classe `ToastObserver` en utilisant le patron Singleton
   - Définir les méthodes `subscribe()`, `unsubscribe()` et `notify()`
   - Créer un système de typage pour les événements

2. **Intégration dans le système**:
   - Notifier les observateurs lorsqu'un toast est créé ou supprimé
   - Utiliser l'observateur pour déclencher l'affichage de nouveaux toasts depuis la file d'attente
   - Permettre aux composants externes de réagir aux changements d'état

### Intérêt pédagogique
- Comprendre le patron Observer et son utilité pour découpler les composants
- Voir comment créer un système d'événements typé en TypeScript
- Apprécier comment cela facilite la communication entre composants sans créer de dépendances directes
