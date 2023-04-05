import React, { useState, ChangeEvent } from 'react';
import { Product } from '../types';
import { useAppDispatch } from '../../../app/hooks';
import { addItem } from '../../cart/cartSlice';
import styles from './ProductModal.module.scss';
import RatingStars from '../../../components/RatingStars/RatingStars';
import Prices from '../../../components/Prices/Prices';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

interface ProductModalProps {
  product: Product;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isModalOpen,
  setIsModalOpen
}) => {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState<number>(1);

  const [activeTab, setActiveTab] = useState<'description' | 'additional'>(
    'description'
  );

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };

  const handleTabClick = (tab: 'description' | 'additional') => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    if (quantity >= 1) {
      dispatch(addItem({ product, quantity }));
      setIsModalOpen(false);
    } else {
      alert(
        'Product quantity cannot be less than zero. Select at least one product'
      );
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__container}>
          <button
            type="button"
            title="Close"
            className={styles.modal__close}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            X
          </button>
          <div className={styles['product-info']}>
            <div className={styles['product-info__image']}>
              <span className={styles['product-info__type']}>
                {product.type}
              </span>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles['product-info__main-data']}>
              <h2 className={styles['product-info__title']}>{product.title}</h2>
              <RatingStars rating={product.rating} />
              <Prices price={product.price} discount={product.discount} />
              <p className={styles['product-info__short-description']}>
                {product.shortDescription}
              </p>

              <form className={styles['add-form']}>
                <label htmlFor="quantity" className={styles['add-form__label']}>
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className={styles['add-form__input']}
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(e)}
                />
                <ButtonLink
                  text="Add To Cart"
                  theme="blue"
                  type="button"
                  onClick={handleAddToCart}
                />
              </form>
            </div>
          </div>

          <div className={styles['product-additional']}>
            <div className={styles['product-additional__tabs']}>
              <button
                type="button"
                className={`${styles['product-additional__tab']} ${
                  activeTab === 'description'
                    ? styles['product-additional__tab_active']
                    : ''
                }`}
                onClick={() => handleTabClick('description')}
              >
                Product Description
              </button>

              <button
                type="button"
                className={`${styles['product-additional__tab']} ${
                  activeTab === 'additional'
                    ? styles['product-additional__tab_active']
                    : ''
                }`}
                onClick={() => handleTabClick('additional')}
              >
                Additional Info
              </button>
            </div>

            <p className={styles['product-additional__content']}>
              {activeTab === 'description'
                ? product.longDescription
                : product.additionalInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
