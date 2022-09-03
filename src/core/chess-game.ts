import { Chess } from "chess.js";
import { boardPoint, getPositions } from "../utils/board-utils";
import { IMove } from "../common/interface";
import { EMPTY_MOVE, PIECE_POINT } from "../common/constants";

// Base class for chess game
export class ChessGame extends Chess {
  constructor(args?: any) {
    super(args);
    return this;
  }

  randomMoves = () => {
    return this.moves({ verbose: true }).map((move) => {
      return {
        ...move,
        points: boardPoint(move),
      };
    });
  };

  randomMove = (applyMove = true): IMove => {
    const possibleMoves = this.orderMoveByPoints(this.randomMoves());
    const capturedMoves = possibleMoves.filter((move) => move.captured);
    const valueMove = capturedMoves.length
      ? capturedMoves[0]
      : possibleMoves[0];
    if (applyMove) {
      this.move(valueMove);
    }
    return valueMove;
  };

  orderMoveByPoints = (moves: IMove[]) => {
    const sortByPoints = moves
      .sort((a: any, b: any) => {
        if (a.points > b.points) return -1;
        return 1;
      })
      .sort((a: any, b: any) => {
        if (b.captured || a.captured) return -1;
        return 1;
      });
    return sortByPoints;
  };

  evaluateMove = (move: IMove, opponentMove: IMove): IMove | null => {
    const copyMove = { ...move };
    const capture = copyMove.captured;
    const opponentCapture = opponentMove.captured;
    if (capture && !opponentCapture) {
      copyMove.points += PIECE_POINT[capture];
      return copyMove;
    }
    if (capture && opponentCapture) {
      const isCaptureBigger =
        PIECE_POINT[capture] >= PIECE_POINT[opponentCapture];
      if (isCaptureBigger) {
        copyMove.points += PIECE_POINT[capture];
        return copyMove;
      } else {
        copyMove.points -= PIECE_POINT[capture];
        return copyMove;
      }
    }
    return null;
  };

  findBestMoves = (game: any): IMove => {
    const moves = this.randomMoves();
    let theBestMove = EMPTY_MOVE as IMove;
    let stop = false;
    let index = 0;
    while (!stop && index < moves.length) {
      const move = moves[index];
      game.move(move);
      const opponentMove = this.randomMove(false);
      const bestMove = this.evaluateMove({ ...move }, opponentMove);
      if (bestMove && bestMove.points >= move.points) {
        theBestMove = bestMove;
      } else {
        if (move.points >= theBestMove.points) {
          game.move(theBestMove);
          const opponentNextMove = this.randomMove(false);
          if (opponentNextMove.captured && move.captured) {
            const newMove = this.evaluateMove(move, opponentNextMove);
            if (newMove && newMove.points >= theBestMove.points) {
              theBestMove = move;
            }
          } else {
            theBestMove = move;
          }
          game.undo();
        }
      }
      game.undo();
      index++;
    }
    return theBestMove;
  };

  possibleMovesForSquare = (square?: string) => {
    return this.moves({ square, verbose: true }).map((move) => {
      return {
        ...move,
        points: boardPoint(move),
      };
    });
  };
}
