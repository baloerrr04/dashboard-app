import { useState } from "react";
import { Row, Col } from "antd";
import StatsCard from "../molecules/StatsCard";
import AreaChartCard from "../organisms/AreaChartedCard";
import GaugeChartCard from "../organisms/GaugeChartCard";
import DataTable from "../organisms/DataTable";
import DashboardTemplate from "../templates/DashboardTemplate";
import styles from "./styles/Dashboard.module.css";
import {
  ProjectOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";

const areaChartData = [
  { date: "12/10/2024", value: 50 },
  { date: "13/10/2024", value: 130 },
  { date: "14/10/2024", value: 170 },
  { date: "15/10/2024", value: 120 },
  { date: "16/10/2024", value: 40 },
];

const tableData = [
  {
    key: "1",
    cell1: "Table Cell",
    cell2: "Table Cell",
    cell3: "Table Cell",
    cell4: "Table Cell",
  },
  {
    key: "2",
    cell1: "Table Cell",
    cell2: "Table Cell",
    cell3: "Table Cell",
    cell4: "Table Cell",
  },
  {
    key: "3",
    cell1: "Table Cell",
    cell2: "Table Cell",
    cell3: "Table Cell",
    cell4: "Table Cell",
  },
];

const Dashboard: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  return (
    <DashboardTemplate>
      <Row gutter={16} className={styles.statsRow}>
        <Col span={6}>
          <StatsCard
            title="Ongoing Project"
            value={78}
            icon={
              <ProjectOutlined style={{ fontSize: "24px", color: "#3b82f6" }} />
            }
            badgeText="9.23%"
            iconBgColor="#bfdbfe"
            badgeColor="red"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="Completed Project"
            value={62}
            icon={
              <CheckCircleOutlined
                style={{ fontSize: "24px", color: "#a3e635" }}
              />
            }
            badgeColor="green"
            badgeText="8.15%"
            iconBgColor="#fefcbf"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="Completed Project"
            value={62}
            icon={
              <FileTextOutlined
                style={{ fontSize: "24px", color: "#c084fc" }}
              />
            }
            badgeColor="green"
            badgeText="8.15%"
            iconBgColor="#e9d5ff"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            title="User"
            value={140}
            icon={
              <UserOutlined style={{ fontSize: "24px", color: "#10b981" }} />
            }
            badgeColor="green"
            badgeText="9.15%"
            iconBgColor="#d1fae5"
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

    </DashboardTemplate>
  );
};

export default Dashboard;
