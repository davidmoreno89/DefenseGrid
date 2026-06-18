import type { Position3D } from '../types/position';

type TileProperties = {
  position: Position3D;
  clickHandler?: () => void;
  color?: string;
};

export function Tile({ position, clickHandler, color = '#26313d' }: TileProperties) {
  return (
    <mesh position={position} onClick={clickHandler}>
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
