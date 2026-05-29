'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';

interface MousePosition {
  x: number;
  y: number;
}

function Kangaroo({
  mousePos,
}: {
  mousePos: MousePosition;
}) {
  const { scene } = useGLTF(
    '/tiny_planet_friends_3d-kangaroo-4186.glb'
  );

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Floating
    groupRef.current.position.y =
      Math.sin(t * 1.3) * 0.045;

    // Gentle idle rotation
    const idleRotation =
      Math.sin(t * 0.5) * 0.04;

    // Mouse tracking
    const targetX =
      mousePos.y * 0.12;

    const targetY =
      mousePos.x * 0.22 + idleRotation;

    groupRef.current.rotation.x +=
      (targetX -
        groupRef.current.rotation.x) *
      0.06;

    groupRef.current.rotation.y +=
      (targetY -
        groupRef.current.rotation.y) *
      0.06;
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      scale={1.18}
    >
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshBasicMaterial
        color="#FF9D5C"
        wireframe
      />
    </mesh>
  );
}

export default function ModelViewer() {
  const [mousePos, setMousePos] =
    useState({
      x: 0,
      y: 0,
    });

  const [cameraZ, setCameraZ] =
    useState(2.2);

  useEffect(() => {
    const handleMove = (
      e: MouseEvent
    ) => {
      setMousePos({
        x:
          (e.clientX /
            window.innerWidth) *
            2 -
          1,
        y:
          -(
            e.clientY /
            window.innerHeight
          ) *
            2 +
          1,
      });
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCameraZ(3.1);
      } else {
        setCameraZ(2.2);
      }
    };

    handleResize();

    window.addEventListener(
      'mousemove',
      handleMove
    );

    window.addEventListener(
      'resize',
      handleResize
    );

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMove
      );

      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  return (
    <Canvas
      shadows
      className="absolute inset-0 h-full w-full"
      gl={{
        antialias: true,
        alpha: true,
      }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0.6, cameraZ]}
        fov={42}
      />

      {/* Ambient */}
      <ambientLight
        intensity={1.1}
      />

      {/* Main warm light */}
      <directionalLight
        position={[5, 6, 4]}
        intensity={3.5}
        color="#FF9D5C"
        castShadow
      />

      {/* Purple rim */}
      <directionalLight
        position={[
          -6,
          2,
          -4,
        ]}
        intensity={3}
        color="#c084fc"
      />

      {/* Cyan fill */}
      <pointLight
        position={[
          -3,
          2,
          2,
        ]}
        intensity={1.5}
        color="#2dd4bf"
      />

      {/* Front soft light */}
      <pointLight
        position={[
          0,
          -1,
          3,
        ]}
        intensity={1.2}
        color="#fff7ed"
      />

      {/* Orange glow */}
      <pointLight
        position={[
          0,
          1,
          1,
        ]}
        intensity={1.5}
        color="#fb923c"
      />

      <Suspense fallback={<Loader />}>
        <Kangaroo
          mousePos={mousePos}
        />
      </Suspense>

      <ContactShadows
        position={[
          0,
          -0.55,
          0,
        ]}
        opacity={0.45}
        scale={5}
        blur={2.8}
        far={2}
      />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        target={[
          0,
          0.55,
          0,
        ]}
      />
    </Canvas>
  );
}

useGLTF.preload(
  '/tiny_planet_friends_3d-kangaroo-4186.glb'
);