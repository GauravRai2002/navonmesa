import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div className={styles.footerLogo}>
            <div className={styles.logoShield}>
              <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L32 8V20C32 28 24 34 16 36C8 34 0 28 0 20V8L16 0Z" fill="currentColor" fillOpacity="0.9"/>
              </svg>
            </div>
            <div>
              <span className={styles.logoName}>Navonmesa</span>
              <span className={styles.logoHindi}>नवोन्मेष</span>
            </div>
          </div>
          <p className="section-body" style={{ fontSize: '14px', maxWidth: '300px', marginTop: '16px' }}>
            You think, we innovate for you. Precision defence systems engineered for mission-critical applications.
          </p>
          <div className={styles.flagAccent}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Navigation</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#ship-equipment">Ship Equipment</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Products</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#products">Fuses</a></li>
            <li><a href="#products">Radio Set</a></li>
            <li><a href="#products">Flight Glide Path Indicator</a></li>
            <li><a href="#products">Chaffs & Flares</a></li>
            <li><a href="#products">Drones</a></li>
            <li><a href="#products">Electronic PCBs</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#contact">Request Information</a></li>
            <li><a href="#contact">Procurement Inquiries</a></li>
            <li><a href="#contact">Secure Communications</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>&copy; {new Date().getFullYear()} Navonmesa (नवोन्मेष). All Rights Reserved.</div>
        <div className={styles.bottomRight}>
          <span>Quality | Reliability | Expertise</span>
        </div>
      </div>
    </footer>
  );
}
