import { DatePicker } from 'antd';
import { RangePickerProps as AntdRangePickerProps } from 'antd/es/date-picker';
import styles from './styles/RangePicker.module.css';

const { RangePicker: AntdRangePicker } = DatePicker;

interface RangePickerProps extends AntdRangePickerProps {
  className?: string;
  size?: 'large' | 'middle' | 'small';
}

const RangePicker: React.FC<RangePickerProps> = ({ className, size }) => (
  <AntdRangePicker
    className={`${styles.rangePicker} ${className || ''}`}
    size={size}
  />
);

export default RangePicker;