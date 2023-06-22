import { useState } from 'react';
import { Cell } from '../components/Cell';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const dirs: { y: number; x: number }[] = [
    { y: -1, x: -1 },
    { y: -1, x: 0 },
    { y: -1, x: 1 },
    { y: 0, x: 1 },
    { y: 1, x: 1 },
    { y: 1, x: 0 },
    { y: 1, x: -1 },
    { y: 0, x: -1 },
  ];

  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    for (const dir of dirs) {
      console.log(dir);
      for (let i = 1; i < 8; i++) {
        if (board[y + dir.y * i] === undefined) {
          console.log('a');
          break;
        }
        if (board[x + dir.x * i] === undefined) {
          console.log('b');
          break;
        } else if (board[y + dir.y * i][x + dir.x * i] === turnColor) {
          console.log('c');
          break;
        } else if (board[y + dir.y * i][x + dir.x * i] === 0) {
          console.log('d');
          break;
        } else if (
          board[y + dir.y * i][x + dir.x * i] !== turnColor &&
          board[y + dir.y * (i + 1)][x + dir.x * (i + 1)] === turnColor
        ) {
          console.log(i);
          newBoard[y][x] = turnColor;
          for (let m = 1; m < i + 1; m++) {
            newBoard[y + dir.y * m][x + dir.x * m] = turnColor;
            console.log(m);
          }
          setTurnColor(3 - turnColor);
          break;
        }
      }
      setBoard(newBoard);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <Cell key={`${x}-${y}`} color={color} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
