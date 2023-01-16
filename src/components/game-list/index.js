import styles from "./style.module.css";
import GameCard from "../game-card";

const GameList = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
