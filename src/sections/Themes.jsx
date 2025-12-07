import React from "react";
import styles from "./Themes.module.css";

const themes = [
  { emoji: "🎨", title: "Colours & Shapes" },
  { emoji: "🐾", title: "Animals" },
  { emoji: "🌿", title: "Nature & Seasons" },
  { emoji: "🎉", title: "Festivals of India" },
  { emoji: "🔬", title: "Little Scientists Week" },
  { emoji: "📚", title: "Storytelling Carnival" },
  { emoji: "💦", title: "Water Play Week" },
];

const Themes = () => {
  return (
    <section id="themes" className={styles.section}>
      
      {/* floating clouds & stars */}
      <div className={styles.floatingBg}>
        <span className={`${styles.cloud} ${styles.c1}`}>☁️</span>
        <span className={`${styles.cloud} ${styles.c2}`}>☁️</span>
        <span className={`${styles.star} ${styles.s1}`}>⭐</span>
        <span className={`${styles.star} ${styles.s2}`}>✨</span>
      </div>

      <div className="container">
        <h2 className={styles.heading}>Our Monthly Themes</h2>
        <p className={styles.subtext}>
          Each month brings a new world for children to explore — full of creativity,
          discovery and imagination.
        </p>

        <div className={styles.grid}>
          {themes.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconCircle}>{t.emoji}</div>
              <p className={styles.title}>{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
