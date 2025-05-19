import { Card, Progress } from 'antd';
import Badge from '../atoms/Badge';
import RangePicker from '../atoms/RangePicker';

const GaugeChartCard: React.FC = () => (
  <Card
    title={
      <div>
        <div className="font-medium">Project Graph</div>
        <div className="text-xs text-gray-500">This is a long chart description</div>
      </div>
    }
    extra={<RangePicker size="small" />}
    className="p-4"
  >
    <div className="flex justify-center items-center h-[230px]">
      <div className="text-center">
        <div className="relative">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-xl font-bold">65 km/h</div>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Badge color="green" text="Green" />
          <Badge color="yellow" text="Yellow" />
          <Badge color="red" text="Green" />
        </div>
      </div>
    </div>
  </Card>
);

export default GaugeChartCard;