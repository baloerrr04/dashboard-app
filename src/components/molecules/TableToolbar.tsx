import React from "react";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import RangePicker from "../atoms/RangePicker";
import Button from "../atoms/Button";
import Search from "../atoms/Search";
import styles from "./styles/TableToolbar.module.css"; // atau bisa buat terpisah

const TableToolbar: React.FC = () => (
  <div className={styles.extraContainer}>
    <Search />
    <RangePicker className={styles.rangePicker} />
    <Button type="primary" className={styles.addButton} icon={<PlusOutlined />}>
      Add Data
    </Button>
    <Button type="text" icon={<MoreOutlined />} />
  </div>
);

export default TableToolbar;
