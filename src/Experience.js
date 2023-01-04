import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { button, useControls } from "leva";
import { useRef } from "react";
import CustomObject from "./CustomObject";

function Experience() {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);
  const groupRef = useRef(null);

  const { position, color, visible } = useControls("sphere", {
    position: { value: { x: -2, y: 0 }, min: -4, max: 4, step: 0.01, joystick: "invertY" },
    color: "#ff0000",
    visible: true,
    myInterval: { min: 0, max: 10, value: [4, 5] },
    clickMe: button(() => {
      console.log("0k");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const { scale } = useControls("cube", {
    scale: { value: 1.5, step: 0.01, min: 0, max: 5 },
  });

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        {/* Sphere Mesh */}
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
          scale={100}
          fixed={true}
        >
          <mesh ref={sphereRef} position={[position.x, position.y, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
            <Html position={[1, 1, 0]} wrapperClass="label" occlude={[sphereRef, cubeRef]} center>
              That's a sphere 👍
            </Html>
          </mesh>
        </PivotControls>

        {/* Cube Mesh */}
        <mesh position-x={2} ref={cubeRef} scale={scale}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cubeRef} mode="translate" />
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={1} mirror={0.75} color="greenyellow" />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F
        </Text>
      </Float>
      {/* <CustomObject /> */}
    </>
  );
}

export default Experience;
