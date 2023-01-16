import ReactDOM from "react-dom";
import styles from "./style.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title }) => {
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <div className={styles.page_header}>
      <button onClick={() => navigate(-1)} className={styles.back_btn}>
        <BiArrowBack size={22} color="#eaeaea" />
      </button>
      <h2 className={styles.page_title}>{title}</h2>
    </div>,
    document.getElementById("root")
  );
};

export default PageHeader;
