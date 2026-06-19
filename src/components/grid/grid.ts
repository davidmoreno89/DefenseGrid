import type { LevelDefinition } from '../../game/types';
import { type GridTile, TileType } from './types';

export const getTileType = (
  levelDefinition: LevelDefinition,
  gridXValue: number,
  gridZValue: number,
): TileType => {
  const {
    entranceCoordinate: entrance,
    resourceCoordinate: resource,
    startingTowerCoordinates: towers,
  } = levelDefinition;
  const isStartingTowerCoordinate = towers.some(
    (tower) => tower.x === gridXValue && tower.z === gridZValue,
  );
  if (isStartingTowerCoordinate) {
    return TileType.TOWER;
  }
  if (gridXValue === entrance.x && gridZValue === entrance.z) {
    return TileType.ENTRANCE;
  }
  if (gridXValue === resource.x && gridZValue === resource.z) {
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
      gridXValue: gridXValue,
      gridZValue: gridZValue,
      worldPosition: [gridXValue * tileSpacing, 0, gridZValue * tileSpacing],
      tileType: getTileType(levelDefinition, gridXValue, gridZValue),
    })),
  );
};
