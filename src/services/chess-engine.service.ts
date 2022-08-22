import { Square } from "chess.js";
import { ICallback } from "../common/types";

import { DEFAULT_FEN_BOARD } from "../utils/board-utils";

import { ChessGame } from "../core/chess-game";

const jsChessEngine = require("js-chess-engine");
const game = new ChessGame();
const chessEngine = new jsChessEngine.Game(game);

class ChessEngineService {
  constructor() {
    game.load(DEFAULT_FEN_BOARD);
    chessEngine.board = game.board();
  }

  getBoard() {
    return game.board();
  }
  //
  getBestMove() {
    return game.randomMove();
  }

  onMove(source: string, target: string, onSuccess: ICallback) {
    const move = game.move({
      from: source as Square,
      to: target as Square,
      promotion: "q", // NOTE: always promote to a queen for example simplicity
    });
    // illegal move
    if (move === null) return "snapback";
    const payload = this.updateStatus();
    onSuccess(payload);
    game.load(payload.fen);
  }

  isValidMove(move: any) {
    return game.isValidMove(move);
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

  updateStatus() {
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
    return {
      status,
      fen: game.fen(),
    };
  }
}

export const chessEngineService = new ChessEngineService();
