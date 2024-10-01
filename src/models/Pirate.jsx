import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Pirate = ({ currentAnimation, ...props }) => {
  const pirateRef = useRef();
  const { scene, animations } = useGLTF("/pirate.glb");

  const { actions } = useAnimations(animations, pirateRef);
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);
  return (
    <mesh ref={pirateRef}>
      <primitive object={scene} scale={1.5} />
    </mesh>
  );
};

export default Pirate;
