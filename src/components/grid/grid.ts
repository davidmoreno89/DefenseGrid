import type { Position3D } from '../../types/position';

export enum TileType {
  OPEN = 'open',
  ENTRANCE = 'entrance',
  BASE = 'base',
  TOWER = 'tower',
}

type GridTile = {
  gridXCoordinate: number;
  gridZCoordinate: number;
  worldPosition: Position3D;
  tileType: TileType;
};

const GRID_RADIUS = 2;

const getTileType = (gridXCoordinate: number, gridZCoordinate: number): TileType => {
  const entranceCoordinate = -GRID_RADIUS;
  const baseCoordinate = GRID_RADIUS;
  if (gridXCoordinate === entranceCoordinate && gridZCoordinate === 0) {
    return TileType.ENTRANCE;
  }
  if (gridXCoordinate === baseCoordinate && gridZCoordinate === 0) {
    return TileType.BASE;
  }
  if (gridXCoordinate === 0 && gridZCoordinate === 1) {
    return TileType.TOWER;
  }
  return TileType.OPEN;
};

const generateGridCoordinates = (radius: number) => {
  const coordinates: number[] = [];
  for (let coordinate = -radius; coordinate <= radius; coordinate++) {
    coordinates.push(coordinate);
  }
  return coordinates;
};

const tileSpacing = 1.1;

const generateGridTiles = (gridCoordinates: number[]): GridTile[] =>
  gridCoordinates.flatMap((gridZCoordinate) =>
    gridCoordinates.map((gridXCoordinate) => ({
      gridXCoordinate,
      gridZCoordinate,
      worldPosition: [gridXCoordinate * tileSpacing, 0, gridZCoordinate * tileSpacing],
      tileType: getTileType(gridXCoordinate, gridZCoordinate),
    })),
  );

const gridCoordinates = generateGridCoordinates(GRID_RADIUS);

export const gridTiles = generateGridTiles(gridCoordinates);
