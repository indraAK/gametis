import { useState, useRef } from "react";
import styles from "./style.module.css";
import GameList from "../../components/game-list";
import Spinner from "../../components/loaders/spinner";
import { gameCategories } from "../../utils/constants";
import useSWR from "swr";
import useFetcher from "../../hooks/useFetcher";

const PopularGames = () => {
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("all");
  const requestKey = useRef(
    `api/games?sort-by=popularity&platform=${platform}`
  );

  if (category)
    requestKey.current = `api/games?sort-by=popularity&platform=${platform}&category=${category}`;

  const { fetcher } = useFetcher(process.env.REACT_APP_API_BASE_URL);
  const { data, isLoading, error } = useSWR(requestKey.current, fetcher);

  const currentYear = new Date().getFullYear();
  const currentMonth = Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  );

  return (
    <section className={`container ${styles.content_popular}`}>
      <h1 className="title">
        Top 10 {category ? "Free" : ""}{" "}
        <span className="text-lead">{category || "Free To Play"}</span> Games
        for{" "}
        <span className="text-lead">
          {platform === "all"
            ? "PC and Browser"
            : platform === "pc"
            ? "PC"
            : "Browser"}
        </span>{" "}
        in {currentMonth} {currentYear}
      </h1>

      <div className={styles.filter_container}>
        <div className={styles.filter}>
          <label htmlFor="category">More Top 10's:</label>
          <select
            id="category"
            defaultValue="select_category"
            onChange={(e) => setCategory(e.target.value)}
            disabled={isLoading}
          >
            <option disabled value="select_category">
              Select Category
            </option>
            {gameCategories.map((category) => (
              <option key={category} value={category}>
                Top {category}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filter}>
          <label htmlFor="platform">Platform:</label>
          <select
            id="platform"
            defaultValue="all"
            onChange={(e) => setPlatform(e.target.value)}
            disabled={isLoading}
          >
            <option disabled value="all">
              Select Platform
            </option>
            <option value="pc">Windows (PC)</option>
            <option value="browser">Browser</option>
            <option value="all">All Platforms</option>
          </select>
        </div>
      </div>

      {isLoading && <Spinner />}
      {error && <p>{error.message}</p>}
      {data?.status === 0 && <p>{data.status_message}</p>}
      {data?.length ? <GameList items={data.slice(0, 10)} /> : null}
    </section>
  );
};

export default PopularGames;
