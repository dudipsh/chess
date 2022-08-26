import { Square } from "chess.js";

import { DEFAULT_FEN_BOARD } from "../utils/board-utils";

import { ChessGame } from "../core/chess-game";
import { IMove } from "../common/interface";

const jsChessEngine = require("js-chess-engine");
const game = new ChessGame();
const chessEngine = new jsChessEngine.Game(game);
const MOVE: IMove = {
  from: "",
  to: "",
};

class ChessEngineService {
  move;
  stepCount = 0;

  constructor() {
    game.load(DEFAULT_FEN_BOARD);
    chessEngine.board = game.board();
    this.move = { ...MOVE };
  }

  getBoard(): any[][] {
    return game.board();
  }

  getBestMove(): string {
    const move = game.randomMove();
    return this.getSquare(move);
  }

  setMove(move: string): IMove {
    if (this.stepCount === 0) {
      const isValidSource = this.validateSource(move as Square);
      if (isValidSource) {
        this.setSourceMove(move);
        this.stepCount++;
      }
      return this.move;
    }
    if (this.stepCount === 1) {
      const isValidSource = this.validateTarget(move as Square);
      if (isValidSource) {
        this.move.to = move;
        this.makeMove();
        this.stepCount = 0;
      } else {
        this.resetMove();
        this.move = { ...MOVE };
      }
    }
    return this.move;
  }

  setSourceMove(square: string) {
    this.move.to = "";
    this.move.from = square;
  }

  resetMove() {
    this.stepCount = 0;
    this.move = { ...MOVE };
  }

  makeMove() {
    const move = game.move({
      from: this.move.from as Square,
      to: this.move.to as Square,
      promotion: "q", // NOTE: always promote to a queen for example simplicity
    });
    // illegal move
    if (move === null) return "snapback";
    game.load(game.fen());
  }

  getSquare(move: string) {
    if (!move) return "";
    // Ng6 => g6
    // Nxd8 => d8
    return move.substring(move.length - 2, move.length);
  }

  possibleMoves(square: string) {
    return game.moves({ square }).map((move) => {
      if (move.length > 2) {
        return this.getSquare(move);
      }
      return move;
    });
  }

  piece(square: string) {
    return game.get(square as Square);
  }

  turn() {
    return game.turn();
  }

  setFen(fen: string) {
    game.load(fen);
  }

  status() {
    let status = "";

    let moveColor = "White";
    if (game.turn() === "b") {
      moveColor = "Black";
    }

    // checkmate?
    if (game.in_checkmate()) {
      status = "Game over, " + moveColor + " is in checkmate.";
    }

    // draw?
    else if (game.in_draw()) {
      status = "Game over, drawn position";
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

  validateSource(source: Square) {
    const sourcePiece = game.get(source);
    if (!sourcePiece) {
      return false;
    }
    return sourcePiece.color === game.turn();
  }

  validateTarget(target: string) {
    const targetPiece = game.get(target as Square);
    if (!targetPiece) {
      return !!game.move({
        from: this.move.from as Square,
        to: target as Square,
      });
    }
    return targetPiece.color !== game.turn();
  }
}

export const chessEngineService = new ChessEngineService();
