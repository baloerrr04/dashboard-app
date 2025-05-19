import { Card } from 'antd';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import RangePicker from '../atoms/RangePicker';
import styles from './styles/AreaChartCard.module.css';

interface AreaChartData {
  date: string;
  value: number;
}

interface AreaChartCardProps {
  data: AreaChartData[];
}

const AreaChartCard: React.FC<AreaChartCardProps> = ({ data }) => (
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
    <div style={{ height: 230 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export default AreaChartCard;