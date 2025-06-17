import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MachineLearningExample } from './pages/MachineLearningExample';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept/:slug" element={<MachineLearningExample />} />
      </Routes>
    </Router>
  );
}

export default App;
