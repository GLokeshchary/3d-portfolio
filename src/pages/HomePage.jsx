import React, { Suspense, useEffect, useState, useRef } from "react";
import "./HomePage.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader/Loader";
import { WaterWave } from "../models/WaterWave";
import { Sky } from "../models/Sky";
import Ship from "../models/Ship";
import CameraController from "../components/CameraController";
import { Html } from "@react-three/drei";
import Stage from "../components/Stage/Stage";
import { FaLocationDot } from "react-icons/fa6";
import got from "/got.mp3";

export const HomePage = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [stages, setStages] = useState(false);
  const [stageZoomIn, setStageZoomIn] = useState(false);
  const [stageIntro, setStageIntro] = useState(false);
  const [movingShip, setMovingShip] = useState(false);
  const [zoomIn, setzoomIn] = useState(false);
  const [sideZoomIn, setSideZoomIn] = useState(false);
  const [resetCamera, setResetCamera] = useState(false);
  const [shipPosition, setShipPosition] = useState([-2.2, -1.6, 0.1]);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  //Markers Position
  const [stagePositions, setStagePositions] = useState([
    {
      position: [shipPosition[0] + 1, shipPosition[1] + 0.8, 0],
      link: "about",
      tag: "Meet Captain",
    },
    {
      position: [shipPosition[0] + 2.5, shipPosition[1] + 0.6, 0],
      link: "projects",
      tag: "Treasure Trove",
    },
  ]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStagePositions([
          {
            position: [shipPosition[0] + 2.5, shipPosition[1] + 0.8, 0],
            link: "about",
            tag: "Meet Captain",
          },
          {
            position: [shipPosition[0] + 1.5, shipPosition[1] + 0.8, 0],
            link: "projects",
            tag: "Treasure Trove",
          },
        ]);
      } else {
        setStagePositions([
          {
            position: [shipPosition[0] + 1, shipPosition[1] + 0.8, 0],
            link: "about",
            tag: "Meet the Captain",
          },
          {
            position: [shipPosition[0] + 2.5, shipPosition[1] + 0.6, 0],
            link: "projects",
            tag: "Treasure Trove",
          },
        ]);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [shipPosition]);

  //Music Controls
  const audioRef = useRef(new Audio(got));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  //ocean position
  let wavePosition = [0, -2, 0];

  //Adjusting Intro and stage positions
  const adjustIntroInfoPosition = () => {
    let introPosition, stageIntroPosition;
    if (window.innerWidth < 768) {
      introPosition = [0, 0, -1.1]; // moved up and closer
      stageIntroPosition = [-1.3, 0.9, 0];
    } else {
      introPosition = [0, 0, -2]; // centered for desktop
      stageIntroPosition = [-2, 1.2, 1];
    }
    return [introPosition, stageIntroPosition];
  };

  const [introPosition, stageIntroPosition] = adjustIntroInfoPosition();

  //Music render
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

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
        <Suspense fallback={<Loader flag={"main"} />}>
          <directionalLight position={[1, -8, 0]} intensity={2} />
          <ambientLight intensity={1.5} />
          <Sky />
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
                  <span className="status">I'm Full Stack Developer.</span>
                </div>
                <div className="next-button">
                  <button onClick={() => handleNextStageEvent()}>
                    {" "}
                    Set sail to discover more
                  </button>
                </div>
              </div>
            </Html>
          )}
          {stages &&
            stagePositions.map((stage, index) => {
              return (
                <Stage
                  position={stage.position}
                  key={index}
                  tag={stage.tag}
                  stageZoomIn={stageZoomIn}
                  link={stage.link}
                />
              );
            })}
          {stageIntro && (
            <Html position={stageIntroPosition}>
              <div className="stage-intro-container">
                <div className="">
                  Explore these <FaLocationDot color="gold" /> markers to
                  uncover hidden treasures.
                </div>
                <div className="ok-button">
                  <button onClick={() => handleZoomin()}>OK</button>
                </div>
              </div>
            </Html>
          )}
          <WaterWave position={wavePosition} />
        </Suspense>
      </Canvas>
      <div
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className="speaker"
      >
        {!isPlayingMusic ? <HiMiniSpeakerXMark /> : <HiMiniSpeakerWave />}
      </div>
    </section>
  );
};
