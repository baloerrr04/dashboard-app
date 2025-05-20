import React from "react";
import { Divider } from "antd";
import MenuItem from "./MenuItem";
import styles from "./styles/MenuSection.module.css";

interface Item {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface MenuSectionProps {
  title: string;
  items: Item[];
  collapsed: boolean;
  showDivider?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  items,
  collapsed,
  showDivider = false,
}) => {
  return (
    <div>
      {showDivider && !collapsed && <Divider className={styles.divider} />}
      {!collapsed && <div className={styles.sectionTitle}>{title}</div>}
      {items.map((item) => (
        <MenuItem
          key={item.path}
          label={item.label}
          path={item.path}
          icon={item.icon}
          collapsed={collapsed}
        />
      ))}
    </div>
  );
};

export default MenuSection;
