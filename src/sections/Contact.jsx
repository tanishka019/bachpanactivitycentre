import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      {/* floating background icons */}
      <div className={styles.floatingBg}>
        <span className={`${styles.toy} ${styles.t1}`}>📍</span>
        <span className={`${styles.toy} ${styles.t2}`}>💌</span>
        <span className={`${styles.toy} ${styles.t3}`}>☎️</span>
      </div>

      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.subtext}>
            Have a question or want to book a visit? Reach out and we’ll be happy
            to help you plan the right program for your child.
          </p>

          <div className={styles.grid}>
            {/* LEFT: CONTACT DETAILS */}
            <div className={styles.left}>
              <div className={styles.item}>
                <div className={styles.iconCircle}>📞</div>
                <div>
                  <p className={styles.label}>Phone</p>
                  <p className={styles.value}>+91&nbsp;8898381582</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.iconCircle}>📱</div>
                <div>
                  <p className={styles.label}>WhatsApp</p>
                  <p className={styles.value}>+91&nbsp;8898381582</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.iconCircle}>📧</div>
                <div>
                  <p className={styles.label}>Email</p>
                  <p className={styles.value}>nirmalapatel24@gmail.com</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.iconCircle}>📍</div>
                <div>
                  <p className={styles.label}>Location</p>
                  <p className={styles.value}>
                    Bachpan – Kids Activity Centre<br />
                    Shop no.2, Datta Mandir road, Dahanukarwadi, Kandivali(West), Mumbai-400064, Maharashtra, India
                  </p>
                </div>
              </div>

              <p className={styles.note}>
                You can call or message us on WhatsApp to schedule a centre visit
                or trial session.
              </p>
            </div>

            {/* RIGHT: MAP */}
            <div className={styles.right}>
              <div className={styles.mapWrapper}>
                {/* Replace the src below with your real Google Maps embed link */}
                <iframe
                  title="Bachpan Kids Activity Centre location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.6561775161313!2d72.83314767520874!3d19.210213882022234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEyJzM2LjgiTiA3MsKwNTAnMDguNiJF!5e0!3m2!1sen!2sin!4v1767426451024!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
