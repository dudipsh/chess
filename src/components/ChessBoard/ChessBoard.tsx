import "./chessBoard.css";
import { Square } from "./Square/Square";
import { Piece } from "./Piece/Piece";
import { useEffect, useState } from "react";

import { INITIAL_FILES } from "../../utils/board-utils";

import { chessEngineService } from "../../services/chess-engine.service";
import { Color, Theme } from "../../common/enums";
import { Source } from "../../common/types";
import { Squares } from "./Squares/Squares";
import { GameOverModal } from "../modals/GameOeverModal/GameOeverModal";

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
  const [move, setMove] = useState<any>({ from: "", to: "" });
  const [selectedMove, setSelectedMove] = useState<string>("");
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]);
  const [openGameOverModal, setOpenGameOverModal] = useState<boolean>(false);
  const files = INITIAL_FILES;

  useEffect(() => {
    if (status === "Checkmate") {
      setOpenGameOverModal(true);
    }
  }, [status]);

  useEffect(() => {
    setBoardGame(chessEngineService.getBoard());
  }, []);

  const highlightPath = (source: Source) => {
    const moves = chessEngineService
      .possibleMoves(source)
      .map((move) => move.to);
    setPossibleMoves(moves);
  };

  const handleSelectedSquare = (square: Source) => {
    const newMove = chessEngineService.makeAMove(square);
    if (newMove) {
      setMove({ ...newMove });
      setSelectedMove("");
      setBoardGame(chessEngineService.getBoard());
      pcMove();
      setPossibleMoves([]);
    } else {
      setMove({ ...move, from: square });
      highlightPath(square);
    }
  };

  const pcMove = () => {
    if (chessEngineService.turn() === "b") {
      setTimeout(() => {
        const bestMove = chessEngineService.getBestMove();
        setSelectedMove(bestMove);
        setBoardGame([...chessEngineService.getBoard()]);
        setStatus(chessEngineService.status());
      }, 300);
    }
  };

  const resetGame = () => {
    setOpenGameOverModal(false);
    chessEngineService.resetGame();
    setBoardGame(chessEngineService.getBoard());
    setStatus(chessEngineService.status());
  };

  const message = () => {
    if (chessEngineService.turn() === "b") {
      return "You Won! :)";
    } else {
      return "You Lost!";
    }
  };

  const msg = message();
  return (
    <div className={theme}>
      <GameOverModal
        show={openGameOverModal}
        message={msg}
        onClose={() => resetGame()}
      />
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
