import type { Position3D } from '../../types/position';

export enum TileType {
  OPEN = 'open',
  ENTRANCE = 'entrance',
  RESOURCE = 'resource',
  TOWER = 'tower',
}

export type GridTile = {
  gridXValue: number;
  gridZValue: number;
  worldPosition: Position3D;
  tileType: TileType;
};
