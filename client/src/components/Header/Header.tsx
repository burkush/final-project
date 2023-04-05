import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import CartStatus from '../../features/cart/CartStatus/CartStatus';

const Header: React.FC = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => setHamburgerClicked(!hamburgerClicked);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={
        scrolled ? `${styles.header} ${styles.header_scrolled}` : styles.header
      }
    >
      <div className={styles.header__container}>
        <Logo />

        <nav
          className={
            hamburgerClicked ? `${styles.nav} ${styles.nav_active}` : styles.nav
          }
        >
          <ul className={styles.nav__list}>
            <li>
              <Link to="/" className={styles.nav__link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.nav__link}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.nav__link}>
                Pages
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.nav__link}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.nav__link}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.nav__link}>
                News
              </Link>
            </li>
          </ul>

          <SearchBar />
        </nav>

        <div className={styles.header__mobileVisible}>
          <CartStatus />

          <div
            className={styles.header__hamburger}
            onClick={handleHamburgerClick}
          >
            {hamburgerClicked ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
