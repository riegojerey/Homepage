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
      sakura.style.left = `${Math.random() * 120 - 10}vw`;
      sakura.style.top = '-5%';
      const fallDuration = Math.random() * 8 + 12;
      const swayDuration = Math.random() * 4 + 3;
      sakura.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
      sakura.style.opacity = `${Math.random() * 0.4 + 0.3}`;
      sakura.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      container.appendChild(sakura);

      const cleanup = () => {
        if (sakura && sakura.parentNode === container) {
          container.removeChild(sakura);
        }
      };

      setTimeout(cleanup, fallDuration * 1000);
    };

    for (let i = 0; i < 8; i++) {
      setTimeout(() => createSakura(), i * 400);
    }

    const interval = setInterval(createSakura, 1500);

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