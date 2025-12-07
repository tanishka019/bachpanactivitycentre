import React from "react";
import styles from "./Programs.module.css";

const programs = [
  {
    emoji: "🌈",
    title: "Daily Activity Centre (2 Hours)",
    points: [
      "Free Play & Circle Time",
      "Art & Craft · Sensory Play",
      "Logic Games · Music & Movement",
      "Storytelling",
    ],
  },
  {
    emoji: "🎉",
    title: "Weekend Activity Club",
    points: [
      "Dance & Music · Gardening",
      "Science Experiments",
      "Festival-Themed Workshops",
      "Cooking Without Fire",
    ],
  },
  {
    emoji: "✨",
    title: "Evening Enrichment Classes",
    points: ["Phonics", "Creative Drawing", "Kids Yoga", "Dance Class"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className={styles.section}>
      {/* floating toys in background */}
      <div className={styles.floatingBg}>
        <span className={`${styles.toy} ${styles.t1}`}>🧩</span>
        <span className={`${styles.toy} ${styles.t2}`}>🎈</span>
        <span className={`${styles.toy} ${styles.t3}`}>🪁</span>
        <span className={`${styles.toy} ${styles.t4}`}>🚂</span>
      </div>

      <div className="container">
        {/* dotted box wrapper */}
        <div className={styles.dottedBox}>
          {/* ribbon label on top */}
          <div className={styles.ribbonLabel}>Programs</div>

          <div className={styles.inner}>
            <h2 className={styles.heading}>
              Programs that support every stage of childhood.
            </h2>

            <p className={styles.subtext}>
              A balanced mix of creativity, movement and exploration —
              designed for growing minds.
            </p>

            {/* Program grid */}
            <div className={styles.programGrid}>
              {programs.map((p, i) => (
                <div key={i} className={styles.programBox}>
                  <div className={styles.boxHeader}>
                    <div className={styles.iconCircle}>
                      <span aria-hidden="true">{p.emoji}</span>
                    </div>
                    <h3 className={styles.title}>{p.title}</h3>
                  </div>

                  <ul className={styles.pointList}>
                    {p.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
