import { Layout, Divider } from "antd";
import { Link, useLocation } from "react-router-dom";
import SearchForm from "../molecules/SearchForm";
import styles from '../styles/Sidebar.module.css';
import { JSX } from "react";

const { Sider } = Layout;

interface MenuItem {
  label: string;
  path: string;
  svgPath: JSX.Element;
  isActive?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "APPLICATION",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        svgPath: (
          <>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </>
        ),
        isActive: true,
      },
      {
        label: "Summary",
        path: "/summary",
        svgPath: (
          <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </>
        ),
      },
      {
        label: "Maintenance",
        path: "/maintenance",
        svgPath: (
          <>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </>
        ),
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        label: "Role",
        path: "/role",
        svgPath: (
          <>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </>
        ),
      },
      {
        label: "Activity User",
        path: "/activity-user",
        svgPath: (
          <>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </>
        ),
      },
      {
        label: "Account",
        path: "/account",
        svgPath: (
          <>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </>
        ),
      },
    ],
  },
  {
    title: "DATABASE",
    items: [
      {
        label: "Master Data",
        path: "/master-data",
        svgPath: (
          <>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </>
        ),
      },
      {
        label: "Register",
        path: "/register",
        svgPath: (
          <>
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
            <path d="M4 4v16a2 2 0 0 0 2 2h16" />
            <path d="M2 8h8" />
            <path d="M2 14h8" />
            <path d="M14 2v8" />
            <path d="M20 2v8" />
          </>
        ),
      },
      {
        label: "Setting",
        path: "/setting",
        svgPath: (
          <>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l-.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l-.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l-.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </>
        ),
      },
    ],
  },
];

interface SidebarProps {
  onSearch: (query: string) => void;
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSearch, collapsed, onCollapse }) => {
  const location = useLocation();

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

      <div className={styles.menuContainer}>
        {menuSections.map((section, index) => (
          <div key={section.title}>
            {index > 0 && !collapsed && <Divider className={styles.divider} />}
            {!collapsed && <div className={styles.sectionTitle}>{section.title}</div>}
            {section.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.menuItem} ${
                  location.pathname === item.path ? styles.menuItemActive : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={styles.menuIcon}
                >
                  {item.svgPath}
                </svg>
                {!collapsed && item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.logout}>
        <Link to="/logout" className={styles.logoutLink}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={styles.logoutIcon}
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {!collapsed && "Logout"}
        </Link>
      </div>
    </Sider>
  );
};

export default Sidebar;