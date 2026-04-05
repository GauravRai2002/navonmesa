"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoShield}>
          <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
            <path d="M16 0L32 8V20C32 28 24 34 16 36C8 34 0 28 0 20V8L16 0Z" fill="currentColor" fillOpacity="0.9"/>
            <path d="M16 4L28 10V20C28 26 22 31 16 33C10 31 4 26 4 20V10L16 4Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3"/>
          </svg>
        </div>
        <div className={styles.logoText}>
          <span className={styles.logoName}>Navonmesa</span>
          <span className={styles.logoHindi}>नवोन्मेष - You think, we innovate for you</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#products" className={styles.navLink}>Products</a>
        <a href="#ship-equipment" className={styles.navLink}>Ship Equipment</a>
        <a href="#about" className={styles.navLink}>About Us</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <a href="#home" className={styles.mobileLink} onClick={handleLinkClick}>Home</a>
        <a href="#products" className={styles.mobileLink} onClick={handleLinkClick}>Products</a>
        <a href="#ship-equipment" className={styles.mobileLink} onClick={handleLinkClick}>Ship Equipment</a>
        <a href="#about" className={styles.mobileLink} onClick={handleLinkClick}>About Us</a>
        <a href="#contact" className={styles.mobileLink} onClick={handleLinkClick}>Contact</a>
      </div>
    </header>
  );
}
