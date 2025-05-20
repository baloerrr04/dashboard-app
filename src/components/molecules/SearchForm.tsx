import { Button } from "antd";
import styles from "./styles/SearchForm.module.css";
import { PlusOutlined } from "@ant-design/icons";
import Search from "../atoms/Search";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = () => {

  return (
    <div className={styles.form}>
      <Search />
      <Button
        type="primary"
        icon={<PlusOutlined />}
      />
    </div>
  );
};

export default SearchForm;
