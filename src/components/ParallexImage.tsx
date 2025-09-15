"use client";

import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  imageSrc: string;
  bgSrc: string;
  heading: string;
}

export default function ParallaxImage({
  imageSrc,
  heading,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X inside container
    const y = e.clientY - rect.top; // cursor Y inside container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // tilt values
    const rotateX = ((y - centerY) / centerY) * 8; // max tilt 8deg
    const rotateY = ((x - centerX) / centerX) * -8;

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTransform = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div
      className="flex-1 flex justify-center relative group perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div
        ref={containerRef}
        className="w-3/4 h-80 rounded-4xl overflow-hidden shadow-xl transition-transform duration-200 ease-out relative"
      >
        {/* Foreground cutout */}
        <Image
          src={imageSrc}
          alt={heading}
          fill
          className="object-contain  pointer-events-none rounded-4xl "
        />
      </div>
    </div>
  );
}
