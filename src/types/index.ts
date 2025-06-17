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
