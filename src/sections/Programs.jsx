import styles from "./Programs.module.css";

const Programs = () => {
  return (
    <section className={styles.programs}>
      <h2 className={styles.heading}>Programs We Offer</h2>

      <div className={styles.cards}>

        {/* Daily Activity Center */}
        <div className={styles.card}>
          <h3>Daily Activity Center <span>(2 Hours)</span></h3>
          <ul>
            <li>Free Play & Water Play</li>
            <li>Circle Time</li>
            <li>Art & Craft</li>
            <li>Sensory Play</li>
            <li>Healthy Food Habits</li>
            <li>Puzzle & Logic Games</li>
            <li>Music & Movement</li>
            <li>Storytelling</li>
          </ul>
        </div>

        {/* Weekend Activity Club */}
        <div className={styles.card}>
          <h3>Weekend Activity Club</h3>
          <ul>
            <li>Phonics</li>
            <li>Creative Drawing</li>
            <li>Kids Yoga</li>
            <li>Dance Class</li>
          </ul>
        </div>

        {/* Full Activity Plan */}
        <div className={styles.card}>
          <h3>Full Activity Plan</h3>
          <ul>
            <li>Free Play & Water Play</li>
            <li>Circle Time</li>
            <li>Art & Craft</li>
            <li>Sensory Play</li>
            <li>Healthy Food Habits</li>
            <li>Puzzle & Logic Games</li>
            <li>Music & Movement</li>
            <li>Storytelling</li>
            <li>Coaching for School Syllabus</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Programs;
