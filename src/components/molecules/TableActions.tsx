import { Space } from 'antd';
import Button from '../atoms/Button';
import { EditOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';

const TableActions: React.FC = () => (
  <Space size="small">
    <Button type="primary" size="small" className="bg-blue-400 hover:bg-blue-500">
      <EditOutlined />
    </Button>
    <Button type="primary" size="small" className="bg-yellow-400 hover:bg-yellow-500">
      <SettingOutlined />
    </Button>
    <Button type="primary" size="small" danger>
      <DeleteOutlined />
    </Button>
  </Space>
);

export default TableActions;