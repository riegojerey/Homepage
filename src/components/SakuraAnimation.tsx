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

    const createSakura = (isFloating = false) => {
      const sakura = document.createElement('div');
      const petalType = Math.floor(Math.random() * 3) + 1;
      sakura.className = `sakura petal${petalType} ${isFloating ? 'floating' : 'falling'}`;
      
      // Position petals
      sakura.style.left = `${Math.random() * 120 - 10}vw`;
      sakura.style.top = isFloating ? '110%' : '-5%';
      
      // Randomize animation duration
      const mainDuration = isFloating 
        ? Math.random() * 10 + 15 // 15-25 seconds for floating
        : Math.random() * 8 + 12;  // 12-20 seconds for falling
      const swayDuration = Math.random() * 4 + 3;
      sakura.style.animationDuration = `${mainDuration}s, ${swayDuration}s`;
      
      // Adjust opacity and size
      sakura.style.opacity = `${Math.random() * 0.4 + 0.3}`; // 0.3-0.7
      sakura.style.transform = `scale(${Math.random() * 0.5 + 0.5})`; // 0.5-1.0
      container.appendChild(sakura);

      const cleanup = () => {
        if (sakura && sakura.parentNode === container) {
          container.removeChild(sakura);
        }
      };

      setTimeout(cleanup, mainDuration * 1000);
    };

    // Create initial petals - mix of falling and floating
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createSakura(i % 3 === 0); // Every third petal floats up
      }, i * 300);
    }

    // Create new petals regularly
    const interval = setInterval(() => {
      createSakura(Math.random() > 0.7); // 30% chance of floating petals
    }, 1200);

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