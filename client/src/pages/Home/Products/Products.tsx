import React from 'react';
import styles from './Products.module.scss';
import ProductsList from '../../../features/products/ProductsList/ProductsList';

const Products: React.FC = () => {
  return (
    <section className={styles.products}>
      <div className={styles.products__container}>
        <h3 className={styles.products__subtitle}>Categories</h3>
        <h2 className={styles.products__title}>Our Products</h2>
        <ProductsList />
      </div>
    </section>
  );
};

export default Products;
