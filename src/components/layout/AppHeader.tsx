import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useGamification } from '../../contexts/GamificationContext';
import './AppHeader.css';

export const AppHeader: React.FC = () => {
  const { user } = useAuth();
  const { userStats } = useGamification();

  return (
    <header className="app-header">
      <nav className="app-nav">
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
  );
};
