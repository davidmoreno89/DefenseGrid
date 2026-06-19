export type GridCoordinate = {
  x: number;
  z: number;
};

export type LevelDefinition = {
  gridRadius: number;
  entranceCoordinate: GridCoordinate;
  resourceCoordinate: GridCoordinate;
  startingTowerCoordinates: GridCoordinate[];
};
