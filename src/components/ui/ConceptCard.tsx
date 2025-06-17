import { AIConcept } from '../../data/concepts';
import './ConceptCard.css';

interface ConceptCardProps {
  concept: AIConcept;
  onClick: (slug: string) => void;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  concept,
  onClick,
}) => {
  const difficultyLabel = {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé',
  };

  return (
    <article
      className={`concept-card concept-card--${concept.color}`}
      onClick={() => onClick(concept.slug)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(concept.slug);
        }
      }}
    >
      <div className="concept-card__liquid-bg"></div>

      <div className="concept-card__content">
        {concept.imageUrl ? (
          <div className="concept-card__image">
            <img src={concept.imageUrl} alt={concept.title} />
          </div>
        ) : (
          <div className="concept-card__placeholder">
            <span>🤖</span>
          </div>
        )}

        <h3 className="concept-card__title">{concept.title}</h3>
        <p className="concept-card__description">{concept.description}</p>

        <div className="concept-card__meta">
          <span className={`difficulty difficulty--${concept.difficulty}`}>
            {difficultyLabel[concept.difficulty]}
          </span>
        </div>
      </div>

      <div className="concept-card__hover-effect"></div>
    </article>
  );
};
