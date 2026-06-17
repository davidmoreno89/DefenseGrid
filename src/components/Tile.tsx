import type { Position3D } from "../types/position";

type TileProperties = {
  position: Position3D
};

export function Tile({ position }: TileProperties) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color="#26313d" />
    </mesh>
  )
}