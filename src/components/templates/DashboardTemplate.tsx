import { Layout } from 'antd';
import TopHeader from '../organisms/TopHeader';
import Sidebar from '../organisms/Sidebar';
import styles from '../styles/DashboardTemplate.module.css';
import { useState } from 'react';

const { Content } = Layout;

interface DashboardTemplateProps {
  children: React.ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar
        onSearch={(query) => console.log("Search query:", query)}
        collapsed={collapsed}
        onCollapse={setCollapsed}
      />
      <Layout className={styles.layout}>
        <TopHeader collapsed={collapsed} onCollapse={setCollapsed} />
        <Content className={`${styles.content} ${collapsed ? styles.contentCollapsed : ''}`}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardTemplate;