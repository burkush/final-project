import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { Product } from '../types';
import {
  selectAllProducts,
  getProductsStatus,
  getProductsError,
  fetchProducts
} from '../productsSlice';
import styles from './ProductsList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import ProductModal from '../ProductModal/ProductModal';

const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectAllProducts);
  const productsStatus = useAppSelector(getProductsStatus);
  const error = useAppSelector(getProductsError);

  const [showMore, setShowMore] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  let content;

  if (productsStatus === 'loading') {
    content = (
      <div className={`loading-container ${styles.products__loader}`}>
        <div className="dot-flashing"></div>
      </div>
    );
  } else if (productsStatus === 'succeeded') {
    const displayedProducts = showMore ? products : products.slice(0, 8);
    content = displayedProducts.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
        handleProductClick={() => handleProductClick(product)}
      />
    ));
  } else if (productsStatus === 'failed') {
    content = <p className={styles.products__error}>{error}</p>;
  }

  const buttonText = showMore ? 'Hide All' : 'Load More';

  return (
    <section className={styles.products}>
      <div className={styles.products__list}>{content}</div>
      <ButtonLink
        text={buttonText}
        theme="blue"
        type="button"
        onClick={() => setShowMore(!showMore)}
      />
      {isModalOpen && (
        <ProductModal
          product={selectedProduct as Product}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default ProductsList;
