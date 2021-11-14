import { NavLink } from "react-router-dom";
import { IoGameController, IoTrendingUp, IoHeart } from "react-icons/io5";

// styles
import styles from "./BottomBar.module.css";

const BottomBar = () => {
  const activeStyle = {
    color: "#fff",
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoGameController className={styles.icon} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/popular"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoTrendingUp className={styles.icon} />
            <span>Popular</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoHeart className={styles.icon} />
            <span>Favorites</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomBar;
