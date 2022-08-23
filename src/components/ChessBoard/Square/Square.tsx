import { RANKS } from "../../../utils/board-utils";
interface SquareProps {
  label: string;
  children?: JSX.Element;
  handleSelectedPiece: (data: any) => void;
  fileIndex: number;
  rankes: number[];
  rankIndex: number;
  files: string[];
  moves: any;
}

export const Square = ({
  children,
  label,
  handleSelectedPiece,
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
      className={`square ${color} ` + (moves.from === label ? " active" : "")}
      key={label}
      id={label}
      aria-hidden="true"
      onClick={handleSelectedPiece}
    >
      {fileName ? <div className={`file-label`}>{fileName}</div> : null}
      {rankNumber ? <div className={`rank-label`}>{rankNumber}</div> : null}
      {children}
    </div>
  );
};
