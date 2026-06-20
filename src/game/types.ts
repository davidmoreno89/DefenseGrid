export type GridCoordinate = {
  x: number;
  z: number;
};

export type LevelDefinition = {
  gridRadius: number;
  entranceCoordinates: GridCoordinate[]; // spawn points (≥1)
  exitCoordinates: GridCoordinate[]; // escape points (may equal entrances)
  resourceCoordinates: GridCoordinate[]; // treasures to steal (≥1)
  startingTowerCoordinates: GridCoordinate[];
};
