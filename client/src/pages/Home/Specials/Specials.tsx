import React from 'react';
import styles from './Specials.module.scss';

const Specials: React.FC = () => {
  return (
    <section className={styles.specials}>
      <div className={styles.specials__container}>
        <div className={styles.specials__card}>
          <div className={styles.specials__content}>
            <h3 className={styles.specials__subtitle}>Natural!!</h3>
            <h2 className={styles.specials__title}>Get Garden Fresh Fruits</h2>
          </div>
        </div>

        <div className={styles.specials__card}>
          <div className={styles.specials__content}>
            <h3
              className={`${styles.specials__subtitle} ${styles.specials__subtitle_green}`}
            >
              Offer!!
            </h3>
            <h2
              className={`${styles.specials__title} ${styles.specials__title_blue}`}
            >
              Get 10% off on Vegetables
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
