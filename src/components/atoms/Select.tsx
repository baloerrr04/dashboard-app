import { Select as AntdSelect } from 'antd';
import type { SelectProps as AntdSelectProps } from 'antd';
import styles from '../styles/Select.module.css';

const { Option } = AntdSelect;

interface SelectComponent extends React.FC<AntdSelectProps> {
  Option: typeof Option;
}

const Select: SelectComponent = ({ defaultValue, className, style, children }) => (
  <AntdSelect
    defaultValue={defaultValue}
    className={`${styles.select} ${className || ''}`}
    style={style}
  >
    {children}
  </AntdSelect>
);

// Menambahkan properti statis Option
Select.Option = Option;

export default Select;