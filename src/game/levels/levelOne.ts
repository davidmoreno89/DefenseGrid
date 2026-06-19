import type { LevelDefinition } from '../types';

export const levelOne: LevelDefinition = {
  gridRadius: 2,
  entranceCoordinate: { x: -2, z: 0 },
  resourceCoordinate: { x: 2, z: 0 },
  startingTowerCoordinates: [
    { x: 0, z: -2 },
    { x: 0, z: 2 },
  ],
};
