import Navbar from "./navbar";
import Footer from "./footer";
import Appbar from "./appbar";
import styles from "./style.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Appbar />
      <main className={`${styles.main_content}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
