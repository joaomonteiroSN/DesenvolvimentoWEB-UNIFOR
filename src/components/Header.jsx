import styles from '../styles/components/Header.module.css';

//import Home from './Home'
//import Footer from './Footer'
import Ajuda from './Ajuda'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header() {
  return (
      <div className={styles.header} >
        <span className={styles.headerSpan} >
          <img className={styles.logo} src="./images/logo.png" alt="Logo" />
          <Link to="/Ajuda" className={styles.buttomAjuda}>
            Ajuda
          </Link>
        </span>
      </div>
  );
}

export default Header;