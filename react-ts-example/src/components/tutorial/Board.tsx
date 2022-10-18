import { useState } from "react";
import Square from "./Square";

type StateType = {
  squares: (string | null)[];
  xIsNext: boolean;
};

const Board = () => {
  const [state, setState] = useState<StateType>({
    squares: Array(9).fill(null),
    xIsNext: true,
  });
  const handleClick = (i: number) => {
    const newSquares = state.squares.slice();
    newSquares[i] = state.xIsNext ? "X" : "O";
    const newState: StateType = {
      squares: newSquares,
      xIsNext: !state.xIsNext,
    };
    setState(newState);
  };
  const renderSquare = (i: number) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };
  const status = "Next player: " + state.xIsNext ? "X" : "O";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
