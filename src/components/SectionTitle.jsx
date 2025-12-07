import React from "react";
import styles from "./SectionTitle.module.css";

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
