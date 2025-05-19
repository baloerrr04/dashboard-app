import { Badge as AntdBadge } from 'antd';
import { BadgeProps as AntdBadgeProps } from 'antd';

interface BadgeProps extends AntdBadgeProps {
  color?: string;
  text?: string;
  status?: 'success' | 'error' | 'default' | 'processing' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({ color, text, status }) => (
  <AntdBadge color={color} text={text} status={status} />
);

export default Badge;