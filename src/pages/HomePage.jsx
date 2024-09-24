import React, { Suspense, useEffect, useState } from "react";
import "./HomePage.css";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../components/Loader/Loader";
import { WaterWave } from "../models/WaterWave";
import { Sky } from "../models/Sky";
import LightHouse from "../models/LightHouse";
import Ship from "../models/Ship";
import CameraController from "../components/CameraController";
import { Html, OrbitControls } from "@react-three/drei";
import Stage from "../components/Stage/Stage";
import { FaLocationDot } from "react-icons/fa6";
export const HomePage = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [stages, setStages] = useState(false);
  const [stageZoomIn, setStageZoomIn] = useState(false);
  const [stageIntro, setStageIntro] = useState(false);
  const [movingShip, setMovingShip] = useState(false);
  const [zoomIn, setzoomIn] = useState(false);
  const [sideZoomIn, setSideZoomIn] = useState(false);
  const [resetCamera, setResetCamera] = useState(false);
  const [shipPosition, setShipPosition] = useState([-3, -1, 0.1]);

  const stagePostions = [
    [1, 0, 0],
    [2, 0, 0],
    [-1, 0, 0],
  ];

  useEffect(() => {
    setMovingShip(true);
    setzoomIn(true);
    setTimeout(() => {
      setzoomIn(false);
      setSideZoomIn(true);
    }, 9000);
    const moveShip = setTimeout(() => {
      setMovingShip(false);
    }, 10000);
    const intro = setTimeout(() => {
      setShowIntro(true);
    }, 12000);

    return () => {
      clearTimeout(moveShip);
      clearTimeout(intro);
    };
  }, []);

  const adjustIntroInfoPosition = () => {
    let introPosition;
    if (window.innerWidth < 768) {
      introPosition = [0, -1, -1.02];
    } else {
      introPosition = [0, -0.5, -4];
    }
    return [introPosition];
  };
  const [introPosition] = adjustIntroInfoPosition();
  const handleNextStageEvent = () => {
    setShowIntro(false);
    setResetCamera(true);
    setSideZoomIn(false);
    setMovingShip(false);
    setzoomIn(false);
    setStages(true);
    setStageIntro(true);
  };
  const handleZoomin = () => {
    setStageIntro(false);
    setResetCamera(false);
    setStageZoomIn(true);
  };
  return (
    <section className="home-container">
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          {/* <OrbitControls enableDamping enableRotate /> */}
          <directionalLight position={[1, -8, 0]} intensity={2} />
          <ambientLight intensity={1.5} />
          <Sky />
          <LightHouse position={[-7.5, -0.6, 0]} />
          <Ship movingShip={movingShip} position={shipPosition} />
          <CameraController
            zoomIn={zoomIn}
            sideZoomIn={sideZoomIn}
            resetCamera={resetCamera}
            stageZoomIn={stageZoomIn}
          />
          {showIntro && (
            <Html className="intro-container" position={introPosition}>
              <div className="into">
                <div className="inner-intro">
                  <span className="name">Hi , My Name Is Lokesh Chary.</span>
                  <span className="status">I'm Software Engineer.</span>
                </div>
                <div className="next-button">
                  <span onClick={() => handleNextStageEvent()}>
                    {" "}
                    Set sail to discover more
                  </span>
                </div>
              </div>
            </Html>
          )}
          {stages &&
            stagePostions.map((stage, index) => {
              return <Stage position={stage} key={index} />;
            })}
          {stageIntro && (
            <Html position={[-2, -1.2, 1]}>
              <div className="stage-intro-container">
                <div className="">
                  Explore these <FaLocationDot color="gold" /> markers to
                  uncover hidden treasures.
                </div>
                <div className="ok-button">
                  <span onClick={() => handleZoomin()}>OK</span>
                </div>
              </div>
            </Html>
          )}
          <WaterWave position={[1, -8, 0]} />
        </Suspense>
      </Canvas>
    </section>
  );
};
