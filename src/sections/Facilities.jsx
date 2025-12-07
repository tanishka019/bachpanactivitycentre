import React from "react";
import styles from "./Facilities.module.css";

const facilities = [
  {
    emoji: "🧸",
    title: "Soft flooring & child-friendly toys",
    text: "Safe play areas with cushioned flooring and age-appropriate toys.",
  },
  {
    emoji: "🎨",
    title: "Colourful, spacious classrooms",
    text: "Open layouts with cosy corners for group time, stories and activities.",
  },
  {
    emoji: "✂️",
    title: "Dedicated art & craft zone",
    text: "Tables, easels and supplies kept ready for daily creative time.",
  },
  {
    emoji: "🧪",
    title: "Sensory & activity stations",
    text: "Sensory bins, building blocks and STEM setups for curious little hands.",
  },
  {
    emoji: "🧼",
    title: "Clean, sanitised facilities",
    text: "Regularly cleaned washrooms and play areas, with hygiene protocols.",
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className={styles.section}>
      {/* background stickers / doodles */}
      <div className={styles.floatingBg}>
        <span className={`${styles.sticker} ${styles.s1}`}>⭐</span>
        <span className={`${styles.sticker} ${styles.s2}`}>🩵</span>
        <span className={`${styles.sticker} ${styles.s3}`}>📎</span>
      </div>

      <div className="container">
        <div className={styles.scrapWrapper}>
          {/* washi tape top */}
          <div className={styles.tapeTop} />

          <h2 className={styles.heading}>Our Space & Facilities</h2>
          <p className={styles.subtext}>
            A cosy, well-planned environment where children can move, explore,
            relax and feel at home.
          </p>

          <div className={styles.grid}>
            {facilities.map((item, index) => (
              <article
                key={item.title}
                className={`${styles.note} ${styles[`note${index + 1}`]}`}
              >
                <div className={styles.noteHeader}>
                  <span className={styles.emoji}>{item.emoji}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
                <p className={styles.text}>{item.text}</p>

                {/* little corner sticker */}
                <span className={styles.cornerSticker}>✶</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
