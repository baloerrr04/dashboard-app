import { Card, Table, Badge } from 'antd';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import RangePicker from '../atoms/RangePicker';
import { MoreOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import TableActions from '../molecules/TableActions';
import styles from '../styles/DataTable.module.css';
import Search from '../atoms/Search';

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
    title: 'Table Header',
    dataIndex: 'cell1',
    key: 'cell1',
  },
  {
    title: 'Table Header',
    dataIndex: 'cell2',
    key: 'cell2',
  },
  {
    title: 'Table Header',
    dataIndex: 'cell3',
    key: 'cell3',
    render: () => (
      <Button type="link" className={styles.badgeButton}>
        Badge
      </Button>
    ),
  },
  {
    title: 'Table Header',
    dataIndex: 'cell4',
    key: 'cell4',
    render: () => (
      <Badge status="success" text="Table Cell" />
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <TableActions />,
  },
];

const DataTable: React.FC<DataTableProps> = ({ dataSource, selectedRowKeys}) => (
  <Card
    title={
      <div>
        <div className={styles.cardTitle}>Title Table</div>
        <div className={styles.cardSubtitle}>Data table information</div>
      </div>
    }
    extra={
      <div className={styles.extraContainer}>
        <Search/>
        <RangePicker className={styles.rangePicker} />
        <Button type="primary" className={styles.addButton} icon={<PlusOutlined />}>
          Add Data
        </Button>
        <Button type="text" icon={<MoreOutlined />} />
      </div>
    }
    className={styles.card}
  >
    <div className={styles.selectionInfo}>
      {selectedRowKeys.length > 0 && (
        <div className={styles.selectionActions}>
          <Text className={styles.selectedText}>
            {selectedRowKeys.length} selected of 1000 data
          </Text>
          <Button danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </div>
      )}
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
  </Card>
);

export default DataTable;