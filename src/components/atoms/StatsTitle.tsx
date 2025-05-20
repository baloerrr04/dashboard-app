import styles from "./styles/StatsTitle.module.css";

const StatTitle: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.title}>{text}</div>
);

export default StatTitle;