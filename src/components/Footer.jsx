import React from "react";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Why Bachpan", id: "why-choose-us" },
  { label: "Programs", id: "programs" },
  { label: "Age & Timings", id: "age-times" },
  { label: "Facilities", id: "facilities" },
  { label: "Enroll Today", id: "enroll-today" },
  { label: "Enroll", id: "enrollment" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* floating stars / doodles */}
      <div className={styles.floatingBg} aria-hidden="true">
        <span className={`${styles.doodle} ${styles.d1}`}>⭐</span>
        <span className={`${styles.doodle} ${styles.d2}`}>✨</span>
        <span className={`${styles.doodle} ${styles.d3}`}>🧸</span>
      </div>

      <div className="container">
        <div className={styles.topRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <button
              type="button"
              className={styles.brandButton}
              onClick={() => handleScrollTo("hero")}
            >
              <div className={styles.logoBubble}>🎈</div>
              <div className={styles.brandText}>
                <span className={styles.brandName}>Bachpan</span>
                <span className={styles.brandTag}>Kids Activity Centre</span>
              </div>
            </button>
            <p className={styles.tagline}>
              A small, happy place for big imaginations.
            </p>
          </div>

          {/* Links */}
          <nav className={styles.links}>
            <p className={styles.linksTitle}>Quick links</p>
            <div className={styles.linkList}>
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.linkBtn}
                  onClick={() => handleScrollTo(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Contact mini */}
          <div className={styles.contact}>
            <p className={styles.linksTitle}>Get in touch</p>
            <p className={styles.contactLine}>
              📞 <span>+91 XXXXXXXXXX</span>
            </p>
            <p className={styles.contactLine}>
              📱 <span>+91 XXXXXXXXXX (WhatsApp)</span>
            </p>
            <p className={styles.contactLine}>
              📧 <span>hello@bachpancentre.com</span>
            </p>

            <button
              type="button"
              className={styles.enrollBtn}
              onClick={() => handleScrollTo("enrollment")}
            >
              Enroll your child 🤍
            </button>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Bachpan – Kids Activity Centre. All rights
            reserved.
          </p>
          <p className={styles.madeWith}>
            Made with 💛, crayons & a little bit of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
