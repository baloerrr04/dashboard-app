import { DatePicker } from 'antd';
import { RangePickerProps as AntdRangePickerProps } from 'antd/es/date-picker';

const { RangePicker: AntdRangePicker } = DatePicker;

interface RangePickerProps extends AntdRangePickerProps {
  className?: string;
  size?: 'large' | 'middle' | 'small';
}

const RangePicker: React.FC<RangePickerProps> = ({ className, size }) => (
  <AntdRangePicker className={className} size={size} />
);

export default RangePicker;