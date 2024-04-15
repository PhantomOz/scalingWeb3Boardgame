import { ifError } from "assert";
import Fen from "chess-fen/dist/Fen";

const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
const width = 8;
let target: string;
let Board: Fen = new Fen();
let from: string;

//--------------------------------------------------Moves----------------------------------------------------//
export const Pawn = (
  id: number,
  targetId: number,
  pieceId: number,
  piece: string
): boolean => {
  const startRow = [
    8, 9, 10, 11, 12, 13, 14, 15, 48, 49, 50, 51, 52, 53, 54, 55,
  ];
  const IS_OPPS = isOpponentPiece(piece, Board);
  console.log(piece, IS_OPPS);
  console.log(pieceId);
  return (
    (startRow.includes(id) && id + width * 2 === targetId && isEmpty()) ||
    (startRow.includes(id) && id - width * 2 === targetId && isEmpty()) ||
    (id + width === targetId && piece === piece.toLowerCase() && isEmpty()) ||
    (id - width === targetId && piece === piece.toUpperCase() && isEmpty()) ||
    (id + width - 1 === targetId && piece === piece.toLowerCase() && IS_OPPS) ||
    (id + width + 1 === targetId && piece === piece.toLowerCase() && IS_OPPS) ||
    (id - width + 1 === targetId && piece === piece.toUpperCase() && IS_OPPS) ||
    (id - width - 1 === targetId && piece === piece.toUpperCase() && IS_OPPS)
  );
};

export const Rook = (id: number, targetId: number, piece: string): boolean => {
  const IS_OPPS = isOpponentPiece(piece, Board);
  let ans: boolean = false;

  for (let i = 1; i <= 8; i++) {
    if (
      (width * i + id < targetId &&
        target.startsWith(from[0]) &&
        !isEmptyRoute(width * i + id)) ||
      (id - width * i > targetId &&
        target.startsWith(from[0]) &&
        !isEmptyRoute(id - width * i)) ||
      (i + id < targetId &&
        !target.startsWith(from[0]) &&
        !isEmptyRoute(i + id)) ||
      (id - i > targetId &&
        !target.startsWith(from[0]) &&
        !isEmptyRoute(id - i))
    ) {
      ans = false;
      break;
    }
    if (width * i + id === targetId || id - width * i === targetId) {
      ans = true;
      break;
    }
    if (i + id === targetId || id - i === targetId) {
      ans = true;
      break;
    }
  }
  return ans && IS_OPPS;
};

export const Knight = (
  id: number,
  targetId: number,
  piece: string
): boolean => {
  const IS_OPPS = isOpponentPiece(piece, Board);
  const Up: boolean =
    width * 2 + 1 + id === targetId || width * 2 + id - 1 === targetId;
  const Down: boolean =
    id - width * 2 + 1 === targetId || id - width * 2 - 1 === targetId;
  const Left: boolean =
    id + width + 2 === targetId || id + width - 2 === targetId;
  const Right: boolean =
    id - width + 2 === targetId || id - width - 2 === targetId;

  return (Up || Down || Left || Right) && (isEmpty() || IS_OPPS);
};

export const Bishop = (
  id: number,
  targetId: number,
  piece: string
): boolean => {
  const IS_OPPS = isOpponentPiece(piece, Board);
  let ans: boolean = false;
  console.log(rows.indexOf(target[0]), rows.indexOf(from[0]));
  for (let i = 1; i <= 8; i++) {
    if (rows.indexOf(target[0]) > rows.indexOf(from[0])) {
      if (
        (width * i + id + i < targetId &&
          piece === piece.toLowerCase() &&
          !isEmptyRoute(width * i + id + i)) ||
        (id - width * i + i > targetId &&
          piece === piece.toUpperCase() &&
          !isEmptyRoute(id - width * i + i))
      ) {
        ans = false;
        break;
      }
    }
    if (rows.indexOf(target[0]) < rows.indexOf(from[0])) {
      if (
        (id + width * i - i < targetId &&
          piece === piece.toLowerCase() &&
          !isEmptyRoute(id + width * i - i)) ||
        (id - width * i - i > targetId &&
          piece === piece.toUpperCase() &&
          !isEmptyRoute(id - width * i - i))
      ) {
        ans = false;
        break;
      }
    }
    if (width * i + id + i === targetId || id + width * i - i === targetId) {
      ans = true;
      break;
    }
    if (id - width * i + i === targetId || id - width * i - i === targetId) {
      ans = true;
      break;
    }
  }
  return ans && (isEmpty() || IS_OPPS);
};

export const Queen = (
  id: number,
  targetId: number,
  pieceId: string
): boolean => {
  return Rook(id, targetId, pieceId) || Bishop(id, targetId, pieceId);
};

export const King = (id: number, targetId: number, piece: string): boolean => {
  const IS_OPPS = isOpponentPiece(piece, Board);

  const Vertical: boolean =
    (id + width === targetId || id - width === targetId) &&
    (isEmpty() || IS_OPPS);
  const Horizontal: boolean =
    (id + 1 === targetId || id - 1 === targetId) && (isEmpty() || IS_OPPS);
  const Diagonal: boolean =
    (id + width - 1 === targetId ||
      id + width + 1 === targetId ||
      id - width + 1 === targetId ||
      id - width - 1 === targetId) &&
    (isEmpty() || IS_OPPS);
  return Vertical || Horizontal || Diagonal;
};

//-------------------------------------------------Rules----------------------------------------------------------------//
export const isValidMove = (
  startE: any,
  e: number,
  board: Fen,
  _target: string
): boolean => {
  Board = board;
  target = _target;
  from = startE[2]?.id.split("-")[0];
  const startId = Number(startE[2]?.id.split("-")[1]);
  const targetId = Number(e);
  const pieceId = Number(startE[0]?.id);
  console.log(startE[0]);
  switch (startE[1].toLowerCase()) {
    case "p":
      return Pawn(startId, targetId, pieceId, startE[1]);
    case "n":
      return Knight(startId, targetId, startE[1]);
    case "r":
      return Rook(startId, targetId, startE[1]);
    case "b":
      return Bishop(startId, targetId, startE[1]);
    case "q":
      return Queen(startId, targetId, startE[1]);
    case "k":
      return King(startId, targetId, startE[1]);
    default:
      return false;
  }
};

export const isOpponentPiece = (piece: string, board: Fen): boolean => {
  console.log(target);
  let targetPiece = board.get(target);
  if (targetPiece) {
    return (
      (targetPiece === targetPiece.toUpperCase() &&
        piece === piece.toLowerCase() &&
        targetPiece !== " ") ||
      (targetPiece === targetPiece.toLowerCase() &&
        piece === piece.toUpperCase() &&
        targetPiece !== " ")
    );
  }
  return false;
};

export const isEmpty = () => {
  return Board.isEmpty(target);
};

export const isEmptyRoute = (position: number): boolean => {
  console.log(position);
  console.log(Board.board);
  console.log(Math.floor(Math.abs(position) / 8));
  return (
    Board.board[Math.floor(Math.abs(position) / 8)][Math.abs(position) % 8] ===
    " "
  );
};

/////////////////////////////////////////***************** Special Rules *********************/////////////////////////////////////////////////////
export const PromotePawn = () => {};

export const Castling = (side: string) => {};

export const enPassant = () => {};
