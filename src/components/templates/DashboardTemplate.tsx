import { Layout, Typography} from 'antd';
import { ReactNode } from 'react';
import Sidebar from '../organisms/Sidebar';
import TopHeader from '../organisms/TopHeader';

const { Content } = Layout;
const { Title } = Typography;

interface DashboardTemplateProps {
  children: ReactNode;
  onSearch: (query: string) => void;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children, onSearch }) => (
  <Layout className="min-h-screen">
    <Sidebar onSearch={onSearch} />
    <Layout>
      <TopHeader />
      <Content className="p-6 bg-gray-100">
        <div className="mb-4 items-center">
          <Title level={5} className="m-0">Dashboard</Title>
          {children}
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default DashboardTemplate;