import { useNavigate } from 'react-router-dom';
import './BackHomePortal.css';

export const BackHomePortal = () => {
  const navigate = useNavigate();

  return (
    <section className="back-home-section">
      <div className="liquid-portal-container">
        <div className="liquid-portal" onClick={() => navigate('/home')}>
          <div className="portal-liquid-bg">
            <div className="portal-blob portal-blob-1"></div>
            <div className="portal-blob portal-blob-2"></div>
            <div className="portal-blob portal-blob-3"></div>
          </div>
          <div className="portal-content">
            <div className="portal-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="portal-title">Retour à l'accueil</h3>
            <p className="portal-subtitle">Explorez d'autres concepts</p>
          </div>
          <div className="portal-glow"></div>
        </div>
      </div>
    </section>
  );
};
