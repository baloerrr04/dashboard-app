import styles from "./styles/StatsValue.module.css";

const StatValue: React.FC<{ value: number }> = ({ value }) => (
  <div className={styles.value}>{value}</div>
);

export default StatValue;