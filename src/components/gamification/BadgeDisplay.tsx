import React from 'react';
import { useGamification } from '../../contexts/GamificationContext';
import './BadgeDisplay.css';

interface BadgeDisplayProps {
  limit?: number;
  showAll?: boolean;
}

export const BadgeDisplay: React.FC<BadgeDisplayProps> = ({
  limit = 3,
  showAll = false,
}) => {
  const { badges, userBadges, loading } = useGamification();

  if (loading) {
    return null;
  }

  const displayBadges = showAll
    ? badges
    : badges.filter((badge) => userBadges.includes(badge.id)).slice(0, limit);

  const earnedBadgesCount = badges.filter((badge) =>
    userBadges.includes(badge.id)
  ).length;

  return (
    <div className="badge-display">
      <div className="badge-header">
        <h3>
          Badges ({earnedBadgesCount}/{badges.length})
        </h3>
      </div>
      <div className="badge-grid">
        {displayBadges.map((badge) => {
          const isEarned = userBadges.includes(badge.id);
          return (
            <div
              key={badge.id}
              className={`badge-item ${!isEarned ? 'badge-locked' : ''}`}
              title={badge.description}
            >
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-name">{badge.name}</div>
              {!isEarned && showAll && (
                <div className="badge-requirement">
                  {badge.points_required > 0 &&
                    `${badge.points_required} points requis`}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!showAll && earnedBadgesCount > limit && (
        <p className="badge-more">
          Et {earnedBadgesCount - limit} autres badges...
        </p>
      )}
    </div>
  );
};
