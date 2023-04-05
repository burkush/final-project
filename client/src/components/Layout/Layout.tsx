import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.layout__content}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
