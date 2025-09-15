"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function JourneyStats() {
  const blob1Ref = useRef(null);

  useGSAP(() => {
    gsap.to(blob1Ref.current, {
      x: -120,
      y: 100,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 text-white overflow-hidden">
      {/* Background blob */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={blob1Ref}
          className="absolute left-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/25 opacity-40 blur-[200px]"
        />
      </div>

      {/* Right Content */}
      <div className="ml-auto w-full md:w-3/5 px-10 md:px-20 py-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center md:text-left mb-14">
          Your Fitness Journey Starts{" "}
          <span className="text-orange-400">Here</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-orange-400">12+</p>
            <p className="text-sm opacity-70">Experience</p>
          </div>

          <div className="hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-orange-400">27+</p>
            <p className="text-sm opacity-70">Activities</p>
          </div>

          <div className="hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-orange-400">60+</p>
            <p className="text-sm opacity-70">Weekly Classes</p>
          </div>

          <div className="hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-orange-400">50+</p>
            <p className="text-sm opacity-70">Trainers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
