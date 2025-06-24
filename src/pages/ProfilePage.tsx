import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { PageLayout } from '../components/layout/PageLayout';
import './ProfilePage.css';

interface Profile {
  username: string;
  full_name: string;
  bio: string;
  avatar_url: string;
}

export const ProfilePage: React.FC = () => {
  const { user, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    username: '',
    full_name: '',
    bio: '',
    avatar_url: '',
  });
  const [editedProfile, setEditedProfile] = useState<Profile>(profile);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchProfile();
  }, [user, navigate]);

  const fetchProfile = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (data && !error) {
      setProfile(data);
      setEditedProfile(data);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');

    const { error } = await updateProfile(editedProfile);

    if (error) {
      setMessage('Erreur lors de la mise à jour du profil');
    } else {
      setMessage('Profil mis à jour avec succès !');
      setProfile(editedProfile);
      setEditing(false);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/home');
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="profile-loading">Chargement...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="profile-page">
        <div className="profile-background">
          <div className="profile-blob profile-blob-1"></div>
          <div className="profile-blob profile-blob-2"></div>
        </div>

        <div className="profile-container">
          <header className="profile-header">
            <h1 className="profile-title">Mon Profil Ressourcia</h1>
            <button onClick={handleSignOut} className="logout-btn">
              Se déconnecter
            </button>
          </header>

          {message && (
            <div
              className={`profile-message ${message.includes('Erreur') ? 'error' : 'success'}`}
            >
              {message}
            </div>
          )}

          <div className="profile-card">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                {profile.avatar_url ? (
                  <img src={profile.avatar_url} alt="Avatar" />
                ) : (
                  <div className="avatar-placeholder">
                    {profile.username?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
              </div>
              {editing && (
                <input
                  type="url"
                  placeholder="URL de l'avatar"
                  value={editedProfile.avatar_url || ''}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      avatar_url: e.target.value,
                    })
                  }
                  className="form-input"
                />
              )}
            </div>

            <div className="profile-info">
              <div className="info-group">
                <label>Nom d'utilisateur</label>
                {editing ? (
                  <input
                    type="text"
                    value={editedProfile.username || ''}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        username: e.target.value,
                      })
                    }
                    className="form-input"
                  />
                ) : (
                  <p className="info-value">
                    {profile.username || 'Non défini'}
                  </p>
                )}
              </div>

              <div className="info-group">
                <label>Nom complet</label>
                {editing ? (
                  <input
                    type="text"
                    value={editedProfile.full_name || ''}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        full_name: e.target.value,
                      })
                    }
                    className="form-input"
                    placeholder="Ton nom complet"
                  />
                ) : (
                  <p className="info-value">
                    {profile.full_name || 'Non défini'}
                  </p>
                )}
              </div>

              <div className="info-group">
                <label>Bio</label>
                {editing ? (
                  <textarea
                    value={editedProfile.bio || ''}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        bio: e.target.value,
                      })
                    }
                    className="form-input bio-input"
                    placeholder="Parle-nous de toi et de ta passion pour l'IA !"
                    rows={4}
                  />
                ) : (
                  <p className="info-value bio-text">
                    {profile.bio || 'Aucune bio ajoutée'}
                  </p>
                )}
              </div>

              <div className="info-group">
                <label>Email</label>
                <p className="info-value">{user?.email}</p>
              </div>
            </div>

            <div className="profile-actions">
              {editing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="save-btn"
                    disabled={loading}
                  >
                    {loading ? 'Sauvegarde...' : 'Sauvegarder'}
                  </button>
                  <button
                    onClick={() => {
                      setEditing(false);
                      setEditedProfile(profile);
                    }}
                    className="cancel-btn"
                  >
                    Annuler
                  </button>
                </>
              ) : (
                <button onClick={() => setEditing(true)} className="edit-btn">
                  Modifier le profil
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
