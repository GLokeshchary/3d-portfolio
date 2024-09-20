import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
export const WaterWave = (props) => {
  const waveRef = useRef();
  const { scene, animations } = useGLTF("/freeocean.glb");
  const { actions } = useAnimations(animations, waveRef);
  useEffect(() => {
    actions["Object_0"].play();
  });
  return (
    <mesh {...props} ref={waveRef}>
      <primitive object={scene} />
    </mesh>
  );
};
