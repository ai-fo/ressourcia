import React from 'react';
import { ExplanationSection as ExplanationSectionType } from '../../types';
import './ExplanationSection.css';

interface ExplanationSectionProps {
  explanation: ExplanationSectionType;
}

export const ExplanationSection: React.FC<ExplanationSectionProps> = ({
  explanation,
}) => {
  return (
    <section className="explanation-section">
      <h2 className="explanation-title">{explanation.title}</h2>
      <div className="explanation-content">
        <p>{explanation.content}</p>

        {explanation.keyPoints && explanation.keyPoints.length > 0 && (
          <div className="key-points">
            <h3>Points clés à retenir</h3>
            <ul>
              {explanation.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {explanation.examples && explanation.examples.length > 0 && (
          <div className="examples">
            <h3>Exemples</h3>
            {explanation.examples.map((example, index) => (
              <div key={index} className="example">
                <h4>{example.title}</h4>
                <p>{example.description}</p>
                {example.code && (
                  <pre className="example-code">
                    <code>{example.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
