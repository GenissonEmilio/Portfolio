"use client";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { NotebookModel } from './NotebookModel'

export default function NotebookScene() {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
        <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <NotebookModel />
        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
        </Canvas>
    </div>
  )
}