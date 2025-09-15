"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each service one by one on scroll
      serviceRefs.current.forEach((service) => {
        gsap.from(service, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top 80%", // when service enters viewport
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section relative flex flex-col items-center justify-center min-h-screen px-6 py-28 bg-neutral-950 text-white"
    >
      {/* 🔥 Heading */}
      <h2 className="services-heading text-4xl md:text-6xl font-extrabold  text-center tracking-tight">
        Our <span className="text-orange-500">Services</span>
      </h2>

      {/* 📌 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-72 max-w-6xl w-full">
        {/* Top-left */}
        <div
          ref={(el) => (serviceRefs.current[0] = el)}
          className="flex flex-col items-start justify-center space-y-4 w-7/12"
        >
          <h3 className="text-2xl font-semibold text-orange-500">
            Personal Training
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Get one-on-one coaching tailored to your fitness goals. Our expert
            trainers guide you every step of the way.
          </p>
        </div>

        {/* Top-right */}
        <div
          ref={(el) => (serviceRefs.current[1] = el)}
          className="flex flex-col justify-center space-y-4 ml-40"
        >
          <h3 className="text-2xl font-semibold text-orange-500">
            Group Classes
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            High-energy group workouts designed to motivate and push your limits
            in a fun environment.
          </p>
        </div>

        {/* Bottom-left */}
        <div
          ref={(el) => (serviceRefs.current[2] = el)}
          className="flex flex-col items-start justify-center space-y-4 mt-10 w-7/12"
        >
          <h3 className="text-2xl font-semibold text-orange-500">
            Nutrition Plans
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Customized meal plans created to complement your training and fuel
            your progress effectively.
          </p>
        </div>

        {/* Bottom-right */}
        <div
          ref={(el) => (serviceRefs.current[3] = el)}
          className="flex flex-col justify-center space-y-4 mt-10 ml-40"
        >
          <h3 className="text-2xl font-semibold text-orange-500">
            Online Coaching
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Can’t make it to the gym? Stay consistent with remote coaching and
            progress tracking online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
