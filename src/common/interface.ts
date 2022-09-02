import { Source } from "./types";
import { Move } from "chess.js";

export interface IMove extends Move {
  from: Source | any;
  to: Source | any;
  points?: number;
}
