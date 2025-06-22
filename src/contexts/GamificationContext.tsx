import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../services/supabase';

interface UserStats {
  points: number;
  level: number;
  streakDays: number;
  lastActivityDate: string | null;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  pointsRequired: number;
  category: string;
  earned?: boolean;
  earnedAt?: string;
}

interface Progress {
  conceptSlug: string;
  completed: boolean;
  quizScore: number | null;
  timeSpent: number;
}

interface GamificationContextType {
  userStats: UserStats | null;
  badges: Badge[];
  userBadges: string[];
  progress: Progress[];
  loading: boolean;
  addPoints: (points: number) => Promise<void>;
  completeChapter: (
    conceptSlug: string,
    quizScore?: number,
    timeSpent?: number
  ) => Promise<void>;
  checkAndAwardBadges: () => Promise<void>;
}

const GamificationContext = createContext<GamificationContextType | undefined>(
  undefined
);

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error(
      'useGamification doit être utilisé dans un GamificationProvider'
    );
  }
  return context;
};

interface GamificationProviderProps {
  children: React.ReactNode;
}

export const GamificationProvider: React.FC<GamificationProviderProps> = ({
  children,
}) => {
  const { user } = useAuth();
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [userBadges, setUserBadges] = useState<string[]>([]);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch user stats
  const fetchUserStats = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (data) {
      setUserStats({
        points: data.points,
        level: data.level,
        streakDays: data.streak_days,
        lastActivityDate: data.last_activity_date,
      });
    }
  };

  // Fetch all badges and user's earned badges
  const fetchBadges = async () => {
    const { data: allBadges } = await supabase
      .from('badges')
      .select('*')
      .order('points_required');

    if (allBadges) {
      setBadges(allBadges);
    }

    if (user) {
      const { data: userBadgesData } = await supabase
        .from('user_badges')
        .select('badge_id, earned_at')
        .eq('user_id', user.id);

      if (userBadgesData) {
        setUserBadges(userBadgesData.map((ub) => ub.badge_id));
      }
    }
  };

  // Fetch user progress
  const fetchProgress = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id);

    if (data) {
      setProgress(
        data.map((p) => ({
          conceptSlug: p.concept_slug,
          completed: p.completed,
          quizScore: p.quiz_score,
          timeSpent: p.time_spent,
        }))
      );
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchUserStats(), fetchBadges(), fetchProgress()]);
      setLoading(false);
    };

    loadData();
  }, [user]);

  // Add points to user
  const addPoints = async (points: number) => {
    if (!user || !userStats) return;

    const newPoints = userStats.points + points;
    const newLevel = Math.floor(newPoints / 100) + 1;

    const { error } = await supabase
      .from('user_stats')
      .update({
        points: newPoints,
        level: newLevel,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user.id);

    if (!error) {
      setUserStats({
        ...userStats,
        points: newPoints,
        level: newLevel,
      });
    }
  };

  // Complete a chapter/concept
  const completeChapter = async (
    conceptSlug: string,
    quizScore?: number,
    timeSpent?: number
  ) => {
    if (!user) return;

    // Check if already completed
    const existingProgress = progress.find(
      (p) => p.conceptSlug === conceptSlug
    );

    if (!existingProgress?.completed) {
      // Award points for first completion
      await addPoints(20);

      // Additional points for quiz score
      if (quizScore !== undefined && quizScore > 80) {
        await addPoints(10);
      }
    }

    // Update or insert progress
    const { error } = await supabase.from('user_progress').upsert({
      user_id: user.id,
      concept_slug: conceptSlug,
      completed: true,
      quiz_score: quizScore,
      time_spent: timeSpent,
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (!error) {
      await fetchProgress();
      await checkAndAwardBadges();
    }

    // Update streak
    await updateStreak();
  };

  // Update daily streak
  const updateStreak = async () => {
    if (!user || !userStats) return;

    const today = new Date().toISOString().split('T')[0];
    const lastActivity = userStats.lastActivityDate;

    let newStreak = userStats.streakDays;

    if (lastActivity) {
      const lastDate = new Date(lastActivity);
      const todayDate = new Date(today);
      const diffDays = Math.floor(
        (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    } else {
      newStreak = 1;
    }

    await supabase
      .from('user_stats')
      .update({
        streak_days: newStreak,
        last_activity_date: today,
      })
      .eq('user_id', user.id);

    setUserStats({
      ...userStats,
      streakDays: newStreak,
      lastActivityDate: today,
    });
  };

  // Check and award badges
  const checkAndAwardBadges = async () => {
    if (!user || !userStats) return;

    const completedCount = progress.filter((p) => p.completed).length;
    const newBadges: string[] = [];

    // Premier Pas - First concept completed
    if (completedCount >= 1) {
      const badge = badges.find((b) => b.name === 'Premier Pas');
      if (badge && !userBadges.includes(badge.id)) {
        newBadges.push(badge.id);
      }
    }

    // Explorateur - 5 concepts completed
    if (completedCount >= 5) {
      const badge = badges.find((b) => b.name === 'Explorateur');
      if (badge && !userBadges.includes(badge.id)) {
        newBadges.push(badge.id);
      }
    }

    // Expert IA - 10 concepts completed
    if (completedCount >= 10) {
      const badge = badges.find((b) => b.name === 'Expert IA');
      if (badge && !userBadges.includes(badge.id)) {
        newBadges.push(badge.id);
      }
    }

    // Quiz Master - Perfect score
    const hasPerfectScore = progress.some((p) => p.quizScore === 100);
    if (hasPerfectScore) {
      const badge = badges.find((b) => b.name === 'Quiz Master');
      if (badge && !userBadges.includes(badge.id)) {
        newBadges.push(badge.id);
      }
    }

    // Streak badges
    if (userStats.streakDays >= 3) {
      const badge = badges.find((b) => b.name === 'Streaker');
      if (badge && !userBadges.includes(badge.id)) {
        newBadges.push(badge.id);
      }
    }

    if (userStats.streakDays >= 7) {
      const badge = badges.find((b) => b.name === 'Dedication');
      if (badge && !userBadges.includes(badge.id)) {
        newBadges.push(badge.id);
      }
    }

    // Award new badges
    for (const badgeId of newBadges) {
      await supabase.from('user_badges').insert({
        user_id: user.id,
        badge_id: badgeId,
      });
    }

    if (newBadges.length > 0) {
      setUserBadges([...userBadges, ...newBadges]);
    }
  };

  const value = {
    userStats,
    badges,
    userBadges,
    progress,
    loading,
    addPoints,
    completeChapter,
    checkAndAwardBadges,
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
};
