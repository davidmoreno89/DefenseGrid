import { describe, expect, test } from 'vitest';
import type { LevelDefinition } from '../../game/types';
import { generateGridAxisValues, generateGridTiles, getTileType } from './grid';
import { TileType } from './types';

const testLevel: LevelDefinition = {
  gridRadius: 2,
  entranceCoordinate: { x: -2, z: 0 },
  resourceCoordinate: { x: 2, z: 0 },
  startingTowerCoordinates: [{ x: 0, z: -1 }],
};

describe('generateGridAxisValues', () => {
  test('creates axis values from negative radius to positive radius', () => {
    expect(generateGridAxisValues(2)).toEqual([-2, -1, 0, 1, 2]);
  });
});

describe('getTileType', () => {
  test('marks the level entrance coordinate as entrance', () => {
    expect(getTileType(testLevel, -2, 0)).toBe(TileType.ENTRANCE);
  });

  test('marks the level resource coordinate as resource', () => {
    expect(getTileType(testLevel, 2, 0)).toBe(TileType.RESOURCE);
  });

  test('marks level starting tower coordinates as tower', () => {
    expect(getTileType(testLevel, 0, -1)).toBe(TileType.TOWER);
  });

  test('marks other tiles as open', () => {
    expect(getTileType(testLevel, 0, 0)).toBe(TileType.OPEN);
  });
});

describe('generateGridTiles', () => {
  test('creates one tile for each x and z axis value pair', () => {
    expect(generateGridTiles(testLevel)).toHaveLength(25);
  });

  test('creates world positions from grid coordinates', () => {
    const generatedTiles = generateGridTiles(testLevel);

    expect(generatedTiles).toContainEqual(
      expect.objectContaining({
        gridXValue: 1,
        gridZValue: 1,
        worldPosition: [1.1, 0, 1.1],
      }),
    );
  });

  test('uses the level definition when assigning tile types', () => {
    expect(generateGridTiles(testLevel)).toContainEqual(
      expect.objectContaining({
        gridXValue: 2,
        gridZValue: 0,
        tileType: TileType.RESOURCE,
      }),
    );
  });
});
