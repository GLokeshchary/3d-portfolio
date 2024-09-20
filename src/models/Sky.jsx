import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Sky = (props) => {
  const sky = useGLTF("/sky.glb");
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
