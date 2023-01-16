import { BiSearch } from "react-icons/bi";
import styles from "./style.module.css";

const SearchForm = ({ value, setValue, ...props }) => {
  return (
    <div className={styles.field}>
      <BiSearch className={styles.search_icon} />
      <input
        id={props.id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        placeholder="Search games..."
        className={styles.input_field}
      />
    </div>
  );
};

export default SearchForm;
