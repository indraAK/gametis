import { Link } from "react-router-dom";

import styles from "./style.module.css";

const NotFoundPage = () => {
  return (
    <section className={styles.not_found}>
      <h1 className="title">404 - Page Not Found</h1>
      <Link to="/" className={`btn btn-primary ${styles.link_btn}`}>
        Back to Homepage
      </Link>
    </section>
  );
};

export default NotFoundPage;
