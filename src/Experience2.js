import {
  softShadows,
  RandomizedLight,
  AccumulativeShadows,
  ContactShadows,
  OrbitControls,
  useHelper,
  BakeShadows,
  Sky,
  Lightformer,
  Environment,
  Stage,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls, button } from 'leva';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import CustomObject from './CustomObject';

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

function Experience() {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);
  const groupRef = useRef(null);
  const directionalLightRef = useRef(null);
  // const pointLightRef = useRef(null);

  // const { position } = useControls('sphere', {
  //   position: { value: -2, min: -4, max: 4, step: 0.01, joystick: 'invertY' },
  // });

  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#1d8f75',
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
    envMapIntensity: { value: 7, min: 0, max: 12 },
    envMapHeight: { value: 7, min: 0, max: 100 },
    envMapRadius: { value: 28, min: 10, max: 1000 },
    envMapScale: { value: 100, min: 10, max: 1000 },
  });

  //적용할 Ref, THREE.js에 있는 helper, helper 크기, 색상
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
  // useHelper(pointLightRef, THREE.PointLightHelper, 1, 'red');

  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(time) * 8;
    // state.camera.position.z = Math.cos(time) * 8;
    // state.camera.lookAt(0, 0, 0);

    // cubeRef.current.position.x = Math.sin(time) + 2;
    cubeRef.current.rotation.y += delta * 0.2;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* <Environment
        background
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      > */}
      {/* <Lightformer position-z={-5} scale={10} color="red" intensity={10} form="ring" />
        <color args={['#000000']} attach="background" /> */}
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[2, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}

      {/* <BakeShadows /> */}

      {/* <color args={['ivory']} attach="background" /> */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]} bias={0.001} />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        blur={blur}
        color={color}
        opacity={opacity}
        frames={1}
      /> */}

      {/* <directionalLight
        ref={directionalLightRef}
        castShadow
        position={sunPosition}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <pointLight ref={pointLightRef} castShadow position-x={[position} /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <Stage contactShadow={{ opacity: 0.2, blur: 3 }} environment="sunset" preset="portrait" intensity={2}>
        <group ref={groupRef}>
          <mesh castShadow ref={sphereRef} position-y={1} position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color={'orange'} envMapIntensity={envMapIntensity} />
          </mesh>

          <mesh castShadow position-y={1} position-x={2} ref={cubeRef} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
          </mesh>
        </group>
      </Stage>

      {/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity} />
      </mesh> */}

      {/* <CustomObject /> */}
    </>
  );
}

export default Experience;
