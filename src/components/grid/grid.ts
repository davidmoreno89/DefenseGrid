import type { GridCoordinate, LevelDefinition } from '../../game/types';
import { type GridTile, TileType } from './types';

const isCoordinateInArray = (coordinates: GridCoordinate[], x: number, z: number): boolean => {
  return coordinates.some((coordinate) => coordinate.x === x && coordinate.z === z);
};

export const getTileType = (
  levelDefinition: LevelDefinition,
  gridXValue: number,
  gridZValue: number,
): TileType => {
  const {
    entranceCoordinates: entrance,
    resourceCoordinates: resource,
    exitCoordinates: exit,
    startingTowerCoordinates: towers,
  } = levelDefinition;
  if (isCoordinateInArray(towers, gridXValue, gridZValue)) {
    return TileType.TOWER;
  }
  if (isCoordinateInArray(entrance, gridXValue, gridZValue)) {
    return TileType.ENTRANCE;
  }
  if (isCoordinateInArray(resource, gridXValue, gridZValue)) {
    return TileType.RESOURCE;
  }
  if (isCoordinateInArray(exit, gridXValue, gridZValue)) {
    return TileType.EXIT;
  }
  return TileType.OPEN;
};

export const generateGridAxisValues = (radius: number): number[] => {
  const coordinates: number[] = [];
  for (let coordinate = -radius; coordinate <= radius; coordinate++) {
    coordinates.push(coordinate);
  }
  return coordinates;
};

export const generateGridTiles = (levelDefinition: LevelDefinition): GridTile[] => {
  const tileSpacing = 1.1;
  const gridAxisValues = generateGridAxisValues(levelDefinition.gridRadius);

  return gridAxisValues.flatMap((gridZValue) =>
    gridAxisValues.map((gridXValue) => ({
      gridXValue: gridXValue,
      gridZValue: gridZValue,
      worldPosition: [gridXValue * tileSpacing, 0, gridZValue * tileSpacing],
      tileType: getTileType(levelDefinition, gridXValue, gridZValue),
    })),
  );
};
