import { Typography } from 'antd';
import { ReactNode } from 'react';

const { Text: AntdText } = Typography;

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => (
  <AntdText className={className}>{children}</AntdText>
);

export default Text;