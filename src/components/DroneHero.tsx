"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ThreeDrone from "./ThreeDrone";

const DroneHero = () => {
  const droneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      //   gsap.fromTo(
      //     droneRef.current,
      //     { x: "-100%", rotate: -15 },
      //     {
      //       x: "100%",
      //       duration: 4,
      //       ease: "power2.inOut",
      //       rotate: 15,
      //       repeat: -1,
      //       yoyo: true,
      //     }
      //   );
      gsap.fromTo(
        droneRef.current,
        { x: "-100%", rotate: -10 },
        {
          x: "100%",
          rotate: 10,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-black dark:to-gray-800"
      )}
    >
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Take Flight with{" "}
          <span className="text-blue-600 dark:text-blue-400">SkyStore</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore the next generation of drones with cinematic cameras, AI
          features, and adventure-ready designs.
        </p>
        <button className="mt-6 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Browse Drones
        </button>
      </div>

      {/* Drone Image Animation */}
      <div
        ref={droneRef}
        className="absolute top-10 left-0 w-60 h-60 md:w-72 md:h-72"
      >
        <ThreeDrone />
      </div>
    </section>
  );
};

export default DroneHero;
