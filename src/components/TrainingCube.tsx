import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

export function TrainingCube() {
  const cubeRef = useRef<Mesh | null>(null)
  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta
    }
  })

  return (
    <mesh position={[0, 0.5, 0]} ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#67e8a5" />
    </mesh>
  );
}
