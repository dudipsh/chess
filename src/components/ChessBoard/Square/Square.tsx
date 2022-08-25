import { RANKS } from "../../../utils/board-utils";
interface SquareProps {
  label: string;
  children?: JSX.Element;
  onSelectedPiece: (data: any) => void;
  possibleMoves?: string[];
  fileIndex: number;
  rankes: number[];
  rankIndex: number;
  files: string[];
  moves: any;
}

export const Square = ({
  children,
  label,
  onSelectedPiece,
  possibleMoves,
  fileIndex,
  rankes,
  rankIndex,
  files,
  moves,
}: SquareProps) => {
  const isEven = (fileIndex + rankIndex) % 2 === 0;
  const color = isEven ? `white-square` : `black-square`;
  const rankNumber = fileIndex === 0 ? rankes.length - rankIndex : "";
  const fileName =
    rankIndex === rankes.length - 1 ? files[RANKS[fileIndex + 1]] : "";

  return (
    <div
      className={`square ${color} `}
      key={label}
      id={label}
      aria-hidden="true"
      onClick={onSelectedPiece}
    >
      <div
        className={
          (moves.from === label ? " active" : "") +
          (possibleMoves && possibleMoves?.indexOf(label) > -1
            ? " highlight"
            : "")
        }
      ></div>
      {fileName ? <div className={`file-label`}>{fileName}</div> : null}
      {rankNumber ? <div className={`rank-label`}>{rankNumber}</div> : null}
      {children}
    </div>
  );
};
