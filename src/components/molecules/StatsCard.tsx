import { Card } from 'antd';
import Badge from '../atoms/Badge';
import DropdownMenu from './DropdownMenu';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  badgeColor: string;
  badgeText: string;
  iconBgColor: string;
  iconColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, badgeColor, badgeText, iconBgColor, iconColor }) => (
  <Card className="p-4">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <div className={`${iconBgColor} p-2 rounded-md mr-3`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={iconColor} strokeWidth="2">
            {icon}
          </svg>
        </div>
        <div>
          <div className="text-gray-500 text-sm">{title}</div>
          <div className="text-2xl font-bold">{value}</div>
        </div>
      </div>
      <DropdownMenu />
    </div>
    <Badge color={badgeColor} text={badgeText} />
  </Card>
);

export default StatsCard;