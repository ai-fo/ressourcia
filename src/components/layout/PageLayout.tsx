import React from 'react';
import { AppHeader } from './AppHeader';
import './PageLayout.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <AppHeader />
      <main className="page-content">{children}</main>
      <footer className="page-footer">
        <p>&copy; 2025 Ressourcia - Apprendre l'IA de façon ludique</p>
      </footer>
    </div>
  );
};
