import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt = 'Concept illustration',
}) => {
  return (
    <header className="page-hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="page-title">
            <span className="title-gradient">{title}</span>
          </h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
        {imageUrl && (
          <div className="hero-image-container">
            <img src={imageUrl} alt={imageAlt} className="hero-image" />
            <div className="image-liquid-effect"></div>
          </div>
        )}
      </div>
    </header>
  );
};
