import { Layout, Divider } from 'antd';
import { MenuOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import styles from '../styles/TopHeader.module.css';
import RangePicker from '../atoms/RangePicker';
import Select from '../atoms/Select';
import Button from '../atoms/Button';
import Search from '../atoms/Search';

const { Header } = Layout;

interface TopHeaderProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ collapsed, onCollapse }) => {
  return (
    <div className={styles.headerContainer}>
      <Header className={`${styles.header} ${collapsed ? styles.headerFull : ''}`}>
        <div className={styles.leftSection}>
          <MenuOutlined className={styles.toggleIcon} onClick={() => onCollapse(!collapsed)} />
          <div className={styles.title}>PT. Electrindo Inti Dinamika</div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.dateInfo}>
            Thu, 10 Apr 2025 09:28:05
          </div>
          <div className={styles.userActions}>
            <BellOutlined className={styles.notificationIcon} />
            <UserOutlined className={styles.userAvatar} />
          </div>
        </div>
      </Header>
      
      <div className={styles.subHeader}>
        <div className={styles.dashboard}>
          Dashboard
        </div>
        <div className={styles.controlsContainer}>
          <div className={styles.searchContainer}>
            <Search />
          </div>
          <Divider type="vertical" className={styles.divider} />
          <div className={styles.dateRangeContainer}>
            <RangePicker size="middle" />
          </div>
          <Divider type="vertical" className={styles.divider} />
          <div className={styles.filterContainer}>
            <Select defaultValue="Section A">
              <Select.Option value="section-a">Section A</Select.Option>
              <Select.Option value="section-b">Section B</Select.Option>
            </Select>
            <Button type="primary" className={styles.actionButton}>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;