interface GameState {
  cells: Cell[];
  currentPlayer: string;
  winner: string | null;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }