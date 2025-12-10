import React from "react";
import styles from "./Themes.module.css";

const themes = [
  {
    emoji: "🎨",
    title: "Colours & Shapes",
    note: "Exploring patterns, blocks, sorting and colourful art.",
  },
  {
    emoji: "🐾",
    title: "Animals",
    note: "From farm to jungle – sounds, movements and habitats.",
  },
  {
    emoji: "🌿",
    title: "Nature & Seasons",
    note: "Weather, plants and tiny nature walks & experiments.",
  },
  {
    emoji: "🎉",
    title: "Festivals of India",
    note: "Stories, songs and crafts around celebrations.",
  },
  {
    emoji: "🔬",
    title: "Little Scientists Week",
    note: "Simple hands-on experiments that make little eyes go ‘wow!’.",
  },
  {
    emoji: "📚",
    title: "Storytelling Carnival",
    note: "Puppets, role play and building our own tiny tales.",
  },
  {
    emoji: "💦",
    title: "Water Play Week",
    note: "Splash tubs, bubbles and lots of safe water fun.",
  },
];

const Themes = () => {
  return (
    <section id="themes" className={styles.section}>
      {/* floating background toys */}
      <div className={styles.floatingBg} aria-hidden="true">
        <span className={`${styles.doodle} ${styles.d1}`}>🧸</span>
        <span className={`${styles.doodle} ${styles.d2}`}>🪁</span>
        <span className={`${styles.doodle} ${styles.d3}`}>🎈</span>
      </div>

      <div className={styles.outer}>
        <div className={styles.headerWrap}>
          <h2 className={styles.heading}>Our Monthly Themes</h2>
          <p className={styles.subtext}>
            Through the year, children travel across different worlds – colours,
            animals, seasons, festivals, stories, science and splashy water fun.
          </p>
        </div>

        {/* big board */}
        <div className={styles.board}>
          <div className={styles.boardTopTape} />

          <div className={styles.grid}>
            {themes.map((theme, index) => (
              <article
                key={theme.title}
                className={`${styles.card} ${styles[`card${index + 1}`]}`}
              >
                <div className={styles.pin} />
                <p className={styles.badge}>Theme {index + 1}</p>

                <div className={styles.cardBody}>
                  <div className={styles.iconBubble}>{theme.emoji}</div>
                  <div>
                    <h3 className={styles.title}>{theme.title}</h3>
                    <p className={styles.note}>{theme.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className={styles.footerNote}>
          Themes repeat and rotate across terms so every child gets to explore
          each one, no matter when they join Bachpan.
        </p>
      </div>
    </section>
  );
};

export default Themes;
