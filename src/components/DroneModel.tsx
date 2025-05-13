'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export function DroneModel(props: any) {
  const { scene } = useGLTF('/models/flying_drone_animation.glb');

  const fan1 = useRef<THREE.Object3D>(null);
  const fan2 = useRef<THREE.Object3D>(null);
  const fan3 = useRef<THREE.Object3D>(null);
  const fan4 = useRef<THREE.Object3D>(null);

  useEffect(() => {
    // Replace these with actual part names from your model
    fan1.current = scene.getObjectByName('Fan_1');
    fan2.current = scene.getObjectByName('Fan_2');
    fan3.current = scene.getObjectByName('Fan_3');
    fan4.current = scene.getObjectByName('Fan_4');

    // Debug: log names if you need to inspect
    // scene.traverse((child) => console.log(child.name));
  }, [scene]);

  useFrame(() => {
    const speed = 0.4;
  
    if (fan1.current) fan1.current.rotation.z += speed;
    if (fan2.current) fan2.current.rotation.z += speed;
    if (fan3.current) fan3.current.rotation.z += speed;
    if (fan4.current) fan4.current.rotation.z += speed;
  });
  

  return <primitive object={scene}  position={[0, -1, 10]} scale={3} {...props} />;
}
