import React from 'react';
import './LiquidBackground.css';

interface LiquidBackgroundProps {
  variant?: 'blue' | 'orange' | 'purple' | 'default';
  className?: string;
}

export const LiquidBackground: React.FC<LiquidBackgroundProps> = ({
  variant = 'default',
  className = '',
}) => {
  return (
    <div
      className={`liquid-background liquid-background--${variant} ${className}`}
    >
      <div className="liquid-blob liquid-blob-1"></div>
      <div className="liquid-blob liquid-blob-2"></div>
      <div className="liquid-blob liquid-blob-3"></div>
    </div>
  );
};
