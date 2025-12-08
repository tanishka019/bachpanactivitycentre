import React from "react";
import styles from "./Programs.module.css";

const programs = [
  {
    emoji: "🌈",
    title: "Daily Activity Centre (2 Hours)",
    points: ["Free Play", "Circle Time", "Art & Craft", "Sensory Play", "Music & Movement"],
  },
  {
    emoji: "🎉",
    title: "Weekend Activity Club",
    points: ["Dance & Music", "Gardening", "Science Fun", "Festival Workshops"],
  },
  {
    emoji: "✨",
    title: "Evening Enrichment Classes",
    points: ["Phonics", "Drawing", "Kids Yoga", "Dance Class"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className={styles.section}>

      {/* Wavy top border */}
      <div className={styles.waveTop}></div>

      {/* floating toys */}
      <div className={styles.floating}>
        <span className={`${styles.toy} ${styles.t1}`}>🧩</span>
        <span className={`${styles.toy} ${styles.t2}`}>🎈</span>
        <span className={`${styles.toy} ${styles.t3}`}>🪁</span>
      </div>

      <div className={styles.headerWrap}>
        <h2 className={styles.heading}>Programs We Offer</h2>
        <p className={styles.subtext}>A beautiful blend of learning, play and creativity.</p>
      </div>

      {/* FULL GRID */}
      <div className={styles.fullGrid}>
        {programs.map((p, i) => (
          <div key={i} className={styles.programStrip}>
            <div className={styles.accent}></div>

            <div className={styles.iconCircle}>{p.emoji}</div>

            <div className={styles.stripContent}>
              <h3 className={styles.title}>{p.title}</h3>
              <ul className={styles.pointList}>
                {p.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Wavy bottom border */}
      <div className={styles.waveBottom}></div>

    </section>
  );
};

export default Programs;
