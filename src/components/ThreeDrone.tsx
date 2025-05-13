'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function DroneModel(props: any) {
  const { scene } = useGLTF('/models/flying_drone_animation.glb');
  return <primitive object={scene} scale={1.5} {...props} />;
}

export default function ThreeDrone() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} intensity={1.2} />
        <Suspense fallback={null}>
          <DroneModel position={[0, 0, 0]} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
