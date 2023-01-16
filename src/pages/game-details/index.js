import { useParams } from "react-router";
import { AiOutlineHeart, AiFillWindows, AiFillHeart } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import styles from "./style.module.css";
import Spinner from "../../components/loaders/spinner";
import { useGameStore } from "../../stores/liked-games";
import useSwr from "swr";
import useFetcher from "../../hooks/useFetcher";
import PageHeader from "../../components/layout/page-header";

const GameDetails = () => {
  const { id } = useParams();
  const { fetcher } = useFetcher(process.env.REACT_APP_API_BASE_URL);
  const { data: game, isLoading, error } = useSwr(`api/game?id=${id}`, fetcher);

  const likedGames = useGameStore((state) => state.games);
  const addGames = useGameStore((state) => state.addGames);
  const removeGame = useGameStore((state) => state.removeGame);

  const isInLikedGames = (gameId) =>
    likedGames.some((likedGame) => likedGame.id === gameId);

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <p>
        {error.message}: {error.info.status_message}
      </p>
    );

  return (
    <>
      <PageHeader title={game.title} />
      <section className={`container ${styles.content_details}`}>
        <article className={styles.article}>
          <img
            className={styles.thumbnail}
            src={game.thumbnail}
            alt={game.title}
          />
          <h1 className={styles.title}>About {game.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: game.description }}></div>

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

          {game.screenshots && <h3>{game.title} Screenshots</h3>}
          {game.screenshots && (
            <div className={styles.screenshot_grid}>
              {game.screenshots.map(({ image }) => (
                <div key={image}>
                  <img src={image} alt="Game Screenshot" />
                </div>
              ))}
            </div>
          )}

          {game.minimum_system_requirements && (
            <h3>Minimum System Requirements (Windows)</h3>
          )}
          {game.minimum_system_requirements && (
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
            aria-label="like games"
            className={`btn ${styles.btn_like}`}
            title="Like Games"
            onClick={() =>
              isInLikedGames(game.id) ? removeGame(game.id) : addGames(game)
            }
          >
            {isInLikedGames(game.id) ? (
              <AiFillHeart aria-hidden={true} fontSize="30px" color="#dc2626" />
            ) : (
              <AiOutlineHeart aria-hidden={true} fontSize="30px" color="#fff" />
            )}
          </button>
        </article>
      </section>
    </>
  );
};

export default GameDetails;
