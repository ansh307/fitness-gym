"use client";

import { Instances, Dumbbell } from "@/components/Dumbbell";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Group } from "three";

import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const DumbbellScene = () => {
  const dumbbellRef = useRef<Group>(null);

  const isMobile = useIsMobile();

  useGSAP(() => {
    if (!dumbbellRef.current || isMobile) return;

    // 🎯 HERO section animation (intro float)
    gsap.fromTo(
      dumbbellRef.current.position,
      { x: -10, y: 2, z: -8 },
      {
        x: -11,
        y: -2,
        z: -10,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".hero-div",
          start: "top top",
          end: "bottom 20%",
          scrub: 1,
          immediateRender: false,
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      dumbbellRef.current.rotation,
      { x: 0, y: Math.PI / 4 - 1.5, z: 0.32 + 1.5 },
      {
        x: Math.PI / 2 - 1,
        y: -2.5,
        z: 1.5,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".hero-div",
          start: "top top",
          end: "bottom 20%",
          scrub: 1,
          immediateRender: false,
          invalidateOnRefresh: true,
        },
      }
    );

    // 🎯 SERVICES section animation (smooth continuation after hero)
    gsap.fromTo(
      dumbbellRef.current.position,
      { x: -11, y: -2, z: -10 }, // end of hero
      {
        x: 4,
        y: -4,
        z: -8,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom", // starts animating as services enters
          end: "50% 50%", // ends when services leaves viewport
          scrub: 1,
          immediateRender: false,
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      dumbbellRef.current.rotation,
      { x: Math.PI / 2 - 1, y: -2.5, z: 1.5 }, // end of hero
      {
        x: -0.5,
        y: -1,
        z: -0.5,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom",
          end: "50% 50%",
          scrub: 1,
          immediateRender: false,
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

  return (
    <group>
      {/* <OrbitControls /> */}
      <Environment files={"/dumbbell/hdr/warehouse-256.hdr"} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 10]} intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      <Instances>
        <group ref={dumbbellRef} scale={[0.015, 0.015, 0.015]}>
          <Dumbbell />
        </group>
      </Instances>
    </group>
  );
};

export default DumbbellScene;
