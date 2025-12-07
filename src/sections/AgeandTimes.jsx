import React from "react";
import styles from "./AgeandTimes.module.css";

const ageGroups = [
  { emoji: "🍼", label: "Toddlers (2–3 yrs)" },
  { emoji: "🎨", label: "Nursery (3–4 yrs)" },
  { emoji: "📚", label: "Kinder (4–6 yrs)" },
  { emoji: "🤸‍♂️", label: "Juniors (6–8 yrs)" },
];

const timings = [
  "9:30 am – 11:30 am",
  "12:00 pm – 2:00 pm",
  "4:00 pm – 6:00 pm",
];

const AgeAndTimes = () => {
  return (
    <section className={styles.section} id="age-times">
      
      {/* floating toys in background */}
      <div className={styles.floatingBg}>
        <span className={`${styles.toy} ${styles.t1}`}>🧸</span>
        <span className={`${styles.toy} ${styles.t2}`}>🪁</span>
        <span className={`${styles.toy} ${styles.t3}`}>🎈</span>
        <span className={`${styles.toy} ${styles.t4}`}>🧩</span>
      </div>

      <div className="container">
        <div className={styles.dottedBox}>

          {/* Section heading with brush stroke */}
          <h2 className={styles.heading}>Age Groups & Timings</h2>
          <p className={styles.subtext}>
            Choose the perfect group and schedule that fits your child's needs.
          </p>

          <div className={styles.grid}>

            {/* LEFT SIDE – AGE GROUPS */}
            <div className={styles.left}>
              <div className={styles.ribbon}>Age Groups</div>

              <div className={styles.ageList}>
                {ageGroups.map((a, i) => (
                  <div key={i} className={styles.ageBox}>
                    <span className={styles.ageEmoji}>{a.emoji}</span>
                    <span className={styles.ageLabel}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE – TIMINGS */}
            <div className={styles.right}>
              <div className={styles.ribbon}>Timings</div>

              <div className={styles.timeList}>
                {timings.map((t, i) => (
                  <div key={i} className={styles.timeChip}>
                    ⏰ {t}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeAndTimes;
