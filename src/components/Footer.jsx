import styles from '../styles/components/Footer.module.css';

function Footer() {
    return (
      <div className={styles.footer} >
        <span className={styles.footerSpan} > 
            <img className={styles.logo} src="./images/logo.png" alt="Logo"/>
            <p className={styles.footerMarca}>© 2021 Spotify AB</p>
        </span>
      </div>
    );
  }
  
export default Footer;