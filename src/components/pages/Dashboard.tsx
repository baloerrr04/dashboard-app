import { useState } from 'react';
import { Row, Col} from 'antd';
import StatsCard from '../molecules/StatsCard';
import AreaChartCard from '../organisms/AreaChartedCard';
import GaugeChartCard from '../organisms/GaugeChartCard';
import DataTable from '../organisms/DataTable';
import DashboardTemplate from '../templates/DashboardTemplate';
import styles from '../styles/Dashboard.module.css';


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

  return (
    <DashboardTemplate >
      <div className={styles.header}>
        
      </div>
      <Row gutter={16} className={styles.statsRow}>
        <Col span={6}>
          <StatsCard
            title="Ongoing Project"
            value={78}
            icon={<path d="M22 12h-4l-3 9L9 3l-3 9H2" />}
            badgeColor="red"
            badgeText="9.23%"
            iconBgColor="#bfdbfe"
            iconColor="#3b82f6"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="Completed Project"
            value={62}
            icon={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
            badgeColor="green"
            badgeText="8.15%"
            iconBgColor="#fefcbf"
            iconColor="#f59e0b"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="Completed Project"
            value={62}
            icon={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>}
            badgeColor="green"
            badgeText="8.15%"
            iconBgColor="#e9d5ff"
            iconColor="#8b5cf6"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="User"
            value={140}
            icon={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>}
            badgeColor="green"
            badgeText="9.15%"
            iconBgColor="#d1fae5"
            iconColor="#10b981"
          />
        </Col>
      </Row>
      <Row gutter={16} className={styles.chartRow}>
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
      <div className={styles.footer}>
        Copyright © 2023 PT. ElectroIndo Inti Dinamika
      </div>
    </DashboardTemplate>
  );
};

export default Dashboard;