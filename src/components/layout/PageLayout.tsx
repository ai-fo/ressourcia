import React from 'react';
import './PageLayout.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <header className="page-header">
        <nav>
          <h1>AI Explorer</h1>
        </nav>
      </header>
      <main className="page-content">{children}</main>
      <footer className="page-footer">
        <p>&copy; 2025 AI Explorer - Apprendre l'IA de façon ludique</p>
      </footer>
    </div>
  );
};
