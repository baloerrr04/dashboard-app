import { Badge } from "antd";
import styles from "./styles/StatsCard.module.css";
import { JSX } from "react";
import Button from "../atoms/Button";
import { MoreOutlined } from "@ant-design/icons";
import IconWrapper from "../atoms/IconWrapper";
import StatsTitle from "../atoms/StatsTitle";
import StatsValue from "../atoms/StatsValue";
import CustomCard from "../atoms/Card"
import '../../index.css';


interface StatsCardProps {
  title: string;
  value: number;
  icon: JSX.Element;
  badgeColor: string;
  badgeText: string;
  iconBgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  badgeColor,
  badgeText,
  iconBgColor,
}) => (
  <CustomCard >
    <div className={styles.container}>
      <IconWrapper icon={icon} bgColor={iconBgColor} />
      <div>
        <StatsTitle text={title} />{" "}
        <div className={styles.valueContainer}>
          <StatsValue value={value} />
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
  </CustomCard>
);

export default StatsCard;
