"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { View } from "@react-three/drei";
import DumbbellScene from "./DumbbellScene";
import JourneyStats from "./JourneyStats";
import Services from "./Services";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = () => {
  const heroRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useGSAP(() => {
    // Animate first blob
    gsap.to(blob1Ref.current, {
      x: 100,
      y: 150,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate second blob
    gsap.to(blob2Ref.current, {
      x: -120,
      y: -100,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // hero text
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // when hero section hits top of viewport
        end: "bottom top", // until hero section scrolls out
        scrub: true, // smooth scrubbing
      },
      delay: 1,
    });
  }, []);
  return (
    <section ref={heroRef} className="relative">
      {/* 🔥 Moving gradient patches */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={blob1Ref}
          className="absolute top-96 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/50 opacity-30 blur-[200px]"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-400/50 opacity-20 blur-[150px]"
        />
      </div>

      <View className="hero-scene pointer-events-none sticky top-20 z-20 -mt-[100vh] hidden h-screen w-full md:block">
        <DumbbellScene />
      </View>

      {/* 📌 Hero Content */}
      <div className="hero-div flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="hero-text text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Push Your Limits <br /> with{" "}
          <span className="text-orange-500">Fitness Gym</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-8">
          Transform your strength, endurance, and confidence with expert-guided
          programs designed just for you.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-xl hover:bg-neutral-800 transition">
            Learn More
          </button>
        </div>
      </div>

      <JourneyStats />

      <Services />
    </section>
  );
};

export default Hero;
