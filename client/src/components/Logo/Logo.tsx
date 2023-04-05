import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './Logo.module.scss';
import logo from '../../assets/img/logo.svg';

const Logo = () => {
  const { width } = useWindowSize();

  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logo__image} />

        {width > 576 && <h2 className={styles.logo__title}>Organick</h2>}
      </div>
    </Link>
  );
};

export default Logo;
