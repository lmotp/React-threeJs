import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { StrictMode } from "react";
import * as THREE from "three";
import Experience2 from "./Experience2";

function App() {
  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6],
  };

  const created = ({ scene }) => {
    // scene.background = new THREE.Color("#ff0000");
  };

  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas shadows gl={{ antialias: true }} camera={cameraSettings} onCreated={created}>
        <Experience2 />
      </Canvas>
    </StrictMode>
  );
}

export default App;
