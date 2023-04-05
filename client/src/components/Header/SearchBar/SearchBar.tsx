import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import styles from './SearchBar.module.scss';
import searchIcon from '../../../assets/img/icons/search-icon.svg';

const SearchBar: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <form className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        placeholder={width < 335 ? 'Search...' : ''}
      />

      <div className={styles.search__icon}>
        <img src={searchIcon} alt="Search icon" />
      </div>
    </form>
  );
};

export default SearchBar;
