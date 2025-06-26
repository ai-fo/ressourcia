# CLAUDE.md - Documentation du Projet

## Vue d'ensemble
Site web éducatif sur l'IA avec une approche ludique et narrative.

## Instructions importantes
- **NE JAMAIS exécuter `npm run dev`** - L'utilisateur s'en charge lui-même
- Toujours attendre que l'utilisateur lance le serveur de développement

## Stack Technique
- **Framework**: React 18
- **Langage**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules / Tailwind CSS
- **Tests**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **State Management**: Context API / Zustand (pour les états complexes)
- **Routing**: React Router v6

## Architecture Modulaire

### Structure des dossiers
```
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants partagés
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── features/           # Fonctionnalités par domaine
│   ├── storytelling/   # Module narration
│   ├── interactive/    # Module jeux/interactions
│   └── explanations/   # Module explications
├── pages/              # Pages de l'application
├── hooks/              # Custom hooks
├── utils/              # Utilitaires
├── services/           # Services API
├── types/              # Types TypeScript
└── tests/              # Tests unitaires

### Principes d'Architecture
1. **Isolation des fonctionnalités**: Chaque feature est autonome
2. **Composants découplés**: Props typées et interfaces claires
3. **Tests unitaires obligatoires**: Minimum 80% de couverture
4. **Lazy loading**: Chargement différé des pages

## Structure d'une Page Type

Chaque page suit ce modèle:
1. **Introduction Storytelling**: Composant narratif avec histoire/fait réel
2. **Élément Interactif**: Mini-jeu ou visualisation interactive
3. **Explications Détaillées**: Contenu approfondi avec exemples

## Structure Obligatoire des Pages de Concepts

Chaque page qui explique un concept IA DOIT contenir ces éléments essentiels :

### 1. Hero Section avec Storytelling (OBLIGATOIRE)
- **Histoire captivante** : Débuter avec une histoire qui humanise le concept
- **Format narratif** : Utiliser des personnages, des situations concrètes
- **Exemple** : L'histoire d'Alice et ALBERT pour expliquer l'apprentissage automatique

### 2. Mini-jeu Interactif (OBLIGATOIRE)
- **Engagement actif** : Le jeu doit permettre de comprendre le concept en pratiquant
- **Feedback immédiat** : Animations visuelles pour les bonnes/mauvaises réponses
- **Gamification** : Attribution de points et tracking de progression
- **Liberté créative** : Le jeu peut être graphique, textuel, simulation, puzzle, etc.

### 3. Section Histoire/Timeline (OPTIONNEL)
- **Utiliser quand pertinent** : Seulement si l'évolution historique apporte de la valeur
- **Design visuel** : Timeline avec dates centrées et alternance gauche/droite
- **Points clés** : 6-8 événements marquants maximum

### 4. Quiz de Validation (OBLIGATOIRE)
- **Minimum 3 questions** : Couvrant les points essentiels
- **Mélange des options** : Randomiser l'ordre des réponses
- **Feedback pédagogique** : Expliquer pourquoi la réponse est correcte/incorrecte
- **Système de points** :
  - 3/3 : 200 points bonus
  - 2/3 : 100 points bonus
  - 1/3 ou 0/3 : 50 points bonus
- **Tracking** : Vérifier si déjà complété pour éviter le farming de points

### 5. Bouton Retour à l'Accueil (OBLIGATOIRE)
- **Design liquid spectaculaire** : Portal avec effet morphing
- **Position** : En fin de page, section dédiée
- **Animation** : Blobs flottants et effet de hover
- **Texte** : "Retour à l'accueil" + "Explorez d'autres concepts"

### Structure de Code Recommandée

```typescript
export const ConceptPage = () => {
  // États pour le jeu
  const [gameScore, setGameScore] = useState(0);
  const [hasCompletedGame, setHasCompletedGame] = useState(false);
  
  // États pour le quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Gamification
  const { completeChapter, completeActivity } = useGamification();
  
  // Structure des sections
  return (
    <PageLayout>
      {/* 1. Hero avec image */}
      <header className="page-hero">...</header>
      
      {/* 2. Histoire Storytelling */}
      <StorySection story={storyContent} />
      
      {/* 3. Jeu Interactif */}
      <InteractiveSection>
        {/* Mini-jeu spécifique au concept */}
      </InteractiveSection>
      
      {/* 4. Timeline (optionnel - si pertinent) */}
      {/* <section className="history-section">...</section> */}
      
      {/* 5. Explications détaillées */}
      <ExplanationSection explanation={explanationContent} />
      
      {/* 6. Quiz obligatoire */}
      <section className="quiz-section">...</section>
      
      {/* 7. Retour accueil */}
      <section className="back-home-section">
        <div className="liquid-portal-container">...</div>
      </section>
    </PageLayout>
  );
};
```

### Points d'Attention
- **Cohérence visuelle** : Utiliser les mêmes animations liquid/morphing
- **Responsive** : Adapter tous les éléments pour mobile
- **Performance** : Lazy loading des sections lourdes
- **Accessibilité** : ARIA labels sur tous les éléments interactifs

## Commandes

### Développement
```bash
npm run dev          # Lance le serveur de développement
npm run build        # Build de production
npm run preview      # Preview du build
```

### Tests
```bash
npm run test         # Lance les tests
npm run test:watch   # Tests en mode watch
npm run test:coverage # Rapport de couverture
```

### Qualité du Code
```bash
npm run lint         # Vérifie le linting
npm run lint:fix     # Corrige les erreurs de linting
npm run typecheck    # Vérifie les types TypeScript
npm run format       # Formate le code avec Prettier
```

## Conventions de Code

### Naming
- Composants: PascalCase (ex: `StorySection.tsx`)
- Hooks: camelCase avec préfixe "use" (ex: `useAnimation.ts`)
- Utilitaires: camelCase (ex: `formatDate.ts`)
- Types/Interfaces: PascalCase avec préfixe "I" ou suffixe "Type"

### Structure d'un Composant
```typescript
interface ComponentProps {
  // Props typées
}

export const Component: React.FC<ComponentProps> = ({ props }) => {
  // Logique du composant
  return <div>...</div>;
};
```

### Tests
- Un fichier `.test.tsx` par composant
- Tests d'intégration dans `__tests__/`
- Mocks dans `__mocks__/`

## Gestion d'État
- État local: useState pour les états simples
- État partagé: Context API pour les thèmes/préférences
- État complexe: Zustand pour les interactions de jeu

## Performance
- React.memo pour les composants lourds
- useMemo/useCallback pour optimiser les re-renders
- Code splitting par route
- Images optimisées avec lazy loading

## Accessibilité
- ARIA labels sur tous les éléments interactifs
- Navigation au clavier complète
- Contraste des couleurs conforme WCAG AA
- Textes alternatifs pour toutes les images

## SEO
- Meta tags dynamiques par page
- Structured data pour le contenu éducatif
- Sitemap XML généré automatiquement
- URLs descriptives et hiérarchiques