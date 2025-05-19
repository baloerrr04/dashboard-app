import React, { useState } from 'react';
import Input from '../atoms/Input';
import { SearchOutlined } from '@ant-design/icons';

interface SearchFormProps {
  onSearch: (query: string) => void;
  width?: number;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, width }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        prefix={<SearchOutlined className="text-gray-400" />}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width }}
        className="border-gray-300"
      />
    </form>
  );
};

export default SearchForm;