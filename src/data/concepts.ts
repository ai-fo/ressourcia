export interface AIConcept {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string; // URL de l'image BD à ajouter plus tard
  color: 'blue' | 'orange'; // Pour alterner les couleurs
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

export const aiConcepts: AIConcept[] = [
  {
    id: 'ml-basics',
    title: 'Machine Learning',
    description:
      'Apprends comment les machines peuvent apprendre par elles-mêmes',
    slug: 'machine-learning-basics',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'neural-networks',
    title: 'Réseaux de Neurones',
    description: 'Découvre comment fonctionne un cerveau artificiel',
    slug: 'neural-networks',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'nlp-basics',
    title: 'Traitement du Langage',
    description: 'Comment les IA comprennent et génèrent du texte',
    slug: 'natural-language-processing',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'computer-vision',
    title: 'Vision par Ordinateur',
    description: 'Comment les machines peuvent "voir" et comprendre les images',
    slug: 'computer-vision',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'reinforcement-learning',
    title: 'Apprentissage par Renforcement',
    description: 'Comment les IA apprennent par essais et erreurs',
    slug: 'reinforcement-learning',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '25 min',
  },
  {
    id: 'ethics-ai',
    title: "Éthique de l'IA",
    description:
      "Les enjeux éthiques et sociétaux de l'intelligence artificielle",
    slug: 'ethics-ai',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'generative-ai',
    title: 'IA Générative',
    description: 'Comment les IA créent des images, textes et sons',
    slug: 'generative-ai',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'ai-history',
    title: "Histoire de l'IA",
    description: "L'évolution de l'intelligence artificielle depuis ses débuts",
    slug: 'ai-history',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '10 min',
  },
];
