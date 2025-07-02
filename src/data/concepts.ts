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
  // Niveau Facile (beginner)
  {
    id: 'what-is-ai',
    title: "Qu'est-ce que l'IA ?",
    description:
      "Imagine un grille-pain qui apprend à faire des blagues... Voilà l'IA : des machines qui font semblant d'être intelligentes (et parfois y arrivent) !",
    slug: 'what-is-ai',
    imageUrl: '/images/concepts/questcequelia.png',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '10 min',
  },
  {
    id: 'ml-basics',
    title: 'Machine Learning',
    description:
      "C'est comme apprendre à ton chat à faire le café : tu lui montres 1000 fois, et peut-être qu'un jour il comprendra (spoiler : l'IA apprend plus vite).",
    slug: 'machine-learning-basics',
    imageUrl: '/images/concepts/machinelearning.png',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'image-recognition',
    title: "Reconnaissance d'image",
    description:
      'L\'IA qui joue à "Où est Charlie ?" mais en mode expert : elle trouve Charlie, sa famille et même son chien en 0.2 secondes !',
    slug: 'image-recognition',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'voice-recognition',
    title: 'Reconnaissance vocale',
    description:
      'Comment Siri comprend "Ok Google" et Google comprend "Hey Siri"... C\'est l\'amour moderne entre assistants vocaux !',
    slug: 'voice-recognition',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '12 min',
  },
  {
    id: 'chatbots',
    title: 'Chatbots',
    description:
      "Ces robots qui discutent mieux que ton ex, répondent plus vite que ta mère et ne t'interrompent jamais pendant que tu parles !",
    slug: 'chatbots',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'recommendations',
    title: 'Recommandations personnalisées',
    description:
      "Netflix qui te propose le 47ème film de zombies parce que tu as regardé UN documentaire sur les virus... L'IA a parfois trop d'imagination !",
    slug: 'recommendations',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'ai-gaming',
    title: 'IA et jeux vidéo',
    description:
      'Les ennemis qui apprennent tes techniques et deviennent plus forts... Comme ton petit frère à Mario Kart, mais en pire !',
    slug: 'ai-gaming',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '20 min',
  },
  {
    id: 'voice-assistants',
    title: 'Assistants vocaux',
    description:
      'Siri, Alexa et Google Assistant : la Sainte Trinité des IA qui comprennent tout sauf ton accent régional !',
    slug: 'voice-assistants',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '12 min',
  },
  {
    id: 'generative-ai',
    title: 'IA Générative',
    description:
      'ChatGPT et Midjourney : les artistes du 21e siècle qui créent sans café ni crise existentielle à 3h du matin !',
    slug: 'generative-ai',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '20 min',
  },
  {
    id: 'object-detection',
    title: "Détection d'objets",
    description:
      "L'IA qui trouve Waldo plus vite que toi, reconnaît un hot-dog d'un chien et sait que ton chat juge silencieusement tes choix de vie !",
    slug: 'object-detection',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'training-data',
    title: "Données d'entraînement",
    description:
      "C'est le régime alimentaire de l'IA : garbage in, garbage out ! Comme toi avec la junk food, mais en version numérique.",
    slug: 'training-data',
    color: 'blue',
    difficulty: 'beginner',
    estimatedTime: '15 min',
  },
  {
    id: 'algorithms',
    title: 'Algorithmes',
    description:
      "Les recettes de cuisine de l'IA : suivez les étapes, ajoutez des maths, mélangez bien et tadaa... vous avez fait cuire une prédiction !",
    slug: 'algorithms',
    color: 'orange',
    difficulty: 'beginner',
    estimatedTime: '12 min',
  },

  // Niveau Intermédiaire (intermediate)
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description:
      "C'est comme Machine Learning mais avec plus de couches... Comme un mille-feuille mathématique où chaque couche a oublié ce que fait la précédente !",
    slug: 'deep-learning',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'neural-networks',
    title: 'Réseaux de Neurones',
    description:
      "Un cerveau artificiel fait de maths et d'électricité... Frankenstein serait jaloux, mais au moins ça ne demande pas de cerveau humain !",
    slug: 'neural-networks',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
  },
  {
    id: 'nlp',
    title: 'Traitement du Langage Naturel',
    description:
      'L\'art de faire comprendre à un ordinateur que "Il fait un temps de chien" ne parle pas de météorologie canine !',
    slug: 'natural-language-processing',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'computer-vision',
    title: 'Vision par Ordinateur',
    description:
      'Donner des yeux à une machine... et elle voit mieux que toi sans tes lunettes (et même avec) !',
    slug: 'computer-vision',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'overfitting-underfitting',
    title: 'Overfitting et Underfitting',
    description:
      "Quand l'IA apprend trop bien ses devoirs et rate l'examen... Ou pas assez et rate aussi. C'est l'équilibre délicat de l'étudiant IA !",
    slug: 'overfitting-underfitting',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '18 min',
  },
  {
    id: 'ensemble-learning',
    title: 'Ensemble Learning',
    description:
      "Pourquoi avoir une IA quand on peut en avoir 100 qui votent ? C'est la démocratie version Silicon Valley !",
    slug: 'ensemble-learning',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '22 min',
  },
  {
    id: 'gans',
    title: 'GANs',
    description:
      "Deux IA qui se battent : l'une fait des faux billets, l'autre joue au détective. Le meilleur reality show du monde numérique !",
    slug: 'generative-adversarial-networks',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
  },
  {
    id: 'supervised-unsupervised',
    title: 'Supervisé vs Non-supervisé',
    description:
      "C'est comme élever des enfants : soit tu leur dis tout (supervisé), soit tu les laisses découvrir que le feu ça brûle (non-supervisé) !",
    slug: 'supervised-unsupervised-learning',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '18 min',
  },
  {
    id: 'ai-bias-ethics',
    title: 'Biais et Éthique en IA',
    description:
      "Quand l'IA hérite de nos préjugés... C'est comme si ton miroir te mentait, mais avec des conséquences plus graves !",
    slug: 'ai-bias-ethics',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },
  {
    id: 'collaborative-filtering',
    title: 'Filtrage Collaboratif',
    description:
      '"Les gens qui ont aimé les chaussettes à motif pizza ont aussi acheté..." L\'IA qui révèle les goûts bizarres de l\'humanité !',
    slug: 'collaborative-filtering',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '18 min',
  },
  {
    id: 'fine-tuning',
    title: 'Fine-tuning',
    description:
      "Prendre une IA généraliste et la transformer en spécialiste... Comme transformer ton ami qui sait tout en expert de l'histoire des nouilles !",
    slug: 'fine-tuning',
    color: 'blue',
    difficulty: 'intermediate',
    estimatedTime: '22 min',
  },
  {
    id: 'anomaly-detection',
    title: "Détection d'anomalies",
    description:
      "L'IA détective qui trouve ce qui cloche... Sherlock Holmes version binaire qui remarque quand tu changes de coiffure !",
    slug: 'anomaly-detection',
    color: 'orange',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
  },

  // Niveau Difficile (advanced)
  {
    id: 'transformers',
    title: 'Transformers',
    description:
      "Non, pas les robots déguisés ! L'architecture qui a révolutionné l'IA... Plus puissante qu'Optimus Prime et moins bruyante !",
    slug: 'transformers',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '30 min',
  },
  {
    id: 'attention-mechanism',
    title: "Mécanisme d'Attention",
    description:
      "L'IA qui apprend à se concentrer... Contrairement à toi devant Netflix, elle sait exactement où regarder !",
    slug: 'attention-mechanism',
    color: 'orange',
    difficulty: 'advanced',
    estimatedTime: '28 min',
  },
  {
    id: 'reinforcement-learning',
    title: 'Apprentissage par Renforcement',
    description:
      "L'IA qui apprend comme un chiot : récompense pour les bonnes actions, punition pour les mauvaises. Sauf qu'elle retient du premier coup !",
    slug: 'reinforcement-learning',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '30 min',
  },
  {
    id: 'vector-embeddings',
    title: 'Vector Embeddings',
    description:
      'Transformer des mots en coordonnées GPS mathématiques... Parce que "chat" et "chien" doivent vivre dans le même quartier vectoriel !',
    slug: 'vector-embeddings',
    color: 'orange',
    difficulty: 'advanced',
    estimatedTime: '25 min',
  },
  {
    id: 'explainable-ai',
    title: 'IA Explicable',
    description:
      "Forcer l'IA à expliquer ses devoirs... Parce que \"c'est magique\" n'est pas une réponse acceptable en science !",
    slug: 'explainable-ai',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '28 min',
  },
  {
    id: 'autoencoders',
    title: 'Autoencoders',
    description:
      "L'IA qui compresse et décompresse les données... Comme un sac de voyage magique qui fait rentrer toute ta vie dedans !",
    slug: 'autoencoders',
    color: 'orange',
    difficulty: 'advanced',
    estimatedTime: '26 min',
  },
  {
    id: 'diffusion-models',
    title: 'Modèles de Diffusion',
    description:
      "L'art de créer en détruisant puis reconstruisant... Comme un enfant avec des LEGO, mais en version Einstein !",
    slug: 'diffusion-models',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '32 min',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description:
      "L'art de parler aux IA... C'est comme la diplomatie, mais avec plus de créativité et moins de protocole !",
    slug: 'prompt-engineering',
    color: 'orange',
    difficulty: 'advanced',
    estimatedTime: '25 min',
  },
  {
    id: 'hyperparameter-optimization',
    title: 'Optimisation Hyperparamétrique',
    description:
      "Régler l'IA comme une Formule 1... Sauf que les mécaniciens sont des algorithmes et la piste est mathématique !",
    slug: 'hyperparameter-optimization',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '28 min',
  },
  {
    id: 'transfer-learning',
    title: 'Transfer Learning',
    description:
      "Recycler les connaissances d'une IA pour une autre tâche... L'économie circulaire version intelligence artificielle !",
    slug: 'transfer-learning',
    color: 'orange',
    difficulty: 'advanced',
    estimatedTime: '26 min',
  },
  {
    id: 'multimodal-models',
    title: 'Modèles Multimodaux',
    description:
      "L'IA qui voit, entend et comprend tout en même temps... Le super-héros des algorithmes, sans la cape mais avec plus de données !",
    slug: 'multimodal-models',
    color: 'blue',
    difficulty: 'advanced',
    estimatedTime: '35 min',
  },
];

// Fonction helper pour obtenir les concepts par niveau
export function getConceptsByDifficulty(
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): AIConcept[] {
  return aiConcepts.filter((concept) => concept.difficulty === difficulty);
}

// Fonction helper pour obtenir un concept par slug
export function getConceptBySlug(slug: string): AIConcept | undefined {
  return aiConcepts.find((concept) => concept.slug === slug);
}

// Fonction helper pour obtenir le nombre de concepts par niveau
export function getConceptCountByDifficulty(): Record<string, number> {
  return {
    beginner: aiConcepts.filter((c) => c.difficulty === 'beginner').length,
    intermediate: aiConcepts.filter((c) => c.difficulty === 'intermediate')
      .length,
    advanced: aiConcepts.filter((c) => c.difficulty === 'advanced').length,
  };
}
