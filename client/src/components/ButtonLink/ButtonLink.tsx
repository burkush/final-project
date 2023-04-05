import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';
import linkArrow from '../../assets/img/icons/link-arrow.svg';

interface ButtonLinkProps {
  text: string;
  theme: 'blue' | 'yellow';
  type?: 'button' | 'link';
  onClick?: () => void;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  theme,
  type,
  onClick
}) => {
  if (type === 'button') {
    return (
      <button
        className={`${styles.link} ${
          theme === 'blue' ? styles.link_blue : styles.link_yellow
        }`}
        onClick={onClick}
      >
        <div className={styles.link__container}>
          <span className={styles.link__text}>{text}</span>
          <div className={styles.link__icon}>
            <img src={linkArrow} alt="Arrow icon" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <Link
      to="/"
      className={`${styles.link} ${
        theme === 'blue' ? styles.link_blue : styles.link_yellow
      }`}
    >
      <div className={styles.link__container}>
        <span className={styles.link__text}>{text}</span>
        <div className={styles.link__icon}>
          <img src={linkArrow} alt="Arrow icon" />
        </div>
      </div>
    </Link>
  );
};

export default ButtonLink;
