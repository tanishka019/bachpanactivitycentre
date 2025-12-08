import React, { useState, useEffect } from "react";
import styles from "./Facilities.module.css";

const facilities = [
  {
    key: "soft-flooring",
    emoji: "🧸",
    title: "Soft flooring & child-friendly toys",
    text: "Cushioned flooring and age-appropriate toys so little ones can crawl, jump and explore safely.",
  },
  {
    key: "classrooms",
    emoji: "🎨",
    title: "Colourful, spacious classrooms",
    text: "Bright, airy rooms with cosy reading corners, circle-time spots and open floor space for activities.",
  },
  {
    key: "art-zone",
    emoji: "✂️",
    title: "Dedicated art & craft zone",
    text: "Tables, easels and supplies always ready for painting, cutting, sticking and messy fun.",
  },
  {
    key: "sensory",
    emoji: "🧪",
    title: "Sensory bins & activity stations",
    text: "Sensory tubs, building blocks and STEM setups that keep curious hands and minds busy.",
  },
  {
    key: "hygiene",
    emoji: "🧼",
    title: "Clean washrooms & sanitised areas",
    text: "Child-friendly washrooms and play zones cleaned regularly with clear hygiene routines.",
  },
];

const AUTO_DELAY = 5000; // 5 seconds

const Facilities = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (i) => setIndex(i);

  // autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
    }, AUTO_DELAY);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section id="facilities" className={styles.section}>
      <div className={styles.headerWrap}>
        <h2 className={styles.heading}>Our Space & Facilities</h2>
        <p className={styles.subtext}>
          A cosy, well-planned environment where children can move, explore and feel
          completely at home.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        {/* left arrow */}
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handlePrev}
          aria-label="Previous facility"
        >
          ‹
        </button>

        {/* viewport */}
        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {facilities.map((item, i) => (
              <article
                key={item.key}
                className={styles.slide}
              >
                <div
                  className={`${styles.slideInner} ${
                    styles[`bg_${item.key}`]
                  }`}
                >
                  <div className={styles.overlay} />
                  <div className={styles.content}>
                    <div className={styles.chip}>
                      <span className={styles.emoji}>{item.emoji}</span>
                      <span className={styles.chipText}>Facility {i + 1}</span>
                    </div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* right arrow */}
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNext}
          aria-label="Next facility"
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div className={styles.dots}>
        {facilities.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${
              i === index ? styles.dotActive : ""
            }`}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to facility ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Facilities;
