import { NavLink } from "react-router-dom";
import {
  IoGameControllerOutline,
  IoHeartOutline,
  IoRocketOutline,
} from "react-icons/io5";
import styles from "./style.module.css";

const linkMenus = [
  { icon: IoGameControllerOutline, text: "Home", href: "/" },
  { icon: IoRocketOutline, text: "Popular", href: "/popular" },
  { icon: IoHeartOutline, text: "Liked", href: "/liked" },
];

const Appbar = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {linkMenus.map((link) => (
          <li key={link.text}>
            <NavLink to={link.href}>
              <link.icon className={styles.icon} />
              <span>{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Appbar;
