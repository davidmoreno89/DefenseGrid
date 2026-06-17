import type { Position3D } from '../types/position';

type TileProperties = {
  position: Position3D;
  color?: string;
};

export function Tile({ position, color = '#26313d' }: TileProperties) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
