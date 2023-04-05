import React from 'react';
import styles from './About.module.scss';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import aboutImage from '../../../assets/img/content/about-image.png';
import mailboxImage from '../../../assets/img/icons/mailbox.svg';
import veganFoodImage from '../../../assets/img/icons/vegan-food.svg';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <img src={aboutImage} alt="Fruits" className={styles.about__image} />

        <div className={styles.about__content}>
          <h3 className={styles.about__subtitle}>About Us</h3>
          <h2 className={styles.about__title}>
            We Believe in Working Accredited Farmers
          </h2>
          <p className={styles.about__text}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <div className={styles.about__list}>
            <div className={styles['about__list-item']}>
              <div className={styles['about__list-img']}>
                <img src={veganFoodImage} alt="Vegan food" />
              </div>

              <div className={styles['about__list-content']}>
                <h3 className={styles['about__list-title']}>
                  Quality Standards
                </h3>
                <p className={styles['about__list-text']}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>

            <div className={styles['about__list-item']}>
              <div className={styles['about__list-img']}>
                <img src={mailboxImage} alt="Mailbox" />
              </div>

              <div className={styles['about__list-content']}>
                <h3 className={styles['about__list-title']}>
                  Organic Foods Only
                </h3>
                <p className={styles['about__list-text']}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <ButtonLink text="Shop Now" theme="blue" />
        </div>
      </div>
    </section>
  );
};

export default About;
