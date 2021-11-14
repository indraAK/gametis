// styles
import styles from "./GameList.module.css";
import GameItem from "./GameItem";

const GameList = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((game) => (
        <GameItem key={game.id} item={game} />
      ))}
    </div>
  );
};

export default GameList;
