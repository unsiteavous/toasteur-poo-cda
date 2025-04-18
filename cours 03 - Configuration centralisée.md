# Étape 3 : Configuration centralisée

### Objectif pédagogique
Implémenter le patron Singleton pour centraliser la configuration. Cela permet d'avoir un point unique de vérité pour toutes les options configurables de notre librairie.

Le but de cette classe est de regrouper toutes les infos à un endroit si on veut personnaliser le visuel des toasts. Elle nous permet aussi de pouvoir gérer ces informations mieux qu'un fichier de configuration avec que des constantes, parce qu'on peut les faire évoluer au fil du temps (par exemple changer la durée d'affichage, modifier les couleurs en fonction du thème de la page : clair ou sombre, ...).

### Étapes détaillées
1. **Créer le fichier `src/config/ToastConfig.ts`**:
   - Implémenter la classe `ToastConfig` en utilisant le patron Singleton
   - Définir toutes les options configurables: durée d'affichage, couleurs, titres, etc.
   - Ajouter des getters et setters pour permettre la modification des options

2. **Implémentation du Singleton**:
   - Constructeur privé pour empêcher l'instanciation directe
   - Méthode statique `getInstance()` qui garantit qu'une seule instance existe
   - Stockage de l'instance unique dans une propriété statique

3. **Utilisation de la configuration**:
   - Modifier les modèles pour que toutes les informations "modifiables" soient stockées dans la classe de configuration, et qu'ils fassent appel à cette dernière.

### Intérêt pédagogique
- Comprendre le patron Singleton et pourquoi il est utile pour centraliser la configuration
- Apprendre à utiliser les modificateurs d'accès de TypeScript (private, public)
- Voir comment les getters et setters permettent un accès contrôlé aux propriétés d'une classe