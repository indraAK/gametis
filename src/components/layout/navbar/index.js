import { NavLink } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import styles from "./style.module.css";
import { navbarLinks } from "../../../utils/constants";

const activeStyle = {
  color: "#38bdf8",
};

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/" style={{ lineHeight: 0 }}>
          <IoGameController className={styles.logo} />
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            {navbarLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
