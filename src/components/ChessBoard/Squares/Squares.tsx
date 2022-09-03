import { Source } from "../../../common/types";
import { INITIAL_FILES } from "../../../common/constants";

interface SquaresProps {
  boardGame: any[];
  children: any;
}
export const Squares = ({ boardGame, children }: SquaresProps) => {
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
          });
        })}
      </div>
    </div>
  );
};
