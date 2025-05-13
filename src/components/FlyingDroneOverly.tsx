"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { DroneModel } from "./DroneModel";
import { Suspense } from "react";
import gsap from "gsap";

export default function FlyingDroneOverlay() {
  const droneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        droneRef.current,
        { x: "-10vw", y: "25vh", rotate: 0 },
        {
          x: "75vw", // Never leave screen
          y: "22vh",
          duration: 10,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={droneRef}
      className="fixed top-0 left-0 w-[320px] h-[320px] z-[9999] pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <DroneModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
