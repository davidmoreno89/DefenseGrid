import { levelOne } from '../../game/levels/levelOne';
import { Tile } from '../Tile';
import { generateGridTiles } from './grid';
import { TileType } from './types';

function getTileColor(tileType: TileType) {
  if (tileType === TileType.ENTRANCE) {
    return '#4fb3ff';
  }
  if (tileType === TileType.RESOURCE) {
    return '#ff6b6b';
  }
  if (tileType === TileType.TOWER) {
    return '#5de39a';
  }
  return '#26313d';
}

export function TileGrid() {
  const gridTiles = generateGridTiles(levelOne);

  const clickHandler = (tileType: TileType, gridXCoordinate: number, gridZCoordinate: number) => {
    console.log(`X coordinate: ${gridXCoordinate}, Z coordinate: ${gridZCoordinate}`);
    if (tileType === TileType.OPEN) {
      console.log('Can build');
    } else {
      console.log(`Can't build: ${tileType}`);
    }
  };

  return (
    <>
      {gridTiles.map((gridTile) => (
        <Tile
          key={`${gridTile.gridXCoordinate}-${gridTile.gridZCoordinate}`}
          position={gridTile.worldPosition}
          onClick={() =>
            clickHandler(gridTile.tileType, gridTile.gridXCoordinate, gridTile.gridZCoordinate)
          }
          color={getTileColor(gridTile.tileType)}
        />
      ))}
    </>
  );
}
