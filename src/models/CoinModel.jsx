import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader/Loader";
import { useRef } from "react";
import {
  useGLTF,
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const GoldCoin = () => {
  const goldCoinRef = useRef();
  const [texture] = useTexture(["/download.png"]);
  const { scene } = useGLTF("/gold_coin.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
      child.material.map.repeat.set(1, 1); // Scale the texture down
      child.material.map.center.set(0, 0); // Center the texture
    }
  });
  return (
    <mesh ref={goldCoinRef}>
      <primitive object={scene} scale={1.5} rotation={[Math.PI / 2, 0, 0]} />
    </mesh>
  );
};

const CoinModel = () => {
  return (
    <section>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} enableRotate />
          <directionalLight intensity={10} />
          <ambientLight intensity={10} />
          <GoldCoin />
        </Suspense>
        <Preload all />
      </Canvas>
    </section>
  );
};

export default CoinModel;
