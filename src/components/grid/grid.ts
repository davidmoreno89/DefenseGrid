import type { LevelDefinition } from '../../game/types';
import { type GridTile, TileType } from './types';

export const getTileType = (
  levelDefinition: LevelDefinition,
  gridXCoordinate: number,
  gridZCoordinate: number,
): TileType => {
  const { entranceCoordinate, resourceCoordinate, startingTowerCoordinates } = levelDefinition;
  const isStartingTowerCoordinate = startingTowerCoordinates.some(
    (startingTowerCoordinate) =>
      startingTowerCoordinate.x === gridXCoordinate &&
      startingTowerCoordinate.z === gridZCoordinate,
  );
  if (isStartingTowerCoordinate) {
    return TileType.TOWER;
  }
  if (gridXCoordinate === entranceCoordinate.x && gridZCoordinate === entranceCoordinate.z) {
    return TileType.ENTRANCE;
  }
  if (gridXCoordinate === resourceCoordinate.x && gridZCoordinate === resourceCoordinate.z) {
    return TileType.RESOURCE;
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
      gridXCoordinate: gridXValue,
      gridZCoordinate: gridZValue,
      worldPosition: [gridXValue * tileSpacing, 0, gridZValue * tileSpacing],
      tileType: getTileType(levelDefinition, gridXValue, gridZValue),
    })),
  );
};
