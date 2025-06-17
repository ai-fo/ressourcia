import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConceptCard } from '../components/ui/ConceptCard';
import { aiConcepts } from '../data/concepts';
import './HomePage.css';

export const HomePage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const navigate = useNavigate();

  const filteredConcepts =
    selectedDifficulty === 'all'
      ? aiConcepts
      : aiConcepts.filter(
          (concept) => concept.difficulty === selectedDifficulty
        );

  const handleCardClick = (slug: string) => {
    navigate(`/concept/${slug}`);
  };

  return (
    <div className="home-page">
      <div className="home-page__liquid-bg"></div>

      <header className="home-header">
        <div className="home-header__content">
          <h1 className="home-title">
            <span className="title-line">Découvre l'IA</span>
            <span className="title-line title-line--accent">
              de façon fun ! 🎨
            </span>
          </h1>
          <p className="home-subtitle">
            Apprends les concepts de l'intelligence artificielle à travers des
            histoires illustrées et des jeux interactifs
          </p>
        </div>
      </header>

      <section className="filter-section">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('all')}
          >
            Tous les niveaux
          </button>
          <button
            className={`filter-btn ${selectedDifficulty === 'beginner' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('beginner')}
          >
            Débutant
          </button>
          <button
            className={`filter-btn ${selectedDifficulty === 'intermediate' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('intermediate')}
          >
            Intermédiaire
          </button>
          <button
            className={`filter-btn ${selectedDifficulty === 'advanced' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('advanced')}
          >
            Avancé
          </button>
        </div>
      </section>

      <main className="concepts-grid-container">
        <div className="concepts-grid">
          {filteredConcepts.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </main>

      <div className="floating-shapes">
        <div className="shape shape--1"></div>
        <div className="shape shape--2"></div>
        <div className="shape shape--3"></div>
      </div>
    </div>
  );
};
