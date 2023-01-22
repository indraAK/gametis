import { useState, useRef, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./style.module.css";
import GameList from "../../components/game-list";
import Spinner from "../../components/loaders/spinner";
import useSWR from "swr";
import useFetcher from "../../hooks/useFetcher";
import SearchForm from "../../components/search-form";

const HomePage = () => {
  const searchbarRef = useRef(null);
  const { fetcher } = useFetcher(process.env.REACT_APP_API_BASE_URL);
  const { data: games, error, isLoading } = useSWR("api/games", fetcher);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedKeyword = useDebounce(searchTerm, 100);
  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia("(max-width:576px)").matches
  );

  function filterGames(games) {
    return games.filter((game) =>
      game.title.toLowerCase().includes(debouncedKeyword.toLowerCase())
    );
  }

  function isEmptySearchResults() {
    return debouncedKeyword.length > 0 && filterGames(games).length === 0;
  }

  function goToSearchForm() {
    const { offsetTop } = searchbarRef.current;
    window.scrollTo({
      top: isMobileView ? offsetTop - 10 : offsetTop - 80,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const mqlChangeHandler = ({ matches }) =>
      matches ? setIsMobileView(true) : setIsMobileView(false);

    window
      .matchMedia("(max-width:576px)")
      .addEventListener("change", mqlChangeHandler);

    return () => window.removeEventListener("change", mqlChangeHandler);
  }, []);

  return (
    <>
      <section className={styles.content_hero}>
        <div className="text-center container">
          <h1 className={styles.content_title}>
            Discover the Best <span className="text-lead">Free-To-Play</span>{" "}
            Games with Ease{" "}
          </h1>
          <p className={`text-muted ${styles.content_subtitle}`}>
            Track what you&apos;ve played and search for what to play next.
          </p>
          <button
            onClick={goToSearchForm}
            className={`btn btn-primary ${styles.browse_btn}`}
          >
            Browse Games
          </button>
        </div>
      </section>

      {isLoading && (
        <div className="container">
          <Spinner />
        </div>
      )}

      {error ? (
        <div className="container">
          <p>{error.message}</p>
          {error.info?.message && <p>{error.info?.message}</p>}
        </div>
      ) : null}

      {games ? (
        <>
          <section
            ref={searchbarRef}
            className={styles.search_bar}
            style={{ top: isMobileView ? 0 : "70px" }}
          >
            <SearchForm
              value={searchTerm}
              setValue={setSearchTerm}
              id="search-form"
            />
            {isEmptySearchResults() && (
              <p className="text-center">Sorry, no games found 🙃</p>
            )}
          </section>
          <section className={`container ${styles.content_games}`}>
            <GameList items={filterGames(games)} />
          </section>
        </>
      ) : null}
    </>
  );
};

export default HomePage;
