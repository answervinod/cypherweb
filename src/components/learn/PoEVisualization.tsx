import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PoEVisualizationProps {
  className?: string;
}

export const PoEVisualization: React.FC<PoEVisualizationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const linesRef = useRef<THREE.Line[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x111827); // Dark background

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 15;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create validator nodes
    const createNode = (position: THREE.Vector3, color: number) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color });
      const node = new THREE.Mesh(geometry, material);
      node.position.copy(position);
      scene.add(node);
      return node;
    };

    // Create connections between nodes
    const createConnection = (start: THREE.Vector3, end: THREE.Vector3) => {
      const points = [start, end];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x4c1d95, opacity: 0.5, transparent: true });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      return line;
    };

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create validator nodes
    const validators = [
      { pos: new THREE.Vector3(-5, 3, 0), color: 0x818cf8 },  // Active validator
      { pos: new THREE.Vector3(5, 3, 0), color: 0x818cf8 },   // Active validator
      { pos: new THREE.Vector3(0, -4, 0), color: 0x4c1d95 },  // Main validator
      { pos: new THREE.Vector3(-3, -2, 0), color: 0x818cf8 }, // Active validator
      { pos: new THREE.Vector3(3, -2, 0), color: 0x818cf8 },  // Active validator
    ];

    nodesRef.current = validators.map(v => createNode(v.pos, v.color));

    // Create connections
    validators.forEach((v, i) => {
      if (i !== 2) { // Connect all nodes to the main validator
        linesRef.current.push(createConnection(v.pos, validators[2].pos));
      }
    });

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate nodes slightly
      nodesRef.current.forEach(node => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      // Pulse effect for connections
      linesRef.current.forEach(line => {
        const material = line.material as THREE.LineBasicMaterial;
        material.opacity = 0.3 + Math.sin(Date.now() * 0.003) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full min-h-[400px] ${className || ''}`}
    />
  );
}; 