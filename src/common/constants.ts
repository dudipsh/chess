export const EMPTY_MOVE = {
  color: "",
  flags: "",
  piece: "",
  san: "",
  from: "",
  to: "",
  points: 0,
};

export const RANKS: Record<number, number> = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
  5: 3,
  6: 2,
  7: 1,
  8: 0,
};
export const FILES: Record<string, number> = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

export const RANK: Record<number, number> = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
};

export const PIECE_POINT = {
  p: 101,
  n: 300,
  b: 320,
  r: 500,
  q: 900,
  k: 1000,
};

export const POSITION: any = {
  p: [
    [100, 100, 100, 100, 105, 100, 120, 100],
    [-1, -1, -1, 1, 1, -1, -1, -1],
    [1, 1, 2, 4, 4, 4, 1, 1],
    [3, 3, 3, 5, 5, 3, 3, 3],
    [8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9],
    [10, 10, 10, 10, 10, 10, 10, 10],
    [100, 100, 100, 100, 105, 100, 120, 100],
  ],
  n: [
    [-6, -4, -3, -3, -3, -3, -4, -6],
    [-4, 0, 0, 0, 0, 0, 0, -4],
    [-1, 5, 80, 21, 22, 80, 60, 0],
    [24, 50, 45, 37, 33, 41, 25, 17],
    [5, 15, 31, 21, 22, 35, 60, 0],
    [10, 61, 100, 74, 73, 100, 60, -2],
    [-4, 0, 0, 0, 0, 0, 0, -4],
    [10, 0, 20, 74, 73, 20, 0, -2],
  ],
  b: [
    [-59, -78, -82, -76, -23, -107, -37, -50],
    [-11, 50, 35, -42, -39, 31, 50, -22],
    [-9, 39, 20, 41, 52, 20, 28, -14],
    [25, 17, 20, 34, 26, 25, 15, 10],
    [13, 10, 100, 23, 100, 30, 0, 7],
    [-9, 39, 20, 41, 52, 20, 28, -14],
    [-11, 50, 35, -42, -39, 31, 50, -22],
    [-7, 2, -15, -12, -14, -15, -10, -10],
  ],
  q: [
    [6, 1, -8, -104, 69, 24, 88, 26],
    [14, 32, 60, -10, 20, 76, 57, 24],
    [-2, 80, 32, 60, 72, 63, 43, 2],
    [1, -16, 22, 17, 25, 20, -13, -6],
    [-14, -15, -2, -5, -1, -10, -20, -22],
    [-30, -6, -13, -11, -16, -11, -16, -27],
    [-36, 100, 0, -19, -15, -15, -21, -38],
    [-39, -30, -31, -13, -31, -36, -34, -42],
  ],
  k: [
    [4, 54, 47, -99, -99, -99, 83, -62],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-62, 12, -57, 44, -67, 28, 37, -31],
    [-55, 50, 11, -4, -19, 13, 0, -49],
    [-55, -43, -52, -28, -51, -47, -8, -50],
    [-47, -42, -43, -79, -64, -32, -29, -32],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [4, 100, -99, -99, -99, -99, 100, -62],
  ],
  r: [
    [0, 0, 50, 40, 37, 50, 0, 0],
    [55, 29, 56, 67, 55, 62, 34, 60],
    [19, 35, 28, 33, 45, 27, 25, 15],
    [0, 5, 16, 13, 18, -4, -9, -6],
    [19, 35, 28, 33, 45, 27, 25, 15],
    [55, 29, 56, 67, 55, 62, 34, 60],
    [19, 35, 28, 33, 45, 27, 25, 15],
    [0, 0, 50, 40, 37, 50, 0, 0],
  ],
  k_e: [
    [-50, -40, -30, -20, -20, -30, -40, -50],
    [-30, -20, -10, 0, 0, -10, -20, -30],
    [-30, -10, 20, 30, 30, 20, -10, -30],
    [-30, -10, 30, 40, 40, 30, -10, -30],
    [-30, -10, 30, 40, 40, 30, -10, -30],
    [-30, -10, 20, 30, 30, 20, -10, -30],
    [-30, -30, 0, 0, 0, 0, -30, -30],
    [-50, -30, -30, -30, -30, -30, -30, -50],
  ],
};

export const IMAGE_PATH: Record<string, string> = {
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