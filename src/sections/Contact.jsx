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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.1084110061819!2d72.83895553350233!3d19.198528833766286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c2c336817d%3A0x37f319a06c3aa424!2sSurana%20Hospital%20and%20Research%20Centre.!5e0!3m2!1sen!2sin!4v1765127043094!5m2!1sen!2sin"
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
