import type { Position3D } from '../types/position';
import { Tile } from './Tile';

const tileSpacing = 1.1;

const tilePositions: Position3D[] = [-1, 0, 1].flatMap((gridZCoordinate) =>
  [-1, 0, 1].map(
    (gridXCoordinate) =>
      [gridXCoordinate * tileSpacing, 0, gridZCoordinate * tileSpacing] as Position3D,
  ),
);

export function TileGrid() {
  return (
    <>
      {tilePositions.map((tilePosition) => (
        <Tile position={tilePosition} key={tilePosition.toString()} />
      ))}
    </>
  );
}
