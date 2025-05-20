import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles/MenuItem.module.css";

interface MenuItemProps {
  label: string;
  path: string;
  icon: React.ReactNode;
  collapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, path, icon, collapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ""}`}
    >
      <span className={styles.menuIcon}>{icon}</span>
      {!collapsed && label}
    </Link>
  );
};

export default MenuItem;
