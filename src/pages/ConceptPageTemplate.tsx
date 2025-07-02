import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { BackHomePortal } from '../components/ui/BackHomePortal';
import { LiquidBackground } from '../components/common/LiquidBackground';
import './ConceptPageTemplate.css';

// Ce composant servira de template pour toutes les pages de concepts futures
export const ConceptPageTemplate = () => {
  const { slug } = useParams();

  // Pour l'instant, on affiche juste une page de placeholder
  // Plus tard, on pourra charger le contenu depuis une base de données ou des fichiers
  return (
    <PageLayout>
      <div className="concept-page-template">
        <LiquidBackground variant="purple" />

        <header className="page-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="page-title">
                <span className="title-gradient">Concept à venir</span>
              </h1>
              <p className="page-subtitle">
                Cette page sera bientôt disponible : {slug}
              </p>
            </div>
          </div>
        </header>

        <section className="coming-soon-section">
          <div className="content-placeholder">
            <h2>🚧 En construction</h2>
            <p>Ce concept passionnant sera bientôt disponible avec :</p>
            <ul>
              <li>✨ Une histoire captivante en storytelling</li>
              <li>🎮 Un mini-jeu interactif pour apprendre en s'amusant</li>
              <li>📚 Des explications détaillées et accessibles</li>
              <li>🎯 Un quiz pour tester vos connaissances</li>
            </ul>
          </div>
        </section>

        <BackHomePortal />
      </div>
    </PageLayout>
  );
};
