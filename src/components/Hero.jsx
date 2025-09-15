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
  const blob3Ref = useRef(null);
  const blob4Ref = useRef(null);

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

    gsap.to(blob3Ref.current, {
      x: -120,
      y: 100,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob4Ref.current, {
      x: -120,
      y: 100,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const tl = gsap.timeline();

    tl.from(".hero-main", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).from(
      ".hero-subtext",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    ); // start 0.4s before main finishes

    tl.add("buttons")
      .to(
        ".button-get-started",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "buttons"
      )
      .to(
        ".button-learn-more",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "buttons"
      );
  }, []);
  return (
    <section ref={heroRef} className="relative">
      {/* 🔥 Moving gradient patches */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div
          ref={blob1Ref}
          className="absolute top-96 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/15 opacity-30 blur-[200px]"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-400/15 opacity-20 blur-[150px]"
        />

        <div
          ref={blob3Ref}
          className="absolute top-3/5 -left-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 opacity-40 blur-[200px]"
        />

        <div
          ref={blob4Ref}
          className="absolute top-2/5 -right-40 w-[600px] h-[600px] rounded-full bg-orange-400/10 opacity-40 blur-[200px]"
        />
      </div>

      <View className="hero-scene pointer-events-none sticky top-20 z-10 -mt-[100vh]  hidden h-screen w-full md:block">
        <DumbbellScene />
      </View>

      {/* 📌 Hero Content */}
      <div className="hero-div relative z-40 flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="hero-main text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Push Your Limits <br /> with{" "}
          <span className="text-orange-500">Fitness Gym</span>
        </h1>
        <p className="hero-subtext text-lg md:text-xl text-neutral-300 max-w-2xl mb-8">
          Transform your strength, endurance, and confidence with expert-guided
          programs designed just for you.
        </p>
        <div className="flex gap-4">
          <button
            className="button-get-started px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition  opacity-0 -translate-x-24"
            onClick={() => console.log("Get Started")}
          >
            Get Started
          </button>
          <button
            className="button-learn-more px-6 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-xl hover:bg-neutral-800 transition opacity-0 translate-x-24"
            onClick={() => console.log("learn more")}
          >
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
