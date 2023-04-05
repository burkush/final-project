import styles from './NotFound.module.scss';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

const NotFound = () => {
  return (
    <main className={styles.notfound}>
      <div className={styles.notfound__container}>
        <div className={styles.notfound__content}>
          <h1 className={styles.notfound__title}>404</h1>
          <h2 className={styles.notfound__subtitle}>Page not found</h2>
          <p className={styles.notfound__text}>
            The page you are looking for doesn't exist or has been moved
          </p>
          <ButtonLink text="Go to Homepage" theme="blue" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
