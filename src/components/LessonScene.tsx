import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { TileGrid } from './grid/TileGrid';

export function LessonScene() {
  return (
    <Canvas
      className="three-canvas"
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <color attach="background" args={['#101318']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 3]} intensity={2} />

      <TileGrid />

      <OrbitControls />
    </Canvas>
  );
}
