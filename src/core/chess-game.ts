import { Chess } from "chess.js";

// Base class for chess game
export class ChessGame extends Chess {
  constructor(args?: any) {
    super(args);
    return this;
  }

  randomMove = (): string => {
    const possibleMoves = this.moves();
    if (possibleMoves.length === 0) return "";
    const randomIdx = Math.floor(Math.random() * possibleMoves.length);
    this.move(possibleMoves[randomIdx]);
    return possibleMoves[randomIdx];
  };
}
