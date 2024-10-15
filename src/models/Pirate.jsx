import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import pirateModel from "/3d/pirate.glb"


const Pirate = ({ currentAnimation, ...props }) => {
  const pirateRef = useRef();
  const { scene, animations } = useGLTF(pirateModel);
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
