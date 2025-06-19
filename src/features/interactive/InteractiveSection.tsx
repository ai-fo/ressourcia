import React from 'react';
import { InteractiveElement } from '../../types';
import './InteractiveSection.css';

interface InteractiveSectionProps {
  interactive?: InteractiveElement;
  children?: React.ReactNode;
}

export const InteractiveSection: React.FC<InteractiveSectionProps> = ({
  interactive,
  children,
}) => {
  return (
    <section className="interactive-section">
      {interactive && (
        <>
          <h2 className="interactive-title">{interactive.title}</h2>
          <p className="interactive-description">{interactive.description}</p>
        </>
      )}
      <div className="interactive-container">
        {children || (
          interactive && (
            <div className="interactive-placeholder">
              <p>Élément interactif: {interactive.type}</p>
              <p>Configuration: {JSON.stringify(interactive.config)}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
