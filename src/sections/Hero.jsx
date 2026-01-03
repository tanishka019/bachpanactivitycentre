import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>Bachpan · Kids Activity Centre · 2–8 years</p>

          <h1 className={styles.heading}>
            After-school time
            <br />
            that kids actually look forward to.
          </h1>

          <p className={styles.subtext}>
            Short, happy sessions with art, stories, music and movement in a
            safe, colourful space — no screens, no pressure, just real play and
            gentle learning.
          </p>

          <div className={styles.tagRow}>
            <span className={styles.tag}>Daily Activity Centre</span>
            <span className={styles.tag}>Weekend Activity Club</span>
            <span className={styles.tag}>Evening Classes</span>
          </div>

          <div className={styles.ctaRow}>
            <button
              className={styles.primaryBtn}
              onClick={() => handleScrollTo("enrollment")}
            >
              Book a trial visit
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => handleScrollTo("programs")}
            >
              View all programs
            </button>
          </div>

          <div className={styles.infoStrip}>
            <div>
              <p className={styles.infoLabel}>Age groups</p>
              <p className={styles.infoValue}>2–3 · 3–4 · 4–6 · 6–8</p>
            </div>
            {/*<div>
              <p className={styles.infoLabel}>Time slots</p>
              <p className={styles.infoValue}>9:30–11:30 · 12–2 · 4–6</p>
            </div>*/}
            <div>
              <p className={styles.infoLabel}>Batch size</p>
              <p className={styles.infoValue}>10–12 children</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
