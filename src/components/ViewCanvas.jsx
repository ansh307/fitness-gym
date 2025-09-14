"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

import { View } from "@react-three/drei";

// Main interactive component
export function ViewCanvas() {
  const groupRef = useRef(null);

  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        camera={{ position: [-3, 1, 10], fov: 60 }}
        onCreated={({ scene }) => console.log("Canvas ready")}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
    </>
  );
}
