import React from 'react';
import styles from './Banner.module.scss';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h3 className={styles.banner__subtitle}>100% Natural Food</h3>
          <h1 className={styles.banner__title}>
            Choose the best healthier way of life
          </h1>

          <ButtonLink text="Explore Now" theme="yellow" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
