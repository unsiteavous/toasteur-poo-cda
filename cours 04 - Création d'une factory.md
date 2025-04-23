# Étape 4 : Factory pour la création des Toasts

### Objectif pédagogique
Implémenter le patron Factory pour encapsuler la logique de création des différents types de toasts. Cela permet de masquer la complexité de la création d'objets au client.

### Étapes détaillées
1. **Créer le fichier `src/factory/ToastFactory.ts`**:
   - Implémenter la classe `ToastFactory` avec une méthode `createToast()`
   - Utiliser un switch pour déterminer le type de toast à créer
   - Retourner l'instance appropriée en fonction du type demandé

2. **Avantages du Factory**:
   - Les clients n'ont plus besoin de connaître les détails des classes concrètes
   - L'ajout de nouveaux types de toast ne nécessite qu'une modification à un seul endroit
   - Le code est plus modulaire et facile à maintenir

Pour bien comprendre l'intérêt de la factory, ajoutez une nouvelle propriété à votre AbstractToast, `priority`. C'est nous qui allons définir dans la Factory la priorité de chaque type de toast, sans que l'utilisateur ait quoi que ce soit à faire. La factory est là pour commander le bon objet à partir de ce que veut le client, sans que le client ait besoin de tout savoir sur l'objet final.

### Intérêt pédagogique
- Comprendre le patron Factory Method et son utilité pour encapsuler la création d'objets
- Voir comment il permet de respecter le principe "ouvert/fermé" (ouvert à l'extension, fermé à la modification)
- Apprendre à centraliser la logique de création pour faciliter la maintenance