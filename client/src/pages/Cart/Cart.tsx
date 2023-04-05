import React from 'react';
import styles from './Cart.module.scss';
import CartList from '../../features/cart/CartList/CartList';

const Cart: React.FC = () => {
  return (
    <main className={styles.cart}>
      <section className={styles.cart__banner}>
        <div className={styles['cart__banner-container']}>
          <h2 className={styles.cart__title}>Cart</h2>
        </div>
      </section>
      <CartList />
    </main>
  );
};

export default Cart;
