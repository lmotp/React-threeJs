import { useEffect, useMemo, useRef } from "react";
import * as TRHEE from "three";

function CustomObject() {
  const geometryRef = useRef(null);
  const verticesCount = 10 * 3; // 10개의 삼각형, 삼각형마다 3개의 점

  const position = useMemo(() => {
    const _position = new Float32Array(verticesCount * 3); // 삼각형의 각 점의 위치 (x,y,z)

    for (let i = 0; i < verticesCount * 3; i++) {
      // Math.random() - n값으로 위치값, * n값으로 삼각형 크기 정함.
      // -0.5는 가운데에 위치함.
      _position[i] = (Math.random() - 0.5) * 3;
    }

    return _position;
  }, []);

  useEffect(() => {
    if (geometryRef.current !== null) {
      geometryRef.current.computeVertexNormals();
    }
  }, [position]);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" count={verticesCount} itemSize={3} array={position} />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={TRHEE.DoubleSide} />
    </mesh>
  );
}

export default CustomObject;
