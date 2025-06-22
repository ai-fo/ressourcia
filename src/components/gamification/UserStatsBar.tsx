import React from 'react';
import { useGamification } from '../../contexts/GamificationContext';
import './UserStatsBar.css';

export const UserStatsBar: React.FC = () => {
  const { userStats, loading } = useGamification();

  if (loading || !userStats) {
    return null;
  }

  const pointsToNextLevel = userStats.level * 100 - userStats.points;
  const progressPercentage = ((userStats.points % 100) / 100) * 100;

  return (
    <div className="user-stats-bar">
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-icon">⭐</span>
          <span className="stat-value">{userStats.points}</span>
          <span className="stat-label">Points</span>
        </div>

        <div className="stat-item level-stat">
          <span className="stat-icon">🎯</span>
          <div className="level-info">
            <span className="level-label">Niveau {userStats.level}</span>
            <div className="level-progress">
              <div
                className="level-progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="level-next">
              {pointsToNextLevel} pts jusqu'au niveau {userStats.level + 1}
            </span>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-icon">🔥</span>
          <span className="stat-value">{userStats.streakDays}</span>
          <span className="stat-label">Jours</span>
        </div>
      </div>
    </div>
  );
};
