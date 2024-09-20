import React, { Suspense, useEffect, useState } from "react";
import "./HomePage.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Loader from "../components/Loader/Loader";
import { WaterWave } from "../models/WaterWave";
import { Sky } from "../models/Sky";
import LightHouse from "../models/LightHouse";
import Ship from "../models/Ship";
function CameraController({ zoomIn, sideZoomIn }) {
  const { camera } = useThree();

  useFrame(() => {
    if (zoomIn) {
      camera.position.set(0, 0, -1.4); //4.2, -0.4, -0.3)
      camera.lookAt(0, 0, 0);
    } else if (sideZoomIn) {
      camera.position.lerp({ x: -3, y: 0.4, z: -0.2 }, 0.005);
      camera.lookAt(0, 0, 0);
    } else {
      camera.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
      camera.lookAt(0, 0, 0);
    }
  });
  return null;
}

export const HomePage = () => {
  const [movingShip, setMovingShip] = useState(false);
  const [zoomIn, setzoomIn] = useState(false);
  const [sideZoomIn, setSideZoomIn] = useState(false);
  const shipposition = [-3, -1.2, 0.1];
  useEffect(() => {
    setMovingShip(true)
    setzoomIn(true);
    setTimeout(() => {
      setzoomIn(false);
      setSideZoomIn(true);
    }, 9000);
    const moveShip=setTimeout(()=>{
      setMovingShip(false);
    },10000);

    return()=>{
      clearTimeout(moveShip);
    }
  }, []);

  return (
    <section className="home-container">
      <Canvas
        style={{
          width: "100%",
          height: "100vh",
        }}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* <OrbitControls enableDamping enableRotate/> */}
          <directionalLight
            position={[1, -8, 5]}
            color={"#60c0ff"}
            intensity={1}
          />
          <ambientLight intensity={1.5} />
          <Sky />
          <LightHouse position={[-7.5, -0.6, 0]} />
          <Ship movingShip={movingShip} position={shipposition} />
          <CameraController zoomIn={zoomIn} sideZoomIn={sideZoomIn} />
          <WaterWave position={[1, -8, 5]} />
        </Suspense>
      </Canvas>
    </section>
  );
};
