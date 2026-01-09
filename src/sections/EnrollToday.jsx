
import styles from "./EnrollToday.module.css";

const EnrollToday = () => {
  return (
    <section id="enroll" className={styles.section}>
      {/* floating playful icons */}
      <div className={styles.floatingBg} aria-hidden="true">
        <span className={styles.doodle}>🧸</span>
        <span className={styles.doodle}>🎈</span>
        <span className={styles.doodle}>🪁</span>
        <span className={styles.doodle}>🧩</span>
      </div>

      <div className={styles.outer}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Enroll Today!</h2>
          <p>
            Give your child the <strong>perfect joyful start</strong> with
            creative learning, play, and care 💛
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {/* ADMISSION */}
          <div className={styles.card}>
            <h3>🎒 Admission Charges</h3>
            <ul>
              <li>Registration Fee <span>₹1,000</span></li>
              <li>Admission Kit <span>₹500</span></li>
              <li>
                Security Deposit <span className={styles.refund}>₹1,500</span>
              </li>
            </ul>
          </div>

          {/* MONTHLY FEES */}
          <div className={`${styles.card} ${styles.highlight}`}>
            <span className={styles.ribbon}>Most Chosen</span>
            <h3>💰 Monthly Fees</h3>

            <div className={styles.plan}>
              <p className={styles.planTitle}>Activity Center (2 hrs/day)</p>
              <p>Monthly <span>₹3,000</span></p>
              <p>Quarterly (23nd Jan 2026 to 23rd May 2026) <span>₹11,500</span></p>
            </div>

            <div className={styles.plan}>
              <p className={styles.planTitle}>
                Full Activity Plan (3 hrs/day + coaching)
              </p>
              <p>Monthly <span>₹4,000</span></p>
              <p>Quarterly (23nd Jan 2026 to 23rd May 2026) <span>₹15,500</span></p>
            </div>
          </div>

          {/* ADD ONS */}
          <div className={styles.card}>
            <h3>🎨 Weekend Activity (Every Sat-Sun for 1.5hrs)</h3>
            <ul>
              <li>Dance & Movement <span>₹1000</span></li>
              <li>Art & Craft Advanced <span>₹1000</span></li>
              <li>Phonics<span>₹1000</span></li>
            </ul>
          </div>

          {/* PAYMENT */}
          <div className={styles.card}>
            <h3>📌 Payment Rules</h3>
            <ul>
              <li>Pay before <strong>10th of every month</strong></li>
              <li>Cash / UPI / Bank Transfer</li>
            </ul>
          </div>
        </div>

        {/* CONTACT */}
        <div className={styles.contactBox}>
          <p>📞 <strong>For Admissions:</strong> 8850120428</p>
          <p>📍 Shop no.2, Datta Mandir road, Dahanukarwadi, Kandivali(West), Mumbai-400064, Maharashtra, India</p>
        </div>
      </div>
    </section>
  );
};

export default EnrollToday;
