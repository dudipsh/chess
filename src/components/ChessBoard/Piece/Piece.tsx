import { IMAGE_PATH } from "../../../utils/board-utils";

interface IPieceProps {
  piece: any;
  label: string;
  handleHoveringPiece: (data: any) => void;
}
export const Piece = ({ piece, label, handleHoveringPiece }: IPieceProps) => {
  const pieceName =
    piece?.color === "b" ? piece?.type : piece?.type.toUpperCase();
  return (
    <>
      {pieceName && IMAGE_PATH[pieceName] ? (
        <>
          <div onClick={() => handleHoveringPiece(piece)} aria-hidden={true}>
            <img
              width="100%"
              src={IMAGE_PATH[pieceName]}
              key={label}
              alt={pieceName}
            />
          </div>
        </>
      ) : undefined}
    </>
  );
};
