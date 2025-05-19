import { Card, Table } from 'antd';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import RangePicker from '../atoms/RangePicker';
import { SearchOutlined, MoreOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import TableActions from '../molecules/TableActions';
import Badge from '../atoms/Badge';

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
      <Button type="link" className="p-0 text-blue-500">
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

const DataTable: React.FC<DataTableProps> = ({ dataSource, selectedRowKeys }) => (
  <Card
    title={
      <div>
        <div className="font-medium">Title Table</div>
        <div className="text-xs text-gray-500">Data table information</div>
      </div>
    }
    extra={
      <div className="flex items-center">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ width: 200 }}
          className="mr-2 border-gray-300"
        />
        <RangePicker className="mr-2" />
        <Button type="primary" className="bg-green-500" icon={<PlusOutlined />}>
          Add Data
        </Button>
        <Button type="text" icon={<MoreOutlined />} />
      </div>
    }
    className="p-4"
  >
    <div className="mb-2">
      {selectedRowKeys.length > 0 && (
        <div className="flex items-center mb-2">
          <Text className="mr-2">
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