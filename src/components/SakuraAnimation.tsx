'use client';

import { useEffect } from 'react';

const SakuraAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    document.body.appendChild(container);

    const createSakura = () => {
      const sakura = document.createElement('div');
      sakura.className = `sakura petal${Math.floor(Math.random() * 3) + 1}`;
      sakura.style.left = `${Math.random() * 100}vw`;
      sakura.style.animationDuration = `${Math.random() * 7 + 8}s, ${Math.random() * 4 + 3}s`;
      sakura.style.opacity = `${Math.random() * 0.3 + 0.2}`;
      sakura.style.transform = `scale(${Math.random() * 0.4 + 0.4})`;
      container.appendChild(sakura);

      const cleanup = () => {
        if (sakura && sakura.parentNode === container) {
          container.removeChild(sakura);
        }
      };

      setTimeout(cleanup, 15000);
    };

    // Create initial petals
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createSakura(), i * 300);
    }

    // Then create new petals less frequently
    const interval = setInterval(createSakura, 2000);

    return () => {
      clearInterval(interval);
      if (container && container.parentNode === document.body) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return null;
};

export default SakuraAnimation; 