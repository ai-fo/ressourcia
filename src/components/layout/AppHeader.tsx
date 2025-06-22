import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './AppHeader.css';

export const AppHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="app-header">
      <nav className="app-nav">
        <Link to="/home" className="nav-brand">
          <div className="nav-logo">Ressourcia</div>
          <div className="nav-slogan">L'IA racontée autrement</div>
        </Link>
        <div className="nav-links">
          {user ? (
            <>
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
  );
};
