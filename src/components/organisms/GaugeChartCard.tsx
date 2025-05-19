import { Card, Progress } from 'antd';
import Badge from '../atoms/Badge';
import RangePicker from '../atoms/RangePicker';
import styles from '../styles/GaugeChartCard.module.css';

const GaugeChartCard: React.FC = () => (
  <Card
    title={
      <div>
        <div className={styles.cardTitle}>Project Graph</div>
        <div className={styles.cardSubtitle}>This is a long chart description</div>
      </div>
    }
    extra={<RangePicker size="small" />}
    className={styles.card}
  >
    <div className={styles.chartContainer}>
      <div className={styles.chartContent}>
        <div className={styles.progressWrapper}>
          <Progress
            type="dashboard"
            percent={65}
            gapDegree={70}
            strokeWidth={8}
            strokeColor={{
              '0%': '#10B981',
              '50%': '#F59E0B',
              '100%': '#EF4444',
            }}
          />
          <div className={styles.progressCenter}></div>
        </div>
        <div className={styles.badgeContainer}>
          <Badge color="green" text="Green" />
          <Badge color="yellow" text="Yellow" />
          <Badge color="red" text="Green" />
        </div>
      </div>
    </div>
  </Card>
);

export default GaugeChartCard;