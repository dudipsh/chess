import { createContext, useState } from "react";

export const GameBoardContext = createContext({
  board: [] as any[],
  chess: {} as any,
  selectedPiece: {} as any,
  setSelectedPiece: (piece: string) => {},
});

// export const GameContextProvider = ({
//   children,
// }: {
//   children: JSX.Element;
// }) => {
//   const [board, setBoard] = useState<any[]>([]);
//   const [chess, setChess] = useState({});
//
//   return <GameBoardContext.Provider>{children}</GameBoardContext.Provider>;
// };
