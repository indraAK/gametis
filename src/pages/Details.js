import { useContext } from "react";
import { useParams } from "react-router";
import { AiFillHeart, AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { useFetch } from "../hooks/useFetch";
import { FavoritesContext } from "../context/FavoritesContext";

// styles
import styles from "./Details.module.css";

import Spinner from "../components/ui/Spinner";

const Details = () => {
  const { id } = useParams();
  const {
    data: game,
    isPending,
    error,
  } = useFetch(`${process.env.REACT_APP_API_URL}/game?id=${id}`, {
    id,
  });

  const { gameIsFavorite, addToFavorite } = useContext(FavoritesContext);

  return (
    <section className={styles.game_details}>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {game && (
        <article className={styles.article}>
          <img
            className={styles.thumbnail}
            src={game.thumbnail}
            alt={game.title}
          />
          <h1 className={styles.title}>About {game.title}</h1>
          {game.description.split(/(\r\n|\r|\n)/gi).map((paragraph, idx) => (
            <p key={idx} style={{ margin: "20px 0", fontSize: "15px" }}>
              {paragraph}
            </p>
          ))}

          <h3>Additional Information</h3>
          <ul className={styles.info_list}>
            <li>
              <span className="text-muted">Title</span>
              <p>{game.title}</p>
            </li>
            <li>
              <span className="text-muted">Developer</span>
              <p>{game.developer}</p>
            </li>
            <li>
              <span className="text-muted">Publisher</span>
              <p>{game.publisher}</p>
            </li>
            <li>
              <span className="text-muted">Release Date</span>
              <p>{game.release_date}</p>
            </li>
            <li>
              <span className="text-muted">Genre</span>
              <p>{game.genre}</p>
            </li>
            <li>
              <span className="text-muted">Platform</span>
              <div className={styles.platform}>
                {game.platform === "Windows" ? (
                  <AiFillWindows className={styles.platform_icon} />
                ) : (
                  <GoBrowser className={styles.platform_icon} />
                )}
                <p>{game.platform}</p>
              </div>
            </li>
          </ul>

          {game?.screenshots && <h3>{game.title} Screenshots</h3>}
          {game?.screenshots && (
            <div className={styles.screenshot_grid}>
              {game?.screenshots?.map(({ image }) => (
                <div key={image}>
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          )}

          {game?.minimum_system_requirements && (
            <h3>Minimum System Requirements (Windows)</h3>
          )}
          {game?.minimum_system_requirements && (
            <ul className={styles.info_list}>
              <li>
                <span className="text-muted">OS</span>
                <p>{game.minimum_system_requirements.os}</p>
              </li>
              <li>
                <span className="text-muted">Processor</span>
                <p>{game.minimum_system_requirements.processor}</p>
              </li>
              <li>
                <span className="text-muted">Memory</span>
                <p>{game.minimum_system_requirements.memory}</p>
              </li>
              <li>
                <span className="text-muted">Graphics</span>
                <p>{game.minimum_system_requirements.graphics}</p>
              </li>
              <li>
                <span className="text-muted">Storage</span>
                <p>{game.minimum_system_requirements.storage}</p>
              </li>
            </ul>
          )}

          <button
            onClick={() => addToFavorite(game)}
            className={`btn ${styles.btn_favorite}`}
            title={
              gameIsFavorite(game.id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            <AiFillHeart
              className={styles.heart_icon}
              color={gameIsFavorite(game.id) ? "#ff0000" : "#fff"}
            />
          </button>
        </article>
      )}
    </section>
  );
};

export default Details;
