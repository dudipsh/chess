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
  const [selectedMove, setSelectedMove] = useState<string>("");
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]);
  const files = INITIAL_FILES;

  useEffect(() => {
    if (move.from) {
      setSelectedMove(move.from);
    }
    if (move.to) {
      setSelectedMove(move.to);
    }
  }, [move]);

  useEffect(() => {
    setBoardGame(chessEngineService.getBoard());
  }, []);

  const highlightPath = (source: Source) => {
    const moves = chessEngineService.possibleMoves(source);
    setPossibleMoves(moves);
  };

  const handleSelectedSquare = (square: Source) => {
    const move = chessEngineService.setMove(square);
    if (!move.from && !move.to) {
      setMove({ ...move });
      setSelectedMove("");
      setPossibleMoves([]);
      return;
    }
    if (move.from) {
      highlightPath(move.from as Source);
    }
    if (move.to) {
      setBoardGame([...chessEngineService.getBoard()]);
      setStatus(chessEngineService.status());
    }
    setMove({ ...move });
    pcMove();
  };

  const pcMove = () => {
    if (chessEngineService.turn() === "b") {
      setTimeout(() => {
        const bestMove = chessEngineService.getBestMove();
        setSelectedMove(bestMove);
        setBoardGame([...chessEngineService.getBoard()]);
        setStatus(chessEngineService.status());
      }, 1000);
    }
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
              selectedMove={selectedMove}
              possibleMoves={possibleMoves}
              key={label}
              label={label}
              rankes={ranks}
              files={files}
              fileIndex={fileIndex}
              rankIndex={rankIndex}
              onSelectedPiece={() => handleSelectedSquare(label)}
            >
              <Piece piece={piece} label={boardGame[rankIndex][fileIndex]} />
            </Square>
          );
        }}
      </Squares>
    </div>
  );
};
