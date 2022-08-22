import { Chess } from "chess.js";

export class ChessGame extends Chess {
  constructor(args?: any) {
    super(args);
    return this;
  }

  randomMove = () => {
    const possibleMoves = this.moves();
    if (possibleMoves.length === 0) return;
    const randomIdx = Math.floor(Math.random() * possibleMoves.length);
    this.move(possibleMoves[randomIdx]);
  };

  isValidMove = (move: any) => {
    const piece = this.get(move.from);

    if (piece?.type !== "p") {
      return false;
    }

    if (piece.color !== this.turn()) {
      return false;
    }

    if (!["1", "8"].some((it) => move.to.endsWith(it))) {
      return false;
    }

    return this.moves({ square: move.from, verbose: true })
      .map((it) => it.to)
      .includes(move.to);
  };
}
