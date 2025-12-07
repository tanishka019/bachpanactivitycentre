import React from "react";
import styles from "./ProgramCard.module.css";

const ProgramCard = ({ title, items, tag }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <h3 className={styles.title}>{title}</h3>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.listItem}>
            <span className={styles.bullet}></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCard;
