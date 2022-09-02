import { Square } from "chess.js";

import { DEFAULT_FEN_BOARD } from "../utils/board-utils";
import { ChessGame } from "../core/chess-game";
import { EMPTY_MOVE } from "../common/constants";

const game = new ChessGame();

class ChessEngineService {
  private lastMove = "";
  private move = { ...EMPTY_MOVE };
  stepCount = 0;

  constructor() {
    this.resetGame();
  }

  resetGame() {
    game.load(DEFAULT_FEN_BOARD);
    this.move = { ...EMPTY_MOVE };
  }

  makeAMove(move: string) {
    const validMoves = game.moves({ verbose: true });
    const validMove = validMoves.find((m) => m.to === move);
    if (validMove) {
      game.move({ from: this.lastMove as Square, to: validMove.to });
      game.load(game.fen());
      this.lastMove = "";
      return validMove;
    }
    this.lastMove = move;
    return validMove;
  }

  getBoard(): any[][] {
    return game.board();
  }

  getBestMove(): string {
    return game.randomMove();
  }

  // todo implement "Best move" logic
  possibleMoves(square: string) {
    return game.moves({ square, verbose: true });
  }

  turn() {
    return game.turn();
  }
  status() {
    let status = "";

    let moveColor = "White";
    if (game.turn() === "b") {
      moveColor = "Black";
    }

    // checkmate?
    if (game.in_checkmate()) {
      status = "Checkmate";
    }

    // draw?
    else if (game.in_draw()) {
      status = "Drawn";
    }

    // game still on
    else {
      status = moveColor + " to move";

      // check?
      if (game.in_check()) {
        status += ", " + moveColor + " is in check";
      }
    }
    return status;
  }
}

export const chessEngineService = new ChessEngineService();
