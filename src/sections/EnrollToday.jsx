import React from "react";
import styles from "./EnrollToday.module.css";

const EnrollToday = () => {
  return (
    <section id="enroll" className={styles.section}>
      {/* Floating playful background */}
      <div className={styles.floatingBg} aria-hidden="true">
        <span className={styles.doodle}>🧸</span>
        <span className={styles.doodle}>🎈</span>
        <span className={styles.doodle}>🪁</span>
      </div>

      <div className={styles.outer}>
        <h2 className={styles.heading}>Enroll Today!</h2>
        <p className={styles.subtext}>
          Give your child the perfect start with a fun, creative, and engaging
          learning environment. <br />
          <strong>We nurture young minds with love & care.</strong>
        </p>

        <div className={styles.grid}>
          {/* Admission Charges */}
          <div className={styles.card}>
            <h3>1. Admission Charges</h3>
            <ul>
              <li>Registration Fee: <span>₹1,000</span> (One-time)</li>
              <li>Admission Kit: <span>₹500</span> (Bag + Folder + ID Card)</li>
              <li>Security Deposit: <span>₹1,500</span> (Refundable)</li>
            </ul>
          </div>

          {/* Monthly Fees */}
          <div className={styles.card}>
            <h3>2. Monthly Fees</h3>

            <p className={styles.planTitle}>Activity Center Plan (2 hours/day)</p>
            <ul>
              <li>Monthly Fee: <span>₹3,000</span></li>
              <li>Quarterly Fee (23 Jan – 23 May): <span>₹11,500</span></li>
            </ul>

            <p className={styles.planTitle}>
              Full Activity Plan (3 hours/day with coaching)
            </p>
            <ul>
              <li>Monthly Fee: <span>₹4,000</span></li>
              <li>Quarterly Fee (23 Jan – 23 May): <span>₹15,500</span></li>
            </ul>
          </div>

          {/* Add-on Classes */}
          <div className={styles.card}>
            <h3>3. Add-on Classes (Optional)</h3>
            <ul>
              <li>Dance & Movement: <span>₹600/month</span> (Saturday)</li>
              <li>Art & Craft Advanced: <span>₹600/month</span> (Sunday)</li>
              <li>Sensory Play: <span>₹400/month</span></li>
            </ul>
          </div>

          {/* Payment Rules */}
          <div className={styles.card}>
            <h3>4. Payment Rules</h3>
            <ul>
              <li>Fees to be paid before <strong>10th of every month</strong></li>
              <li>Mode of Payment: Cash / UPI / Bank Transfer</li>
            </ul>
          </div>
        </div>

        <div className={styles.contactBox}>
          <p>
            <strong>For Admission & Enquiries:</strong> 📞 8898381582
          </p>
          <p>
            📍 <strong>Your Center Address</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnrollToday;
