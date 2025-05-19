import { Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const DropdownMenu: React.FC = () => (
  <Dropdown overlay={<Menu><Menu.Item>View</Menu.Item><Menu.Item>Export</Menu.Item></Menu>}>
    <MoreOutlined className="text-xl" />
  </Dropdown>
);

export default DropdownMenu;