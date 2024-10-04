import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyModel from"../myassets/3d/sky.glb";
export const Sky = (props) => {
  const sky = useGLTF(skyModel);
  const skyRef = useRef();
  useFrame((_,delta)=>{
    skyRef.current.rotation.y+=0.015*delta;
  })
  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
