import { useState } from 'react';
import { Row, Col } from 'antd';
import Select from '../atoms/Select';
import Button from '../atoms/Button';
import { PlusOutlined } from '@ant-design/icons';
import StatsCard from '../molecules/StatsCard';
import AreaChartCard from '../organisms/AreaChartedCard';
import GaugeChartCard from '../organisms/GaugeChartCard';
import DataTable from '../organisms/DataTable';
import DashboardTemplate from '../templates/DashboardTemplate';
import RangePicker from '../atoms/RangePicker';

const areaChartData = [
  { date: '12/10/2024', value: 50 },
  { date: '13/10/2024', value: 130 },
  { date: '14/10/2024', value: 170 },
  { date: '15/10/2024', value: 120 },
  { date: '16/10/2024', value: 40 },
];

const tableData = [
  { key: '1', cell1: 'Table Cell', cell2: 'Table Cell', cell3: 'Table Cell', cell4: 'Table Cell' },
  { key: '2', cell1: 'Table Cell', cell2: 'Table Cell', cell3: 'Table Cell', cell4: 'Table Cell' },
  { key: '3', cell1: 'Table Cell', cell2: 'Table Cell', cell3: 'Table Cell', cell4: 'Table Cell' },
];

const Dashboard: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  return (
    <DashboardTemplate onSearch={handleSearch}>
      <div className="flex items-center">
        <RangePicker className="mr-2" />
        <Select defaultValue="Setting A" style={{ width: 130 }} className="mr-2">
          <Select.Option value="settingA">Setting A</Select.Option>
          <Select.Option value="settingB">Setting B</Select.Option>
        </Select>
        <Button type="primary" icon={<PlusOutlined />} className="bg-green-500" />
      </div>
      <Row gutter={16} className="mb-6">
        <Col span={6}>
          <StatsCard
            title="Ongoing Project"
            value={78}
            icon={<path d="M22 12h-4l-3 9L9 3l-3 9H2" />}
            badgeColor="red"
            badgeText="9.23%"
            iconBgColor="bg-blue-100"
            iconColor="#3B82F6"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="Completed Project"
            value={62}
            icon={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
            badgeColor="green"
            badgeText="8.15%"
            iconBgColor="bg-yellow-100"
            iconColor="#F59E0B"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="Completed Project"
            value={62}
            icon={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>}
            badgeColor="green"
            badgeText="8.15%"
            iconBgColor="bg-purple-100"
            iconColor="#8B5CF6"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="User"
            value={140}
            icon={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>}
            badgeColor="green"
            badgeText="9.15%"
            iconBgColor="bg-green-100"
            iconColor="#10B981"
          />
        </Col>
      </Row>
      <Row gutter={16} className="mb-6">
        <Col span={12}>
          <AreaChartCard data={areaChartData} />
        </Col>
        <Col span={12}>
          <GaugeChartCard />
        </Col>
      </Row>
      <DataTable
        dataSource={tableData}
        selectedRowKeys={selectedRowKeys}
        onRowSelectionChange={setSelectedRowKeys}
      />
      <div className="mt-4 text-center text-xs text-gray-500">
        Copyright © 2023 PT. ElectroIndo Inti Dinamika
      </div>
    </DashboardTemplate>
  );
};

export default Dashboard;