import React, { useState } from "react";
import styles from "./Header.module.css";
// import logo from "../assets/logo-bachpan.svg"; // if you add a logo later

const navItems = [
  { label: "Home", targetId: "hero" },
  { label: "Why Us", targetId: "why-choose-us" },
  { label: "Programs", targetId: "programs" },
  { label: "Age Groups", targetId: "age-groups" },
  { label: "Facilities", targetId: "facilities" },
  { label: "Themes", targetId: "themes" },
  { label: "Contact", targetId: "contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Logo + name */}
        <button
          className={styles.brand}
          onClick={() => handleScrollTo("hero")}
        >
          <div className={styles.logoBadge}>
            {/* <img src={logo} alt="Bachpan logo" className={styles.logoImg} /> */}
            <span className={styles.logoEmoji}>🎈</span>
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Bachpan</span>
            <span className={styles.brandTagline}>Kids Activity Centre</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className={styles.navDesktop}>
          {navItems.map((item) => (
            <button
              key={item.targetId}
              className={styles.navLink}
              onClick={() => handleScrollTo(item.targetId)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className={styles.ctaDesktop}>
          <button
            className={styles.enrollBtn}
            onClick={() => handleScrollTo("enrollment")}
          >
            Enroll Now 🚀
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className={styles.menuIcon} />
          <span className={styles.menuIcon} />
          <span className={styles.menuIcon} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className="container">
            <nav className={styles.mobileNav}>
              {navItems.map((item) => (
                <button
                  key={item.targetId}
                  className={styles.mobileNavLink}
                  onClick={() => handleScrollTo(item.targetId)}
                >
                  {item.label}
                </button>
              ))}
              <button
                className={styles.mobileEnrollBtn}
                onClick={() => handleScrollTo("enrollment")}
              >
                Enroll Now
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
