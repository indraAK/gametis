import GameList from "../../components/game-list";
import styles from "./style.module.css";
import { useGameStore } from "../../stores/liked-games";

const LikedGames = () => {
  const likedGames = useGameStore((state) => state.games);

  return (
    <section className={`container ${styles.content_liked}`}>
      <h1 className={`title ${styles.content_title}`}>Your Liked Games</h1>
      {likedGames.length === 0 ? (
        <p>No liked games yet 🙄</p>
      ) : (
        <GameList items={likedGames} />
      )}
    </section>
  );
};

export default LikedGames;
