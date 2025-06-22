import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MachineLearningExample } from './pages/MachineLearningExample';
import { WhatIsAIPage } from './pages/WhatIsAIPage';
import { ProfilePage } from './pages/ProfilePage';
import { IntroPage } from './pages/IntroPage';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

// Composant pour gérer la redirection conditionnelle
function RootRedirect() {
  // Toujours afficher l'intro (comportement persistant désactivé)
  return <IntroPage />;
  
  // Pour réactiver le comportement persistant, décommenter les lignes ci-dessous :
  // const hasSeenIntro = localStorage.getItem('hasSeenIntro') === 'true';
  // return hasSeenIntro ? <Navigate to="/home" replace /> : <IntroPage />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route path="/concept/what-is-ai" element={<WhatIsAIPage />} />
          <Route path="/concept/:slug" element={<MachineLearningExample />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
