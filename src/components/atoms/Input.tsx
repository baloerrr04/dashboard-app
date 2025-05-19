import { Input as AntdInput } from 'antd';
import { InputProps as AntdInputProps } from 'antd';
import { ReactNode } from 'react';

interface InputProps extends AntdInputProps {
  prefix?: ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ prefix, placeholder, value, onChange, className, style }) => (
  <AntdInput
    prefix={prefix}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
    style={style}
  />
);

export default Input;