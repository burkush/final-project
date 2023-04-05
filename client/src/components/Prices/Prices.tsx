import React from 'react';
import calculateRelevantPrice from '../../helpers/calculateRelevantPrice';
import styles from './Prices.module.scss';

interface PricesProps {
  price: number;
  discount?: number;
}

const Prices: React.FC<PricesProps> = ({ price, discount }) => {
  return (
    <div className={styles.prices}>
      <span
        className={`${styles.prices__price} ${
          discount && styles.prices__price_irrelevant
        }`}
      >
        ${price.toFixed(2)}
      </span>
      {discount && (
        <span className={styles.prices__discount}>
          ${calculateRelevantPrice(price, discount)}
        </span>
      )}
    </div>
  );
};

export default Prices;
