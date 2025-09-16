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

    // Disable tilt effect on mobile (width < 768px)
    if (window.innerWidth < 768) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

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
      className="flex-1 flex justify-center relative perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div
        ref={containerRef}
        className="w-full max-w-xs sm:max-w-md md:w-3/4 h-56 sm:h-72 md:h-72 rounded-3xl overflow-hidden shadow-xl transition-transform duration-200 ease-out relative"
      >
        <Image
          src={imageSrc}
          alt={heading}
          fill
          className="object-contain pointer-events-none rounded-3xl"
        />
      </div>
    </div>
  );
}
