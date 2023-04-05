import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { updateQuantity, removeItem } from '../cartSlice';
import { Product } from '../../products/types';
import styles from './CartItem.module.scss';
import Prices from '../../../components/Prices/Prices';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const dispatch = useAppDispatch();

  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +e.target.value;
    setItemQuantity(newQuantity);

    dispatch(
      updateQuantity({
        id: product._id,
        quantity: newQuantity
      })
    );
  };

  const handleDeleteItem = () => {
    dispatch(removeItem(product._id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__info}>
        <div className={styles.item__image}>
          <img src={product.image} alt={product.title} />
        </div>
        <h2 className={styles.item__title}>{product.title}</h2>
        <Prices price={product.price} discount={product.discount} />
      </div>
      <form className={styles.form}>
        <label htmlFor="quantity" className={styles.form__label}>
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className={styles.form__input}
          min="1"
          value={itemQuantity}
          onChange={(e) => handleQuantityChange(e)}
        />
        <button
          type="button"
          title="Delete from cart"
          className={styles.form__delete}
          onClick={handleDeleteItem}
        >
          X
        </button>
      </form>
    </div>
  );
};

export default CartItem;
