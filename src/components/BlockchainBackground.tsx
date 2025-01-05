import React, { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  angle: number;
  speed: number;
  radius: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 0.5 + Math.random();
    this.radius = 1 + Math.random();
  }

  update(canvas: HTMLCanvasElement | null) {
    if (!canvas) return; // Add null check

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Keep within bounds
    if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
    if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
  }
}

export const BlockchainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node class for blockchain visualization
    class Node {
      x: number;
      y: number;
      connections: Node[];
      speed: number;
      angle: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.speed = 0.2 + Math.random() * 0.3;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += this.speed / 100;
        this.x += Math.cos(this.angle) * 0.5;
        this.y += Math.sin(this.angle) * 0.5;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Keep within bounds
        if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Draw connections
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Connect nodes
    nodes.forEach(node => {
      const connectionsCount = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < connectionsCount; i++) {
        const otherNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (otherNode !== node && !node.connections.includes(otherNode)) {
          node.connections.push(otherNode);
        }
      }
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update();
        node.draw();
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
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default BlockchainBackground; 