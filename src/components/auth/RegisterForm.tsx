import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './AuthForms.css';

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password, username);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <Link to="/home" className="auth-back-link">
          ← Retour à l'accueil
        </Link>
        <h2 className="auth-title">Rejoins Ressourcia !</h2>
        
        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="SuperIA2024"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ton.email@exemple.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="form-input"
          />
        </div>

        <button 
          type="submit" 
          className="auth-submit-btn"
          disabled={loading}
        >
          {loading ? 'Création...' : 'Créer mon compte'}
        </button>

        <p className="auth-link">
          Déjà un compte ?{' '}
          <Link to="/login">Se connecter</Link>
        </p>
      </form>
    </div>
  );
};