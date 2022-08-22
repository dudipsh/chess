const RANKS: Record<number, number> = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
  5: 3,
  6: 2,
  7: 1,
  8: 0,
};
const FILES: Record<string, number> = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

const IMAGE_PATH: Record<string, string> = {
  B: "assets/images/bishop_w.png",
  b: "assets/images/bishop_b.png",
  R: "assets/images/rook_w.png",
  r: "assets/images/rook_b.png",
  N: "assets/images/knight_w.png",
  n: "assets/images/knight_b.png",
  Q: "assets/images/queen_w.png",
  q: "assets/images/queen_b.png",
  K: "assets/images/king_w.png",
  k: "assets/images/king_b.png",
  P: "assets/images/pawn_w.png",
  p: "assets/images/pawn_b.png",
};

export const INITIAL_FILES = ["a", "b", "c", "d", "e", "f", "g", "h"].reverse();

export const DEFAULT_FEN_BOARD =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

/**
 * Example:
 *   getFileRank("a2") => [0, 6]
 *
 * @param {string} square - Eg: "a2"
 */
const getFileRank = (square: string) => {
  const file = square.substring(0, 1) as string;
  const rank = Number(square.substring(1, 2)) as number;
  return [FILES[file], RANKS[rank]];
};

const emptyBoard = () => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
  }
  return board;
};

export { emptyBoard, getFileRank, FILES, RANKS, IMAGE_PATH };
