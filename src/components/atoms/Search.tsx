import React from 'react';
import styles from '../styles/Search.module.css';

const Search: React.FC = () => (
  <input
    type="search"
    className={styles.searchInput}
    placeholder="Search"
  />
);

export default Search;