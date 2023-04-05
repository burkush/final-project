import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectCartItems } from '../cartSlice';
import styles from './CartStatus.module.scss';
import cartIcon from '../../../assets/img/icons/cart-icon.svg';

const CartStatus: React.FC = () => {
  const items = useAppSelector(selectCartItems);
  const quantity = items.length;

  return (
    <Link to="/cart">
      <div className={styles.cart}>
        <div className={styles.cart__icon}>
          <img src={cartIcon} alt="Cart icon" />
        </div>
        <span className={styles.cart__text}>
          Cart (
          <span
            className={`${styles.cart__quantity} ${
              quantity >= 1 ? styles.cart__quantity_added : ''
            }`}
          >
            {quantity}
          </span>
          )
        </span>
      </div>
    </Link>
  );
};

export default CartStatus;
