import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Pirate = (props) => {
  const pirateRef = useRef();
  const { scene, animations } = useGLTF("/pirate.glb");

  const { actions } = useAnimations(animations, pirateRef);
  return <mesh>
    <primitive object={scene} scale={0.4} />
  </mesh>;
};

export default Pirate;
