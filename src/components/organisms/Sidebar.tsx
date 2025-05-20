import React from "react";
import { Layout, Divider } from "antd";
import { Link } from "react-router-dom";
import MenuSection from "../molecules/MenuSection";
import SearchForm from "../molecules/SearchForm";
import styles from "./styles/Sidebar.module.css";
import {
  AppstoreOutlined,
  FileTextOutlined,
  ToolOutlined,
  UserOutlined,
  DesktopOutlined,
  DatabaseOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const menuSections = [
  {
    title: "APPLICATION",
    items: [
      { label: "Dashboard", path: "/dashboard", icon: <AppstoreOutlined /> },
      { label: "Summary", path: "/summary", icon: <FileTextOutlined /> },
      { label: "Maintenance", path: "/maintenance", icon: <ToolOutlined /> },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { label: "Role", path: "/role", icon: <UserOutlined /> },
      { label: "Activity User", path: "/activity-user", icon: <DesktopOutlined /> },
      { label: "Account", path: "/account", icon: <UserOutlined /> },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { label: "Master Data", path: "/master-data", icon: <DatabaseOutlined /> },
      { label: "Register", path: "/register", icon: <FileTextOutlined /> },
      { label: "Setting", path: "/setting", icon: <SettingOutlined /> },
    ],
  },
];

interface SidebarProps {
  onSearch: (query: string) => void;
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSearch, collapsed, onCollapse }) => {
  return (
    <Sider
      width={200}
      className={styles.sidebar}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="lg"
      collapsedWidth={60}
      trigger={null}
    >
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <span className={styles.logoText}>e</span>
        </div>
        {!collapsed && <span className={styles.logoTitle}>ID</span>}
      </div>

      <div className={styles.searchContainer}>
        {!collapsed && <SearchForm onSearch={onSearch} />}
      </div>

      <Divider />

      <div className={styles.menuContainer}>
        {menuSections.map((section, idx) => (
          <MenuSection
            key={section.title}
            title={section.title}
            items={section.items}
            collapsed={collapsed}
            showDivider={idx > 0}
          />
        ))}
      </div>

      <div className={styles.logout}>
        <Link to="/logout" className={styles.logoutLink}>
          <LogoutOutlined className={styles.logoutIcon} />
          {!collapsed && "Logout"}
        </Link>
      </div>
    </Sider>
  );
};

export default Sidebar;
