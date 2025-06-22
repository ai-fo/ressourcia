import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { useAuth } from '../contexts/AuthContext';
import { useGamification } from '../contexts/GamificationContext';
import { UserStatsBar } from '../components/gamification/UserStatsBar';
import { BadgeDisplay } from '../components/gamification/BadgeDisplay';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import './AchievementsPage.css';

interface AchievementHistory {
  id: string;
  points: number;
  reason: string;
  earned_at: string;
}

export const AchievementsPage: React.FC = () => {
  const { user } = useAuth();
  const { userStats, progress, loading } = useGamification();
  const [achievementsHistory, setAchievementsHistory] = useState<AchievementHistory[]>([]);

  useEffect(() => {
    const fetchAchievementsHistory = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('achievements_history')
        .select('*')
        .eq('user_id', user.id)
        .order('earned_at', { ascending: false })
        .limit(10);

      if (data && !error) {
        setAchievementsHistory(data);
      }
    };

    fetchAchievementsHistory();
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="loading-container">
          <p>Chargement de vos achievements...</p>
        </div>
      </PageLayout>
    );
  }

  const completedConcepts = progress.filter((p) => p.completed).length;
  const totalConcepts = 20; // Nombre total de concepts prévus
  const completionPercentage = Math.round(
    (completedConcepts / totalConcepts) * 100
  );

  return (
    <PageLayout>
      <div className="achievements-page">
        <div className="achievements-header">
          <h1 className="achievements-title">
            <span className="title-gradient">Mes Achievements</span>
          </h1>
          <p className="achievements-subtitle">
            Suivez votre progression et débloquez des badges en apprenant !
          </p>
        </div>

        <UserStatsBar />

        <section className="progress-section">
          <h2>Progression Globale</h2>
          <div className="progress-overview">
            <div className="progress-stat">
              <span className="stat-number">{completedConcepts}</span>
              <span className="stat-label">Concepts complétés</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <span className="progress-percentage">
                {completionPercentage}%
              </span>
            </div>
          </div>
        </section>

        <section className="badges-section">
          <h2>Badges Débloqués</h2>
          <BadgeDisplay showAll={true} />
        </section>

        <section className="recent-activity">
          <h2>Activité Récente</h2>
          <div className="activity-list">
            {progress
              .filter((p) => p.completed)
              .map((p, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">✅</div>
                  <div className="activity-details">
                    <h3>Concept: {p.conceptSlug.replace('-', ' ')}</h3>
                    {p.quizScore && (
                      <p className="activity-score">Score: {p.quizScore}%</p>
                    )}
                  </div>
                </div>
              ))}
            {progress.filter((p) => p.completed).length === 0 && (
              <p className="no-activity">
                Aucune activité pour le moment. Commencez à explorer les
                concepts !
              </p>
            )}
          </div>
        </section>

        {userStats && userStats.streakDays > 0 && (
          <section className="streak-section">
            <h2>🔥 Série en cours</h2>
            <div className="streak-info">
              <p className="streak-message">
                Vous avez appris pendant{' '}
                <strong>{userStats.streakDays} jours</strong> consécutifs !
              </p>
              {userStats.streakDays >= 3 && userStats.streakDays < 7 && (
                <p className="streak-motivation">
                  Continuez encore {7 - userStats.streakDays} jours pour
                  débloquer le badge "Dedication" !
                </p>
              )}
              {userStats.streakDays >= 7 && (
                <p className="streak-motivation">
                  Incroyable ! Continuez sur cette lancée !
                </p>
              )}
            </div>
          </section>
        )}

        {achievementsHistory.length > 0 && (
          <section className="history-section">
            <h2>📜 Historique récent</h2>
            <div className="achievements-history">
              {achievementsHistory.map((achievement) => (
                <div key={achievement.id} className="achievement-item">
                  <div className="achievement-points">+{achievement.points}</div>
                  <div className="achievement-details">
                    <p className="achievement-reason">{achievement.reason}</p>
                    <p className="achievement-date">
                      {new Date(achievement.earned_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="next-steps">
          <h2>Prochaines Étapes</h2>
          <div className="next-steps-content">
            <p>
              Continuez votre apprentissage pour débloquer plus de badges et
              augmenter votre niveau !
            </p>
            <button
              className="back-to-concepts"
              onClick={() => (window.location.href = '/home')}
            >
              Explorer plus de concepts →
            </button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
