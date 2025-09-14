"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = ({
  alignment = "left",
  imageSrc,
  heading,
  paragraph,
  bg = "bg-neutral-950", // default dark theme background
}) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: alignment === "right" ? 80 : -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [alignment]);

  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-12 py-20 px-6 md:px-16 rounded-2xl shadow-xl ${bg} ${
        alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image Section */}
      <div ref={imageRef} className="flex-1 flex justify-center">
        <div className="w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <Image
            src={imageSrc}
            alt={heading}
            width={800}
            height={500}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Text Section */}
      <div ref={textRef} className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          {heading}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default Feature;
