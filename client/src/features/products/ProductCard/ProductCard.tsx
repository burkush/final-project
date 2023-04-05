import React from 'react';
import { Product } from '../types';
import styles from './ProductCard.module.scss';
import RatingStars from '../../../components/RatingStars/RatingStars';
import Prices from '../../../components/Prices/Prices';

interface ProductProps {
  product: Product;
  handleProductClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    product: Product
  ) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  product,
  handleProductClick
}) => {
  return (
    <div
      className={styles.product}
      onClick={(event) => handleProductClick(event, product)}
    >
      <div className={styles.product__container}>
        <span className={styles.product__type}>{product.type}</span>

        <img
          src={product.image}
          alt={product.title}
          className={styles.product__image}
        />

        <div className={styles.product__content}>
          <h3 className={styles.product__title}>{product.title}</h3>
          <hr className={styles.product__hr} />
          <div className={styles.product__info}>
            <Prices price={product.price} discount={product.discount} />
            <RatingStars rating={product.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
