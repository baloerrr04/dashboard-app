import { Layout } from 'antd';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { MoreOutlined, ClockCircleOutlined, BellOutlined } from '@ant-design/icons';

const { Header } = Layout;

const TopHeader: React.FC = () => (
  <Header className="bg-white px-4 flex items-center justify-between shadow-sm h-14">
    <div className="flex items-center">
      <Button type="text" icon={<MoreOutlined />} />
      <span className="ml-2 font-semibold">PT. ElectroIndo Inti Dinamika</span>
    </div>
    <div className="flex items-center">
      <Text className="mr-4 text-gray-500">Thu, 10 Apr 2025 09:28:05</Text>
      <Button type="text" icon={<ClockCircleOutlined />} className="mr-2" />
      <Button type="text" icon={<BellOutlined />} className="mr-2" />
      <div className="w-8 h-8 bg-blue-500 rounded-full" />
    </div>
  </Header>
);

export default TopHeader;