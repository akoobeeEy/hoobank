import styles from "../../style";
import { Navbar } from "../navbar";

export const Header = () => {
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </header>
  );
};
