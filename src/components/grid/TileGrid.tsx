import { Tile } from '../Tile';
import { gridTiles, TileType } from './grid';

function getTileColor(tileType: TileType) {
  if (tileType === TileType.ENTRANCE) {
    return '#4fb3ff';
  }
  if (tileType === TileType.BASE) {
    return '#ff6b6b';
  }
  if (tileType === TileType.TOWER) {
    return '#5de39a';
  }
  return '#26313d';
}

export function TileGrid() {
  const clickHandler = (gridXCoordinate: number, gridZCoordinate: number) => {
    console.log(`X coordinate: ${gridXCoordinate}, Z coordinate: ${gridZCoordinate}`);
  }
  return (
    <>
      {gridTiles.map((gridTile) => (
        <Tile
          key={`${gridTile.gridXCoordinate}-${gridTile.gridZCoordinate}`}
          position={gridTile.worldPosition}
          clickHandler={() => clickHandler(gridTile.gridXCoordinate, gridTile.gridZCoordinate)}
          color={getTileColor(gridTile.tileType)}
        />
      ))}
    </>
  );
}
