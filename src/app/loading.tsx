"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-950 z-[9999]">
      <div className="relative w-16 h-16">
        {/* Outer rotating circle */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-red-500 animate-spin"></div>

        {/* Inner circle for accent */}
        <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-orange-400 border-l-red-400 animate-spin-slow"></div>

        {/* Center dot */}
        <div className="absolute inset-[40%] rounded-full bg-orange-500"></div>
      </div>
    </div>
  );
}
