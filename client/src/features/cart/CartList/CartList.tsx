import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectCartItems } from '../cartSlice';
import calculateRelevantPrice from '../../../helpers/calculateRelevantPrice';
import styles from './CartList.module.scss';
import CartItem from '../CartItem/CartItem';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import OrderForm from './OrderForm/OrderForm';

const CartList: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const items = useAppSelector(selectCartItems);

  const totalSum = items.reduce((acc, current) => {
    if (current.product.discount) {
      return (
        acc +
        Number(
          calculateRelevantPrice(
            current.product.price,
            current.product.discount
          )
        ) *
          current.quantity
      );
    }
    return acc + current.product.price * current.quantity;
  }, 0);

  const totalDiscount = items.reduce((acc, current) => {
    if (current.product.discount) {
      return (
        acc +
        (current.product.price -
          Number(
            calculateRelevantPrice(
              current.product.price,
              current.product.discount
            )
          )) *
          current.quantity
      );
    }

    return acc;
  }, 0);

  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        {!items.length ? (
          <div className={styles.list__absent}>No items added</div>
        ) : (
          <>
            {items.map((item) => (
              <CartItem
                key={item.product._id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
            <div className={styles.list__total}>
              <table className={styles['list__total-table']}>
                <tbody>
                  <tr>
                    <th>Total Sum</th>
                    <td>${totalSum}</td>
                  </tr>
                  <tr>
                    <th>Discount</th>
                    <td>${totalDiscount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {showForm && <OrderForm items={items} />}

            {!showForm && (
              <div className={styles.form__open}>
                <ButtonLink
                  text="To order"
                  theme="blue"
                  type="button"
                  onClick={() => setShowForm(true)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CartList;
