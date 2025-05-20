import { Card, Table, Badge } from "antd";
import CustomCard from "../atoms/Card";
import TableActions from "../molecules/TableActions";
import TableSelectionInfo from "../molecules/TableSelectionInfo";
import TableToolbar from "../molecules/TableToolbar";
import styles from "./styles/DataTable.module.css";

interface TableData {
  key: string;
  cell1: string;
  cell2: string;
  cell3: string;
  cell4: string;
}

interface DataTableProps {
  dataSource: TableData[];
  selectedRowKeys: string[];
  onRowSelectionChange: (selectedRowKeys: string[]) => void;
}

const columns = [
  {
    title: "Table Header",
    dataIndex: "cell1",
    key: "cell1",
  },
  {
    title: "Table Header",
    dataIndex: "cell2",
    key: "cell2",
  },
  {
    title: "Table Header",
    dataIndex: "cell3",
    key: "cell3",
    render: () => (
      <button className={styles.badgeButton}>Badge</button>
    ),
  },
  {
    title: "Table Header",
    dataIndex: "cell4",
    key: "cell4",
    render: () => <Badge status="success" text="Table Cell" />,
  },
  {
    title: "Action",
    key: "action",
    render: () => <TableActions />,
  },
];

const DataTable: React.FC<DataTableProps> = ({ dataSource, selectedRowKeys, onRowSelectionChange }) => (
  <CustomCard
    title={
      <div>
        <div className={styles.cardTitle}>Title Table</div>
        <div className={styles.cardSubtitle}>Data table information</div>
      </div>
    }
    extra={<TableToolbar />}
    padding="24px"
    className={styles.card}
  >
    <div className={styles.selectionInfo}>
      <TableSelectionInfo selectedRowKeys={selectedRowKeys} />
    </div>
    <Table
      rowSelection={{
        selectedRowKeys,
        // onChange: onRowSelectionChange,
      }}
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={{
        total: 1000,
        showSizeChanger: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} entries`,
      }}
    />
  </CustomCard>
);

export default DataTable;
