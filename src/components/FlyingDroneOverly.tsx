'use client';

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { DroneModel } from './DroneModel';
import gsap from 'gsap';
import { OrbitControls } from '@react-three/drei';

export default function FlyingDroneOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          xPercent: -100,
          y: '10vh',
          rotate: 0,
        },
        {
          xPercent: 100,
          y: '20vh',
          rotate: 10,
          duration: 10,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] z-[9999] pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <DroneModel position={[0, 0, 0]} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
