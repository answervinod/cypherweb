import React, { useEffect, useRef } from 'react';

const BlockchainVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Block class for visualization
    class Block {
      x: number;
      y: number;
      size: number;
      speed: number;
      connections: Block[];
      pulseRadius: number;
      maxPulseRadius: number;
      pulseOpacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 8;
        this.speed = 0.5 + Math.random() * 0.5;
        this.connections = [];
        this.pulseRadius = 0;
        this.maxPulseRadius = 30;
        this.pulseOpacity = 1;
      }

      update() {
        // Pulse animation
        if (this.pulseRadius < this.maxPulseRadius) {
          this.pulseRadius += 0.5;
          this.pulseOpacity = 1 - (this.pulseRadius / this.maxPulseRadius);
        } else {
          this.pulseRadius = 0;
          this.pulseOpacity = 1;
        }
      }

      draw() {
        if (!ctx) return;

        // Draw pulse
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 51, 234, ${this.pulseOpacity})`;
        ctx.stroke();

        // Draw block
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#9333EA';
        ctx.fill();

        // Draw connections
        this.connections.forEach(block => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(block.x, block.y);
          ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
          ctx.stroke();
        });
      }
    }

    // Create blocks
    const blocks: Block[] = [];
    const blockCount = 12;

    for (let i = 0; i < blockCount; i++) {
      blocks.push(new Block(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Connect blocks in a chain
    for (let i = 0; i < blocks.length - 1; i++) {
      blocks[i].connections.push(blocks[i + 1]);
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocks.forEach(block => {
        block.update();
        block.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-gray-900"
    />
  );
};

export default BlockchainVisualization; 