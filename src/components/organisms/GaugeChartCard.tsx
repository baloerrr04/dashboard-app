import { Progress } from 'antd';
import Badge from '../atoms/Badge';
import RangePicker from '../atoms/RangePicker';
import styles from './styles/GaugeChartCard.module.css';
import CustomCard  from '../atoms/Card';
import ChartCard from '../molecules/ChartCard';


const GaugeChartCard: React.FC = () => (
 <ChartCard>
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
 </ChartCard>
);

export default GaugeChartCard;