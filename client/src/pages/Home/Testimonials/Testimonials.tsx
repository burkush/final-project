import React from 'react';
import styles from './Testimonials.module.scss';
import avatar from '../../../assets/img/content/testimonials-avatar.jpg';
import stars from '../../../assets/img/content/stars.svg';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__content}>
          <h2 className={styles.testimonials__title}>Testimonials</h2>
          <h3 className={styles.testimonials__subtitle}>
            What Our Customer Saying?
          </h3>

          <div className={styles.testimonials__card}>
            <img
              src={avatar}
              alt="Avatar Sara"
              className={styles.testimonials__avatar}
            />
            <img
              src={stars}
              alt="Stars"
              className={styles.testimonials__stars}
            />
            <p className={styles.testimonials__text}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <h3 className={styles.testimonials__name}>Sara Taylor</h3>
            <h4 className={styles.testimonials__role}>Customer</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
