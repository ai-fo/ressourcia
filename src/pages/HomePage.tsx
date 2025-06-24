import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ConceptCard } from '../components/ui/ConceptCard';
import { aiConcepts, getConceptCountByDifficulty } from '../data/concepts';
import { useAuth } from '../contexts/AuthContext';
import { useGamification } from '../contexts/GamificationContext';
import './HomePage.css';

export const HomePage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { userStats } = useGamification();
  const conceptCounts = getConceptCountByDifficulty();

  const filteredConcepts =
    selectedDifficulty === 'all'
      ? aiConcepts
      : aiConcepts.filter(
          (concept) => concept.difficulty === selectedDifficulty
        );

  const handleCardClick = (slug: string) => {
    navigate(`/concept/${slug}`);
  };

  const handleFilterClick = (
    difficulty: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Si on clique sur le même filtre, pas d'animation
    if (difficulty === selectedDifficulty) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'filter-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // Déclencher la transition
    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedDifficulty(difficulty);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="home-page">
      <div className="home-page__liquid-bg"></div>

      <header className="home-header">
        <nav className="home-nav">
          <div className="nav-brand">
            <Link to="/home" className="nav-logo-link">
              <div className="nav-logo">Ressourcia</div>
            </Link>
            <div className="nav-slogan">L'IA racontée autrement</div>
          </div>
          <div className="nav-links">
            {user && userStats && (
              <div className="header-stats">
                <span className="header-stat">
                  <span className="stat-icon">⭐</span>
                  <span className="stat-value">{userStats.points}</span>
                </span>
                <span className="header-stat">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-value">Niv. {userStats.level}</span>
                </span>
                <span className="header-stat">
                  <span className="stat-icon">🔥</span>
                  <span className="stat-value">{userStats.streakDays}</span>
                </span>
              </div>
            )}
            {user ? (
              <>
                <Link to="/achievements" className="nav-link">
                  Mes Achievements
                </Link>
                <Link to="/profile" className="nav-link nav-link--profile">
                  Mon profil
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Se connecter
                </Link>
                <Link to="/register" className="nav-link nav-link--cta">
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <section className="filter-section">
        <div
          className={`filter-buttons ${isTransitioning ? 'filter-changing' : ''}`}
        >
          <button
            className={`filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
            onClick={(e) => handleFilterClick('all', e)}
          >
            Tous les niveaux ({aiConcepts.length})
          </button>
          <button
            className={`filter-btn ${selectedDifficulty === 'beginner' ? 'active' : ''}`}
            onClick={(e) => handleFilterClick('beginner', e)}
          >
            🟢 Débutant ({conceptCounts.beginner})
          </button>
          <button
            className={`filter-btn ${selectedDifficulty === 'intermediate' ? 'active' : ''}`}
            onClick={(e) => handleFilterClick('intermediate', e)}
          >
            🟡 Intermédiaire ({conceptCounts.intermediate})
          </button>
          <button
            className={`filter-btn ${selectedDifficulty === 'advanced' ? 'active' : ''}`}
            onClick={(e) => handleFilterClick('advanced', e)}
          >
            🔴 Avancé ({conceptCounts.advanced})
          </button>
        </div>
      </section>

      <main className="concepts-grid-container">
        <div
          className={`concepts-grid ${isTransitioning ? 'transitioning' : ''}`}
        >
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
