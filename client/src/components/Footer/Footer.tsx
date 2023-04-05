import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';
import facebookIcon from '../../assets/img/icons/facebook.svg';
import instaIcon from '../../assets/img/icons/insta.svg';
import twitterIcon from '../../assets/img/icons/twitter.svg';
import pinterestIcon from '../../assets/img/icons/pinterest.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__contact}>
            <h2 className={styles.footer__title}>Contact Us</h2>
            <div className={styles.footer__contactItem}>
              <h3 className={styles.footer__subtitle}>Email</h3>
              <p className={styles.footer__text}>needhelp@Organia.com</p>
            </div>

            <div className={styles.footer__contactItem}>
              <h3 className={styles.footer__subtitle}>Phone</h3>
              <p className={styles.footer__text}>666 888 888</p>
            </div>

            <div className={styles.footer__contactItem}>
              <h3 className={styles.footer__subtitle}>Address</h3>
              <p className={styles.footer__text}>
                88 road, borklyn street, USA
              </p>
            </div>
          </div>

          <div className={styles.footer__socials}>
            <Logo />
            <p className={styles.footer__text}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className={styles.footer__links}>
              <div className={styles.footer__insta}>
                <img src={instaIcon} alt="Instagram" />
              </div>
              <div className={styles.footer__facebook}>
                <img src={facebookIcon} alt="Facebook" />
              </div>
              <div className={styles.footer__twitter}>
                <img src={twitterIcon} alt="Twitter" />
              </div>
              <div className={styles.footer__pinterest}>
                <img src={pinterestIcon} alt="Pinterest" />
              </div>
            </div>
          </div>

          <div className={styles.footer__utilities}>
            <h2 className={styles.footer__title}>Utility Pages</h2>
            <ul className={styles.footer__utilitiesList}>
              <li>
                <a href="/">Style Guide</a>
              </li>
              <li>
                <a href="/">404 Not Found</a>
              </li>
              <li>
                <a href="/">Password Protected</a>
              </li>
              <li>
                <a href="/">Licences</a>
              </li>
              <li>
                <a href="/">Changelog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.footer__copyright}>
        Copyright &copy; Organick | Designed by VictorFlow Templates - Powered
        by Webflow
      </p>
    </footer>
  );
};

export default Footer;
