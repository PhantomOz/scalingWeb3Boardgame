import { ifError } from "assert";

const width = 8;
let target: HTMLDivElement;

//--------------------------------------------------Moves----------------------------------------------------//
export const Pawn = (
  id: number,
  targetId: number,
  pieceId: number
): boolean => {
  const startRow = [
    8, 9, 10, 11, 12, 13, 14, 15, 48, 49, 50, 51, 52, 53, 54, 55,
  ];
  const IS_OPPS = isOpponentPiece(pieceId);
  // console.log(IS_OPPS);
  return (
    (startRow.includes(id) && id + width * 2 === targetId) ||
    (startRow.includes(id) && id - width * 2 === targetId) ||
    (id + width === targetId && pieceId < targetId) ||
    (id - width === targetId && pieceId > targetId) ||
    (id + width - 1 === targetId && pieceId < targetId && IS_OPPS) ||
    (id + width + 1 === targetId && pieceId < targetId && IS_OPPS) ||
    (id - width + 1 === targetId && pieceId > targetId && IS_OPPS) ||
    (id - width - 1 === targetId && pieceId > targetId && IS_OPPS)
  );
};

export const Rook = (
  id: number,
  targetId: number,
  pieceId: number
): boolean => {
  let ans: boolean = false;
  for (let i = 1; i <= 8; i++) {
    if (width * i + id === targetId || id - width * i === targetId) {
      ans = true;
      break;
    }
    if (i + id === targetId || id - i === targetId) {
      ans = true;
      break;
    }
  }
  return ans;
};

export const Knight = (
  id: number,
  targetId: number,
  pieceId: number
): boolean => {
  const Up: boolean =
    width * 2 + 1 + id === targetId || width * 2 + id - 1 === targetId;
  const Down: boolean =
    id - width * 2 + 1 === targetId || id - width * 2 - 1 === targetId;
  const Left: boolean =
    id + width + 2 === targetId || id + width - 2 === targetId;
  const Right: boolean =
    id - width + 2 === targetId || id - width - 2 === targetId;

  return (
    (Up || Down || Left || Right) &&
    (!target?.hasChildNodes() || isOpponentPiece(pieceId))
  );
};

export const Bishop = (
  id: number,
  targetId: number,
  pieceId: number
): boolean => {
  let ans: boolean = false;
  for (let i = 1; i <= 8; i++) {
    if (width * i + id + i === targetId || id + width * i - i === targetId) {
      ans = true;
      break;
    }
    if (id - width * i + i === targetId || id - width * i - i === targetId) {
      ans = true;
      break;
    }
  }
  return ans;
};

export const Queen = (
  id: number,
  targetId: number,
  pieceId: number
): boolean => {
  return Rook(id, targetId, pieceId) || Bishop(id, targetId, pieceId);
};

export const King = (
  id: number,
  targetId: number,
  pieceId: number
): boolean => {
  const Vertical: boolean =
    (id + width === targetId || id - width === targetId) &&
    (!target.hasChildNodes() || isOpponentPiece(pieceId));
  const Horizontal: boolean =
    (id + 1 === targetId || id - 1 === targetId) &&
    (!target.hasChildNodes() || isOpponentPiece(pieceId));
  const Diagonal: boolean =
    (id + width - 1 === targetId ||
      id + width + 1 === targetId ||
      id - width + 1 === targetId ||
      id - width - 1 === targetId) &&
    (!target.hasChildNodes() || isOpponentPiece(pieceId));
  return Vertical || Horizontal || Diagonal;
};

//-------------------------------------------------Rules----------------------------------------------------------------//
export const isValidMove = (startE: any, e: HTMLDivElement): boolean => {
  target = e;
  if (e.hasChildNodes()) {
    target = e.parentNode as HTMLDivElement;
  }
  // console.log(startE, target.id, startE[1]);
  const startId = Number(startE[2]?.id);
  const targetId = Number(target?.id);
  const pieceId = Number(startE[0]?.id);
  switch (startE[1]) {
    case "pawn":
      return Pawn(startId, targetId, pieceId);
    case "knight":
      return Knight(startId, targetId, pieceId);
    case "rook":
      return Rook(startId, targetId, pieceId);
    case "bishop":
      return Bishop(startId, targetId, pieceId);
    case "queen":
      return Queen(startId, targetId, pieceId);
    case "king":
      return King(startId, targetId, pieceId);
    default:
      return false;
  }
};

export const isOpponentPiece = (id: number): boolean => {
  let oppId: number | undefined = undefined;
  if (target?.hasChildNodes()) {
    oppId = Number(target.children[0]?.id);
    // console.log(oppId);
    return (oppId <= 15 && id >= 48) || (oppId >= 48 && id <= 15);
  }
  return false;
};
