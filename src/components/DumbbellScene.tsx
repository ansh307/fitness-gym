"use client";

import { Instances, Dumbbell } from "@/components/Dumbbell";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

const DumbbellScene = () => {
  const dumbbellRef = useRef<Group>(null);

  useGSAP(() => {
    if (!dumbbellRef.current) return;

    // Position animation on scroll
    gsap.fromTo(
      dumbbellRef.current.position,
      { x: 5.4, y: 2, z: -8 }, // start lower
      {
        x: 0,
        y: -4,
        z: -10, // end upright on the right side
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-div",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
          immediateRender: false,
        },
      }
    );

    // Rotation animation on scroll
    gsap.fromTo(
      dumbbellRef.current.rotation,
      {
        x: 0,
        y: Math.PI / 4 - 0.34,
        z: 0.32, // upright angle
      }, // flat
      {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-div",
          start: "top top",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      }
    );

    gsap.fromTo(
      dumbbellRef.current.position,
      {
        x: 0,
        y: -4,
        z: -10,
      },
      {
        x: 4,
        y: -6,
        z: -8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          end: "30% 20%",
          scrub: true,
          immediateRender: false,
        },
      }
    );

    gsap.fromTo(
      dumbbellRef.current.rotation,
      {
        x: Math.PI / 2,
        y: 0,
        z: 0,
      }, // flat
      {
        x: -0.5,
        y: -1,
        z: -0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          end: "30% 20%",
          scrub: true,
          immediateRender: false,
        },
      }
    );
  }, []);

  return (
    <group>
      <OrbitControls />
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
