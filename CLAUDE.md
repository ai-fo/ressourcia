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