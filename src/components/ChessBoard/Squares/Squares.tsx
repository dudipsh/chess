import { Source } from "../../../common/types";
import { Square } from "../Square/Square";
import { Piece } from "../Piece/Piece";
import { INITIAL_FILES } from "../../../utils/board-utils";

interface SquaresProps {
  boardGame: any[];
  // handleSelectedPiece: (source: Source) => void;
  children: any;
}

interface SquareChildrenProps {
  piece: string;
  label: Source;
  ranks: any[];
  fileIndex: number;
  rankIndex: number;
}

const emptySquare = { type: "", color: "", square: "" };

export const Squares = ({
  boardGame,
  // handleSelectedPiece,
  children,
}: SquaresProps) => {
  const files = INITIAL_FILES;
  const getPiece = (
    isBlack: boolean,
    rankIndex: number,
    file: string,
    fileIndex: number
  ) => {
    return boardGame[rankIndex][fileIndex];
  };

  const getLabel = (ranks: any[], rankIndex: number, fileIndex: number) => {
    return `${files[ranks.length - fileIndex - 1]}${ranks.length - rankIndex}`;
  };
  return (
    <div>
      <div className="chess-board">
        {boardGame.map((ranks: any[], rankIndex) => {
          return ranks.map((file, fileIndex) => {
            const piece = getPiece(false, rankIndex, file, fileIndex) as string;
            const label = getLabel(boardGame, rankIndex, fileIndex) as Source;
            return children({ piece, label, ranks, fileIndex, rankIndex });
            // <Square
            //   moves={{ from: "", to: "" }}
            //   key={label}
            //   label={label}
            //   rankes={ranks}
            //   files={files}
            //   fileIndex={fileIndex}
            //   rankIndex={rankIndex}
            //   handleSelectedPiece={() => handleSelectedPiece(label)}
            // >
            //   <Piece piece={piece} label={boardGame[rankIndex][fileIndex]} />
            // </Square>
          });
        })}
      </div>
    </div>
  );
};
