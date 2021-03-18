//import { Route, Router, Switch } from 'react-router';
//import { Link } from 'react-router-dom';
import styles from '../styles/components/Header.module.css';
import Ajuda from './Ajuda'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <Router>
      <div className={styles.header} >
        <span className={styles.headerSpan} >
          <img className={styles.logo} src="./images/logo.png" alt="Logo" />
          <Link to="/Ajuda"> Ajuda</Link>
        </span>

        <Switch>
          <Route path="/Ajuda">
            <Ajuda />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;