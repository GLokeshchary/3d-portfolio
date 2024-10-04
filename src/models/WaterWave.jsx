import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import waterModel from "../myassets/3d/freeocean.glb";
export const WaterWave = (props) => {
  const waveRef = useRef();
  const { scene, animations } = useGLTF(waterModel);
  const { actions } = useAnimations(animations, waveRef);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({
        color: "#3ABEF9",
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.8,
      });
    }
  });

  useEffect(() => {
    actions["Object_0"].play();
  });
  return (
    <mesh {...props} ref={waveRef}>
      <primitive object={scene} />
    </mesh>
  );
};
