import React from 'react';
import styles from './styles/Search.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchProps {
  prefix?: React.ReactNode;
}

const Search: React.FC<SearchProps> = () => (
  <Input
    placeholder="Search"
    prefix={<SearchOutlined />}
    style={{ width: 200 }}
    className={styles.searchInput}
  />
);

export default Search;