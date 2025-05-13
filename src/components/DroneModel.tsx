'use client';

import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

export function DroneModel(props: any) {
  const { scene } = useGLTF('/models/flying_drone_animation.glb');
  const droneRef = useRef<Group>(null);

  // Optional: Animate entire drone rotation slightly
  useFrame(() => {
    if (droneRef.current) {
      droneRef.current.rotation.y += 0.002;
      droneRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.2; // subtle float
    }
  });

  return (
    <group ref={droneRef} {...props}>
      <primitive object={scene} scale={3.5} />
    </group>
  );
}
