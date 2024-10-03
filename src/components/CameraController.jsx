import { useFrame, useThree } from "@react-three/fiber";

function CameraController({ zoomIn, sideZoomIn, resetCamera, stageZoomIn }) {
  const { camera } = useThree();

  useFrame(() => {
    if (resetCamera) {
      camera.position.lerp({ x: 0, y: 0, z: 4 }, 0.005);
      camera.lookAt(0, 0, 0);
    } else if (zoomIn) {
      if (window.innerWidth < 768) {
        camera.position.set(0, -0.4, -2.6); // Zoom-in position
        camera.lookAt(0, 0, 0);
      } else {
        camera.position.set(0, -0.4, -2.4); // Zoom-in position
        camera.lookAt(0, 0, 0);
      }
    } else if (sideZoomIn) {
      if (window.innerWidth < 768) {
        camera.position.lerp({ x: -3, y: 0.4, z: -0.4 }, 0.005); // Side zoom-in position
        camera.lookAt(0, 0, 0);
      } else {
        camera.position.lerp({ x: -3, y: 0.4, z: -0.2 }, 0.005); // Side zoom-in position
        camera.lookAt(0, 0, 0);
      }
    } else if (stageZoomIn) {
      if (window.innerWidth) {
        camera.position.lerp({ x: -0.3, y: 0.5, z: 2.5 }, 0.005);
        camera.lookAt(0, 0, 0);
      } else {
        camera.position.lerp({ x: -0.3, y: 0.5, z: 2.2 }, 0.005);
        camera.lookAt(0, 0, 0);
      }
    }
  });
  return null;
}

export default CameraController;
