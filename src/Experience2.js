import { OrbitControls, useHelper, BakeShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls, button } from "leva";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import CustomObject from "./CustomObject";

function Experience() {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);
  const groupRef = useRef(null);
  const directionalLightRef = useRef(null);

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    cubeRef.current.rotation.y += delta * 0.2;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* <color args={["ivory"]} attach="background" /> */}

      <BakeShadows />
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight ref={directionalLightRef} castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh castShadow ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>

        <mesh castShadow position-x={2} ref={cubeRef} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      {/* <CustomObject /> */}
    </>
  );
}

export default Experience;
