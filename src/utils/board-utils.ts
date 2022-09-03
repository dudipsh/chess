import { Move } from "chess.js";
import {
  FILES,
  IMAGE_PATH,
  PIECE_POINT,
  POSITION,
  RANK,
  RANKS,
} from "../common/constants";

export const boardPoint = (move: Move) => {
  const fromPos = getPositions(move.color);
  const { to } = move;
  const fileIndex = FILES[to[0]];
  const rankIndex = RANK[Number(to[1])];
  const points = fromPos[move.piece][rankIndex][fileIndex];
  return points;
};

const getPositions = (color: string) => {
  if (color === "b") {
    const positions = {
      p: POSITION.p.reverse(),
      n: POSITION.n.reverse(),
      b: POSITION.b.reverse(),
      q: POSITION.q.reverse(),
      k: POSITION.k.reverse(),
      r: POSITION.r.reverse(),
      k_e: POSITION.k_e.reverse(),
    };
    return positions;
    // reverse the array
  } else {
    return POSITION;
  }
};

export { FILES, IMAGE_PATH, RANK, RANKS, getPositions };
