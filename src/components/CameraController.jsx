import { useFrame, useThree } from "@react-three/fiber";

function CameraController({ zoomIn, sideZoomIn, resetCamera, stageZoomIn }) {
  const { camera } = useThree();

  useFrame(() => {
    if (resetCamera) {
      camera.position.lerp({ x: 0, y: 0, z: 4 }, 0.005);
      camera.lookAt(0, 0, 0);
    } else if (zoomIn) {
      camera.position.set(0, 0, -1.4); // Zoom-in position
      camera.lookAt(0, 0, 0);
    } else if (sideZoomIn) {
      camera.position.lerp({ x: -3, y: 0.4, z: -0.2 }, 0.005); // Side zoom-in position
      camera.lookAt(0, 0, 0);
    } else if (stageZoomIn) {
      camera.position.lerp({ x: 0, y: 0, z: 2 },0.005);
      camera.lookAt(0, 0, 0);
    }
  });
  return null;
}

export default CameraController;
