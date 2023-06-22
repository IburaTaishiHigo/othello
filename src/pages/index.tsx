import { useState } from 'react';
import { Cell } from '../components/Cell';
import styles from './index.module.css';
import { useGame } from '../hooks/useGamek';

const Home = () => {
  const {board, onClick} = useGame ();
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
