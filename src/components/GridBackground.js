// src/MatrixBackground.js
import React, { useEffect } from 'react';

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '10';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const colors = ['#00ff00', '#ff0000', '#0000ff', '#ffff00'];

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px arial`;

      drops.forEach((y, x) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }

        drops[x]++;
      });
    }

    const interval = setInterval(draw, 55);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix"></canvas>;
};

export default MatrixBackground;
