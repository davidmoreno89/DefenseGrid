import type { LevelDefinition } from '../types';

export const levelOne: LevelDefinition = {
  gridRadius: 3,
  entranceCoordinates: [{ x: -3, z: -1 }],
  resourceCoordinates: [{ x: 3, z: 0 }],
  exitCoordinates: [{ x: -3, z: 1 }],
  startingTowerCoordinates: [
    { x: 0, z: -2 },
    { x: 0, z: 2 },
  ],
};
