import { Space } from 'antd';
import Button from '../atoms/Button';
import { EditOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './styles/TableActions.module.css';

const TableActions: React.FC = () => (
  <Space size="small">
    <Button type="primary" size="small" className={styles.buttonEdit}>
      <EditOutlined />
    </Button>
    <Button type="primary" size="small" className={styles.buttonSetting}>
      <SettingOutlined />
    </Button>
    <Button type="primary" size="small" danger>
      <DeleteOutlined />
    </Button>
  </Space>
);

export default TableActions;
