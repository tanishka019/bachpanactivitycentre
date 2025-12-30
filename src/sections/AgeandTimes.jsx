import React from "react";
import styles from "./AgeandTimes.module.css";

const ageGroups = [
  { emoji: "🍼", label: "Toddlers (2–3 yrs)", note: "First steps into group play." },
  { emoji: "🎨", label: "Nursery (3–4 yrs)", note: "Early concepts through stories & art." },
  { emoji: "📚", label: "Kinder (4–6 yrs)", note: "Prep for school with playful structure." },
  { emoji: "🤸‍♂️", label: "Juniors (6–8 yrs)", note: "Confidence, creativity & teamwork." },
];

const timings = {
  activityCenter: [
    "9:30 am – 11:30 am",
    "1:00 pm – 3:00 pm",
    "4:00 pm – 6:00 pm",
  ],
  fullActivityPlan: [
    "8:30 am – 11:30 am",
    "12:00 pm – 3:00 pm",
    "4:00 pm – 7:00 pm",
  ],
};


const AgeAndTimes = () => {
  return (
    <section className={styles.section} id="age-times">
      {/* floating toys */}
      <div className={styles.floatingBg}>
        <span className={`${styles.toy} ${styles.t1}`}>🧸</span>
        <span className={`${styles.toy} ${styles.t2}`}>🪁</span>
        <span className={`${styles.toy} ${styles.t3}`}>🎈</span>
        <span className={`${styles.toy} ${styles.t4}`}>🧩</span>
      </div>

      {/* NOTE: no .container here, we go FULL width */}
      <div className={styles.outer}>
        <div className={styles.dottedBox}>
          <h2 className={styles.heading}>Age Groups & Timings</h2>
          <p className={styles.subtext}>
            Choose the perfect group and schedule that fits your child's needs.
          </p>

          {/* AGE GROUPS FULL ROW */}
          <div className={styles.sectionLabel}>Age Groups</div>
          <div className={styles.ageGrid}>
            {ageGroups.map((g) => (
              <div key={g.label} className={styles.ageCard}>
                <div className={styles.ageTop}>
                  <span className={styles.ageEmoji}>{g.emoji}</span>
                  <p className={styles.ageLabel}>{g.label}</p>
                </div>
                <p className={styles.ageNote}>{g.note}</p>
              </div>
            ))}
          </div>

          {/* TIMINGS FULL ROW */}
<div className={styles.sectionLabel}>Timings</div>

<div className={styles.timingsWrapper}>
  
  {/* Activity Center */}
  <div className={styles.timingBox}>
    <h3 className={styles.timingTitle}>Activity Center</h3>
    <p className={styles.timingSub}>Choose your convenient slot:</p>

    <ul className={styles.timeList}>
      {timings.activityCenter.map((slot) => (
        <li key={slot}>
          <span className={styles.timeIcon}>⏰</span> {slot}
        </li>
      ))}
    </ul>
  </div>

  {/* Full Activity Plan */}
  <div className={styles.timingBox}>
    <h3 className={styles.timingTitle}>Full Activity Plan</h3>

    <ul className={styles.timeList}>
      {timings.fullActivityPlan.map((slot) => (
        <li key={slot}>
          <span className={styles.timeIcon}>⏰</span> {slot}
        </li>
      ))}
    </ul>

    <p className={styles.extraNote}>
      Includes Activity Center + <strong>1 hour extra coaching</strong>
    </p>
  </div>

</div>

          <p className={styles.footerNote}>
            Not sure which batch fits best? We’re happy to help you pick
            based on your child’s age, routine and school timings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgeAndTimes;
