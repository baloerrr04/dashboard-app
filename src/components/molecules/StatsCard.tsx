import { Card, Badge } from "antd";
import styles from "./styles/StatsCard.module.css";
import { JSX } from "react";
import Button from "../atoms/Button";
import { MoreOutlined } from "@ant-design/icons";

interface StatsCardProps {
  title: string;
  value: number;
  icon: JSX.Element;
  badgeColor: string;
  badgeText: string;
  iconBgColor: string;
  iconColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  badgeColor,
  badgeText,
  iconBgColor,
  iconColor,
}) => (
  <Card className={styles.card}>
    <div className={styles.container}>
      <div
        className={styles.iconContainer}
        style={{ backgroundColor: iconBgColor }}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
        >
          {icon}
        </svg>
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.valueContainer}>
          <div className={styles.value}>{value}</div>
          <Badge
            count={badgeText}
            style={{
              backgroundColor: badgeColor === "red" ? "#ef4444" : "#10b981",
              color: "white",
            }}
            className={styles.badge}
          />
        </div>
      </div>

      <div>
        <Button type="text" icon={<MoreOutlined />} />
      </div>
    </div>
  </Card>
);

export default StatsCard;