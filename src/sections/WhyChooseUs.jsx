import React from "react";
import styles from "./WhyChooseUs.module.css";

const features = [
  { icon: "🛡️", text: "Child-safe environment with trained staff" },
  { icon: "🎨", text: "Creative learning through play-based activities" },
  { icon: "📚", text: "Daily value education through storytelling" },
  { icon: "🧠", text: "Sensory play, STEM basics, outdoor fun, music & movement" },
  { icon: "👶", text: "Small batch size for personal attention" },
  { icon: "🧸", text: "Soft flooring and child-friendly toys" },
  { icon: "🎉", text: "Monthly themes & festival celebrations" },
  { icon: "📹", text: "CCTV-monitored premises" }
];


const WhyChooseUs = () => {
  return (
    <section className={styles.section} id="why-choose-us">
      {/* floating toy emojis in bg */}
      <div className={styles.floatingBg}>
        <span className={`${styles.toy} ${styles.t1}`}>🧸</span>
        <span className={`${styles.toy} ${styles.t2}`}>🎈</span>
        <span className={`${styles.toy} ${styles.t3}`}>🚂</span>
        <span className={`${styles.toy} ${styles.t4}`}>🪁</span>
        <span className={`${styles.toy} ${styles.t5}`}>🎨</span>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <p className={styles.kicker}>Why choose us</p>

          <h2 className={styles.heading}>
            A warm, thoughtfully designed space for happy learning.
          </h2>

          <p className={styles.subtext}>
            Bachpan is a cosy, child-friendly centre where your child is guided
            by caring teachers, age-appropriate routines, and hands-on playful learning.
          </p>

          <ul className={styles.points}>
            <li>• Gentle structure & predictable routine</li>
            <li>• Screen-free creative exploration</li>
            <li>• A safe environment where kids feel at home</li>
          </ul>

          <div className={styles.badges}>
            <span className={styles.badge}>Ages 2–8 years</span>
            <span className={styles.badge}>Daily · Weekend · Evenings</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          {features.map((f, i) => (
            <div key={i} className={styles.feature}>
              <span className={styles.icon}>{f.icon}</span>
              <p className={styles.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
