import React from 'react';
import { StorySection as StorySectionType } from '../../types';
import './StorySection.css';

interface StorySectionProps {
  story: StorySectionType;
}

export const StorySection: React.FC<StorySectionProps> = ({ story }) => {
  return (
    <section className="story-section">
      <h2 className="story-title">{story.title}</h2>
      <div className="story-content">
        <p>{story.content}</p>
        {story.imageUrl && (
          <img src={story.imageUrl} alt={story.title} className="story-image" />
        )}
      </div>
      {story.fact && (
        <div className="story-fact">
          <h3>{story.fact.title}</h3>
          <p>{story.fact.description}</p>
          {story.fact.source && (
            <cite className="fact-source">Source: {story.fact.source}</cite>
          )}
        </div>
      )}
    </section>
  );
};
