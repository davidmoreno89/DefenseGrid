import { useEffect, useState } from 'react';
import { levelOne } from '../../game/levels/levelOne';
import { Tile } from '../Tile';
import { generateGridTiles } from './grid';
import { type GridTile, TileType } from './types';

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
  const [gridTiles, setGridTiles] = useState<GridTile[]>([]);

  useEffect(() => {
    setGridTiles(generateGridTiles(levelOne));
  }, []);

  const clickHandler = (gridTile: GridTile) => {
    if (gridTile.tileType === TileType.OPEN) {
      const newTowerTile = {
        ...gridTile,
        tileType: TileType.TOWER,
      };
      setGridTiles((prevGridTiles) =>
        prevGridTiles.map((prevGridTile) =>
          prevGridTile.gridXCoordinate === gridTile.gridXCoordinate &&
          prevGridTile.gridZCoordinate === gridTile.gridZCoordinate
            ? newTowerTile
            : prevGridTile,
        ),
      );
    }
  };

  return (
    <>
      {gridTiles.map((gridTile) => (
        <Tile
          key={`${gridTile.gridXCoordinate}-${gridTile.gridZCoordinate}`}
          position={gridTile.worldPosition}
          onClick={() => clickHandler(gridTile)}
          color={getTileColor(gridTile.tileType)}
        />
      ))}
    </>
  );
}
