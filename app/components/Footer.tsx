import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo} style={{ marginBottom: '24px', display: 'inline-flex' }}>
            <div className={styles.logoIcon}></div>
            NAVONMESA
          </Link>
          <p className="section-body" style={{ fontSize: '14px', maxWidth: '300px' }}>
            Precision ammunition and defense systems engineered for the modern battlespace. Outpacing every threat.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h4>Capabilities</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/capabilities#small-arms">Small Arms Ammunition</Link></li>
            <li><Link href="/capabilities#heavy-ordnance">Heavy Ordnance</Link></li>
            <li><Link href="/capabilities#special-purpose">Special Purpose</Link></li>
            <li><Link href="/manufacturing#testing">Testing & Ballistics</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/about">Who We Are</Link></li>
            <li><Link href="/global">Global Operations</Link></li>
            <li><Link href="/manufacturing">Facilities</Link></li>
            <li><Link href="/about#careers">Careers</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/contact">Defense Sales</Link></li>
            <li><Link href="/contact">Press Line</Link></li>
            <li><Link href="/contact">Supplier Portal</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>&copy; {new Date().getFullYear()} Navonmesa Defense Systems. All Rights Reserved.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          <Link href="/export-controls" className={styles.legalLink}>Export Controls</Link>
        </div>
      </div>
    </footer>
  );
}
