import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd';
import { ReactNode } from 'react';
import styles from './styles/Button.module.css';

interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
  type?: 'primary' | 'default' | 'text' | 'link';
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, icon, children, size, danger, onClick, className }) => (
  <AntdButton
    type={type}
    icon={icon}
    size={size}
    danger={danger}
    onClick={onClick}
    className={`${styles.button} ${type ? styles[type] : ''} ${danger ? styles.danger : ''} ${className || ''}`}
  >
    {children}
  </AntdButton>
);

export default Button;