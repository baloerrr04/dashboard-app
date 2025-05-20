import React from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./styles/TableSelectionInfo.module.css";

interface Props {
  selectedRowKeys: string[];
}

const TableSelectionInfo: React.FC<Props> = ({ selectedRowKeys }) => {
  if (selectedRowKeys.length === 0) return null;

  return (
    <div className={styles.selectionActions}>
      <Text className={styles.selectedText}>
        {selectedRowKeys.length} selected of 1000 data
      </Text>
      <Button danger icon={<DeleteOutlined />} size="small">
        Delete
      </Button>
    </div>
  );
};

export default TableSelectionInfo;
