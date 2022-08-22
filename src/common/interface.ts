import { Source } from "./types";

export interface IPiece {
  id: string;
  image?: string;
  position?: IPosition;
}

export interface IPosition {
  rank: number;
  file: number;
  id: string;
}

export interface ISquare {
  // index: number;
  id: string;
  isEven: boolean;
  position: IPosition;
  // piece?: IPiece;
}

export interface IMove {
  from: Source | string;
  to: Source | string;
}
