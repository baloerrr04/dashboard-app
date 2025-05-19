import { Select as AntdSelect } from 'antd';
import type { SelectProps as AntdSelectProps } from 'antd';
import { ReactNode } from 'react';

// Mendefinisikan tipe untuk Option
const { Option } = AntdSelect;

// Mendefinisikan tipe untuk komponen Select yang mencakup properti statis Option
interface SelectComponent extends React.FC<AntdSelectProps> {
  Option: typeof Option;
}

// Mendefinisikan tipe untuk props
interface SelectProps extends AntdSelectProps {
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

// Membuat komponen Select
const Select: SelectComponent = ({ defaultValue, className, style, children }) => (
  <AntdSelect defaultValue={defaultValue} className={className} style={style}>
    {children}
  </AntdSelect>
);

// Menambahkan properti statis Option
Select.Option = Option;

export default Select;