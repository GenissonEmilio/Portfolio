// NotebookScene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { NotebookModel } from './NotebookModel'

export default function NotebookScene() {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <NotebookModel />
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
    </Canvas>
  )
}
