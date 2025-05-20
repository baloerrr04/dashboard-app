import CustomCard from "../atoms/Card";
import RangePicker from "../atoms/RangePicker";
import styles from "./styles/ChartCard.module.css";
import React from "react";

interface AreaChartCardProps {
  children: React.ReactNode
}

const ChartCard: React.FC<AreaChartCardProps> = ({ children }) => (
  <CustomCard
    title={
      <div>
        <div className={styles.cardTitle}>Project Graph</div>
        <div className={styles.cardSubtitle}>This is a long chart description</div>
      </div>
    }
    extra={<RangePicker size="small" />}
    padding="16px"
  >
    <div style={{ height: 230 }}>
     {children}
    </div>
  </CustomCard>
);

export default ChartCard;
