import type { Position3D } from '../types/position';

type TileProperties = {
  position: Position3D;
  onClick?: () => void;
  color?: string;
};

export function Tile({ position, onClick, color = '#26313d' }: TileProperties) {
  return (
    <>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: React Three Fiber mesh is a 3D object, not a DOM element. */}
      <mesh position={position} onClick={onClick}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}
