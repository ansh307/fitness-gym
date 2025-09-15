"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function JourneyStats() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useGSAP(() => {
    // Timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
      },
    });

    // Animate heading
    gsap.from(".journey-heading", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".journey-heading",
        start: "top 80%",
      },
    });

    // Animate all numbers in parallel
    numberRefs.current.forEach((el) => {
      const finalValue = parseInt(el.dataset.value, 10);
      const counter = { val: 0 };

      tl.to(
        counter,
        {
          val: finalValue,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.floor(counter.val) + "+";
          },
        },
        "<" // all run together
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center  text-white overflow-hidden z-20 "
    >
      {/* Right Content */}
      <div className="ml-auto w-full md:w-4/6 px-10 md:px-20">
        {/* Heading */}
        <h2 className="journey-heading text-3xl md:text-6xl font-extrabold tracking-tight text-center md:text-left mb-20">
          Your Fitness Journey Starts{" "}
          <span className="text-orange-400">Here</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="hover:scale-105 transition-transform">
            <p
              ref={(el) => (numberRefs.current[0] = el)}
              data-value="12"
              className="text-6xl font-bold text-orange-400"
            >
              0+
            </p>
            <p className="text-sm opacity-70">Experience</p>
          </div>

          <div className="hover:scale-105 transition-transform">
            <p
              ref={(el) => (numberRefs.current[1] = el)}
              data-value="27"
              className="text-6xl font-bold text-orange-400"
            >
              0+
            </p>
            <p className="text-sm opacity-70">Activities</p>
          </div>

          <div className="hover:scale-105 transition-transform">
            <p
              ref={(el) => (numberRefs.current[2] = el)}
              data-value="60"
              className="text-6xl font-bold text-orange-400"
            >
              0+
            </p>
            <p className="text-sm opacity-70">Weekly Classes</p>
          </div>

          <div className="hover:scale-105 transition-transform">
            <p
              ref={(el) => (numberRefs.current[3] = el)}
              data-value="50"
              className="text-6xl font-bold text-orange-400"
            >
              0+
            </p>
            <p className="text-sm opacity-70">Trainers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
