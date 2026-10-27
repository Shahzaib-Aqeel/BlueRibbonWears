'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

function DetailedHumanModel() {
  // Loads a detailed 3D anatomical file from your public folder (/public/models/anatomy.glb)
  const { scene } = useGLTF('/models/anatomy.glb');
  return <primitive object={scene} scale={1.2} />;
}

export default function App3D() {
  return (
    <div className="w-full h-screen bg-gray-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#030712']} />
        <Suspense fallback={null}>
          {/* Stage automatically adds professional studio lighting and shadows */}
          <Stage environment="city" intensity={0.5}>
            <DetailedHumanModel />
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/anatomy.glb');