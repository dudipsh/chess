import "./chessBoard.css";
import { Square } from "./Square/Square";
import { Piece } from "./Piece/Piece";
import { useEffect, useState } from "react";

import { INITIAL_FILES } from "../../utils/board-utils";

import { chessEngineService } from "../../services/chess-engine.service";
import { Color, Theme } from "../../common/enums";
import { Source } from "../../common/types";
import { Squares } from "./Squares/Squares";
import { IMove } from "../../common/interface";

interface ChessBoardProps {
  playAs: Color;
  theme: Theme;
}

export const ChessBoard = ({
  playAs = Color.White,
  theme = Theme.Brown,
}: ChessBoardProps) => {
  const [boardGame, setBoardGame] = useState<any[]>([]);
  const [status, setStatus] = useState<string>(`${Color[playAs]} to move`);
  const [move, setMove] = useState<IMove>({ from: "", to: "" });
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]);
  const files = INITIAL_FILES;

  useEffect(() => {
    setBoardGame(chessEngineService.getBoard());
  }, []);

  const handleSelectedPiece = (source: Source) => {
    handleHoveringPiece(source);
    const copyMove = { ...move };
    if (copyMove.from && !move.to) {
      copyMove.to = source;
    } else {
      const piece = chessEngineService.piece(source);
      if (piece && piece.color === chessEngineService.turn()) {
        copyMove.from = source;
      }
    }

    setMove(copyMove);
    applyMove(copyMove);
    if (chessEngineService.turn() === "b") {
      chessEngineService.getBestMove();
      setBoardGame([...chessEngineService.getBoard()]);
    }
  };

  const applyMove = (copyMove: IMove) => {
    if (copyMove.from && copyMove.to) {
      chessEngineService.onMove(copyMove.from, copyMove.to, (data) => {
        setStatus(data?.status);
        setTimeout(() => {
          resetMove();
          setStatus(
            `${chessEngineService.turn() === "w" ? "White" : "Black"} to move`
          );
        }, 100);
      });
      if (!chessEngineService.isValidMove(move)) {
        resetMove();
      }
    }
    setBoardGame([...chessEngineService.getBoard()]);
  };

  const handleHoveringPiece = (source: Source) => {
    const moves = chessEngineService.possibleMoves(source);
    setPossibleMoves(moves);
  };

  const resetMove = () => {
    setMove({ from: "", to: "" });
  };

  return (
    <div className={theme}>
      <div className="flex justify-center">Status: {status}</div>
      <Squares boardGame={boardGame}>
        {({
          piece,
          label,
          ranks,
          fileIndex,
          rankIndex,
        }: {
          piece: any;
          label: Source;
          ranks: any[];
          fileIndex: number;
          rankIndex: number;
        }) => {
          return (
            <Square
              moves={move}
              possibleMoves={possibleMoves}
              key={label}
              label={label}
              rankes={ranks}
              files={files}
              fileIndex={fileIndex}
              rankIndex={rankIndex}
              handleSelectedPiece={() => handleSelectedPiece(label)}
            >
              <Piece
                piece={piece}
                handleHoveringPiece={() => {
                  handleHoveringPiece(label);
                }}
                label={boardGame[rankIndex][fileIndex]}
              />
            </Square>
          );
        }}
      </Squares>
    </div>
  );
};
