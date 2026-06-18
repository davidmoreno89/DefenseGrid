import type { Position3D } from '../types/position';
import { Tile } from './Tile';

type GridTile = {
  gridXCoordinate: number;
  gridZCoordinate: number;
  worldPosition: Position3D;
  tileType: 'open' | 'entrance' | 'base';
};

const tileSpacing = 1.1;

const gridTiles: GridTile[] = [-1, 0, 1].flatMap((gridZCoordinate) =>
  [-1, 0, 1].map((gridXCoordinate) => {
    const isEntranceTile = gridXCoordinate === -1 && gridZCoordinate === 0;
    const isBaseTile = gridXCoordinate === 1 && gridZCoordinate === 0;

    return {
      gridXCoordinate,
      gridZCoordinate,
      worldPosition: [
        gridXCoordinate * tileSpacing,
        0,
        gridZCoordinate * tileSpacing,
      ],
      tileType: isEntranceTile ? 'entrance' : isBaseTile ? 'base' : 'open',
    };
  }),
);

function getTileColor(tileType: GridTile['tileType']) {
  if (tileType === 'entrance') {
    return '#4fb3ff';
  }
  if (tileType === 'base') {
    return '#ff6b6b';
  }
  return '#26313d';
}

export function TileGrid() {
  return (
    <>
      {gridTiles.map((gridTile) => (
        <Tile
          key={`${gridTile.gridXCoordinate}-${gridTile.gridZCoordinate}`}
          position={gridTile.worldPosition}
          color={getTileColor(gridTile.tileType)}
        />
      ))}
    </>
  );
}
