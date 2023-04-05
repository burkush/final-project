import styles from './ThankYou.module.scss';
import thankYou from '../../assets/img/content/thank-you.jpg';

const ThankYou = () => {
  return (
    <main className={styles.thanks}>
      <h1 className={styles.thanks__title}>Thank you for your order</h1>
      <img
        src={thankYou}
        alt="Thank you for your order"
        className={styles.thank__image}
      />
    </main>
  );
};

export default ThankYou;
