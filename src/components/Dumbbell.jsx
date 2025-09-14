"use client";

import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF("/dumbbell/scene.gltf");
  const instances = useMemo(
    () => ({
      Cylindermetal: nodes.Cylinder_metal001_0,
      Cylindermetal1: nodes.Cylinder_metal002_0,
      CylinderMaterial: nodes.Cylinder_Material004_0,
      Circlemetal: nodes.Circle_metal_0,
      CylinderMaterial1: nodes.Cylinder002_Material001_0,
      Spiralmetal: nodes.Spiral_metal001_0,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances}>
          {children}
          <meshStandardMaterial metalness={1} roughness={0.1} />
        </context.Provider>
      )}
    </Merged>
  );
}

export function Dumbbell(props) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-135.82, -9.23, 126.59]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="50cee9df8cbd474c8f388cb6e1b0519cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "50cee9df8cbd474c8f388cb6e1b0519c.fbx" }}
          >
            <group name="RootNode" userData={{ name: "RootNode" }}>
              <group
                name="Cylinder"
                position={[-169.21, 160.04, -33.68]}
                rotation={[2.56, 0.7, -1.88]}
                scale={[100, 61.99, 61.99]}
                userData={{ name: "Cylinder" }}
              >
                <instances.Cylindermetal
                  name="Cylinder_metal001_0"
                  userData={{ name: "Cylinder_metal.001_0" }}
                />
                <instances.Cylindermetal1
                  name="Cylinder_metal002_0"
                  userData={{ name: "Cylinder_metal.002_0" }}
                />
                <instances.CylinderMaterial
                  name="Cylinder_Material004_0"
                  userData={{ name: "Cylinder_Material.004_0" }}
                />
              </group>
              <group
                name="Circle"
                position={[-169.36, 160.13, -33.54]}
                rotation={[2.56, 0.7, -1.88]}
                scale={100}
                userData={{ name: "Circle" }}
              >
                <instances.Circlemetal
                  name="Circle_metal_0"
                  userData={{ name: "Circle_metal_0" }}
                />
              </group>
              <group
                name="Cylinder002"
                position={[-169.36, 160.13, -33.54]}
                rotation={[-2.36, -0.23, -2.3]}
                scale={100}
                userData={{ name: "Cylinder.002" }}
              >
                <instances.CylinderMaterial1
                  name="Cylinder002_Material001_0"
                  userData={{ name: "Cylinder.002_Material.001_0" }}
                />
              </group>
              <group
                name="Spiral"
                position={[-7.5, 54.68, -192.25]}
                rotation={[2.56, 0.7, -1.88]}
                scale={[34.99, 31.77, 31.77]}
                userData={{ name: "Spiral" }}
              >
                <instances.Spiralmetal
                  name="Spiral_metal001_0"
                  userData={{ name: "Spiral_metal.001_0" }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dumbbell/scene.gltf");
