import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MachineLearningExample } from './pages/MachineLearningExample';
import { WhatIsAIPage } from './pages/WhatIsAIPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
