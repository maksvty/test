import {Link} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to='/'>MaxFood</Link>
    </header>
  )
};

export default Header;
