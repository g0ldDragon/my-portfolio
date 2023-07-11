import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Mesh,
  MeshBasicMaterial,
  IcosahedronGeometry,
  Color,
  Vector3,
} from "three";

const colors = [
  0xffbe0b,
  0xfb5607,
  0xff006e,
  0x8338ec,
  0x3a86ff,
  0x06d6a0,
];

const IcosahedronGlobe: React.FC = () => {
  const meshRef = useRef<Mesh>();
  const { camera } = useThree();
  const originalScale = useRef<number>(1);
  const originalPositions = useRef<number[]>([]);

  // Pulsating and spinning effect
  useFrame((state, delta) => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      mesh.rotation.x += 1 * delta; // Adjust the rotation speed here
      mesh.rotation.y += 3 * delta;
      const scale = 1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.9; // Adjust the pulsation speed and intensity here
      mesh.scale.set(scale, scale, scale);
    }
  });

  // Mouse interaction
  const handlePointerOver = () => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      const material = mesh.material as MeshBasicMaterial;
      material.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
      originalScale.current = mesh.scale.x;

      if (originalPositions.current.length === 0) {
        const geometry = mesh.geometry as IcosahedronGeometry;
        const positionAttribute = geometry.getAttribute("position");
        const positions = positionAttribute.array as number[];
        originalPositions.current = [...positions];
      }

      const geometry = mesh.geometry as IcosahedronGeometry;
      const positionAttribute = geometry.getAttribute("position");
      const positions = positionAttribute.array as number[];

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions.current[i];
        const y = originalPositions.current[i + 1];
        const z = originalPositions.current[i + 2];

        const displacement = new Vector3(
          Math.random() * 0.2 - 0.1, // Adjust the displacement range here
          Math.random() * 0.2 - 0.1,
          Math.random() * 0.2 - 0.1
        );

        positions[i] = x + displacement.x;
        positions[i + 1] = y + displacement.y;
        positions[i + 2] = z + displacement.z;
      }

      positionAttribute.needsUpdate = true; // Notify Three.js that the positions have been modified
    }
  };

  const handlePointerOut = () => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      const material = mesh.material as MeshBasicMaterial;
      material.color.setHex(0xffffff); // Set the default color on mouse leave

      const geometry = mesh.geometry as IcosahedronGeometry;
      const positionAttribute = geometry.getAttribute("position");
      const positions = positionAttribute.array as number[];

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions.current[i];
        const y = originalPositions.current[i + 1];
        const z = originalPositions.current[i + 2];

        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
      }

      positionAttribute.needsUpdate = true; // Notify Three.js that the positions have been modified
    }
  };

  return (
    <mesh
      ref={meshRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <icosahedronGeometry args={[1, 0]} attach="geometry" />
      <meshBasicMaterial
        color={new Color(0xffffff)}
        wireframe={true}
        opacity={0.8}
        transparent={true}
      />
    </mesh>
  );
};

const IcosahedronGlobeWrapper: React.FC = () => {
  return (
    <div
      style={{
        width: 550,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <IcosahedronGlobe />
      </Canvas>
    </div>
  );
};

export default IcosahedronGlobeWrapper;
