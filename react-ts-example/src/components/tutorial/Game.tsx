import { useEffect, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../../helper/index";

type SquareType = string | null;

type GameType = {
  history: [
    {
      squares: SquareType[];
    }
  ];
  xIsNext: boolean;
};

type CurrentType = {
  squares: SquareType[];
};

const Game = () => {
  const [state, setState] = useState<GameType>({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
  });
  const [current, setCurrent] = useState<CurrentType>();
  const handleClick = (i: number) => {
    const newSquares = state.history.squares.slice();
    if (calculateWinner(state.history.squares) || state.history.squares[i]) {
      return;
    }
    newSquares[i] = state.xIsNext ? "X" : "O";
    const newState: GameType = {
      history: [
        {
          squares: newSquares,
        },
      ],
      xIsNext: !state.xIsNext,
    };
    setState(newState);
  };
  useEffect(() => {
    setCurrent(state.history[history.length - 1]);
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (state.xIsNext ? "X" : "O");
    }
  }, []);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current} onClick={() => {}} />
      </div>
      <div className="game-info">
        {/* <div>Status</div> */}
        {/* <ol>TODO</ol> */}
      </div>
    </div>
  );
};

export default Game;
