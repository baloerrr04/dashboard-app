import { Form, Button } from "antd";
import Input from "../atoms/Input";
import styles from "./styles/SearchForm.module.css";
import { PlusOutlined } from "@ant-design/icons";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { query: string }) => {
    onSearch(values.query);
  };

  return (
    <Form form={form} onFinish={handleSubmit} className={styles.form}>
      <Form.Item name="query" className={styles.formItem}>
        <Input placeholder="Search..." />
      </Form.Item>
      <Form.Item className={styles.formItem}>
        <Button
          type="primary"
          className={styles.addButton}
          icon={<PlusOutlined />}
        />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
