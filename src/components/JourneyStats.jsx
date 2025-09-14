"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function JourneyStats() {
  const blob1Ref = useRef(null);

  useGSAP(() => {
    // Animate first blob
    gsap.to(blob1Ref.current, {
      x: -100,
      y: 80,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div
          ref={blob1Ref}
          className="absolute left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/30 opacity-30 blur-[180px]"
        />
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 max-w-md">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Your Fitness Journey Starts Here
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold">12+</p>
            <p className="text-sm opacity-70">Experience</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold">27+</p>
            <p className="text-sm opacity-70">Activities</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold">60+</p>
            <p className="text-sm opacity-70">Weekly Classes</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold">50+</p>
            <p className="text-sm opacity-70">Trainers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
