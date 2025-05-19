import { Layout, Dropdown, Menu, Badge, Avatar } from 'antd';
import { UserOutlined, DownOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';
import styles from '../styles/TopHeader.module.css';

const { Header } = Layout;

interface TopHeaderProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ collapsed, onCollapse }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div className={styles.leftSection}>
        <MenuOutlined className={styles.toggleIcon} onClick={() => onCollapse(!collapsed)} />
        <div className={styles.title}>Dashboard</div>
      </div>
      <div className={styles.actions}>
        <Badge count={3} className={styles.notification}>
          <BellOutlined className={styles.notificationIcon} />
        </Badge>
        <Dropdown overlay={menu}>
          <div className={styles.userDropdown}>
            <Avatar icon={<UserOutlined />} className={styles.avatar} />
            <span className={styles.userName}>Admin</span>
            <DownOutlined className={styles.dropdownIcon} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default TopHeader;