import { IMAGE_PATH } from "../../../utils/board-utils";

interface IPieceProps {
  piece: any;
  label: string;
}
export const Piece = ({ piece, label }: IPieceProps) => {
  const pieceName =
    piece?.color === "b" ? piece?.type : piece?.type.toUpperCase();
  return (
    <>
      {pieceName && IMAGE_PATH[pieceName] ? (
        <img
          width="100%"
          src={IMAGE_PATH[pieceName]}
          key={label}
          alt={label.toString()}
        />
      ) : undefined}
    </>
  );
};
