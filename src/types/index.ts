// Types pour les quiz
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

// Types pour les sections narratives
export interface StoryContent {
  title: string;
  content: string;
  fact?: {
    title: string;
    description: string;
  };
}

export interface StorySection {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  fact?: {
    title: string;
    description: string;
    source?: string;
  };
}

export interface InteractiveElement {
  id: string;
  type: 'game' | 'graph' | 'simulation' | 'quiz';
  title: string;
  description: string;
  config: Record<string, unknown>;
}

// Types pour les explications
export interface ExplanationSubSection {
  subtitle: string;
  content: string;
}

export interface ExplanationContent {
  title: string;
  sections: ExplanationSubSection[];
  keyPoints?: string[];
}

export interface ExplanationSection {
  id: string;
  title: string;
  content: string;
  examples?: Example[];
  keyPoints?: string[];
}

export interface Example {
  title: string;
  description: string;
  code?: string;
  visualUrl?: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  description: string;
  story: StorySection;
  interactive: InteractiveElement;
  explanation: ExplanationSection;
  metadata: PageMetadata;
}

export interface PageMetadata {
  author?: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Types pour la gamification
export interface GameScore {
  score: number;
  totalQuestions: number;
  timeSpent?: number;
}

export interface UserActivity {
  activityId: string;
  activityType: 'quiz' | 'game' | 'reading';
  score?: number;
  points: number;
  completedAt: Date;
}
