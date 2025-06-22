import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';

export const IntroPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro
    const visited = localStorage.getItem('hasSeenIntro');
    if (visited === 'true') {
      setHasVisited(true);
    }
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const particleCount = 100;
    const particleSpeed = 0.5;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        size: Math.random() * 1.4 + 0.6,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Auto-redirect désactivé
    // const redirectTimer = setTimeout(() => {
    //   navigate('/home');
    // }, 5000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // clearTimeout(redirectTimer);
    };
  }, [navigate, hasVisited]);

  const handleSkip = () => {
    // localStorage.setItem('hasSeenIntro', 'true'); // Désactivé temporairement
    navigate('/home');
  };

  return (
    <div className="intro-page">
      {/* Liquid blobs background */}
      <div className="intro-liquid-blob intro-liquid-blob-1"></div>
      <div className="intro-liquid-blob intro-liquid-blob-2"></div>
      
      <canvas ref={canvasRef} className="sparkles-canvas" />
      
      <div className="intro-content">
        <h1 className="intro-title">
          <span className="title-main">
            Ressour<span className="title-accent">cia</span>
          </span>
          <span className="title-subtitle">L'IA racontée autrement</span>
        </h1>

        <button className="skip-button" onClick={handleSkip}>
          Découvrir →
        </button>
      </div>

      <div className="radial-overlay" />
    </div>
  );
};