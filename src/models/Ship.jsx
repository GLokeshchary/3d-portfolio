import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Ship = ({movingShip, ...props}) => {
  const shipRef = useRef();
  const { scene, animations } = useGLTF("/ship.glb");
  const { actions } = useAnimations(animations, shipRef);

  useEffect(() => {
    actions["Take 001"].play();
  });
  useFrame(() => {
    if (shipRef.current) {
      if(movingShip){
        shipRef.current.position.x += 0.01;
      }
      
    }
  });
  return (
    <mesh ref={shipRef} {...props}>
      <primitive object={scene} scale={2.1} rotation={[0, Math.PI / 2, 0]} />
    </mesh>
  );
};

export default Ship;
