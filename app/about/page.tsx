"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
  return (
    <main>
      <div className={styles.pageHeader}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-eyebrow">Who We Are</span>
          <h1 className="section-title">The Standard in Global Defense</h1>
        </div>
      </div>

      <section className="section sectionDark">
        <div className="container">
          <div className={styles.grid2}>
            <div>
              <h2 className="section-title" style={{ fontSize: '40px', marginBottom: '24px' }}>Our Mission</h2>
              <div className="gold-line" style={{ marginBottom: '24px' }}></div>
              <p className="section-body">
                Navonmesa was founded on a singular principle: to provide allied defense forces and tier-one operators with the most reliable, precise, and lethal ammunition on the planet. We understand that in the theater of operations, there is no margin for error.
              </p>
              <p className="section-body" style={{ marginTop: '16px' }}>
                Every round we produce represents our unwavering commitment to the men and women who stand on the front lines of global security. Our engineers, ballisticians, and manufacturing experts work tirelessly to push the boundaries of materials science and propellants, ensuring Navonmesa munitions overmatch any adversary.
              </p>
            </div>
            <div className={styles.imageBlock}>
               <div style={{ padding: '40px', background: 'var(--color-navy)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', marginBottom: '16px' }}>Executive Leadership</h3>
                 <p className="section-body" style={{ fontSize: '15px' }}>
                   "At Navonmesa, we don't just manufacture ammunition; we engineer confidence. Our partners trust us with their lives, and that is a responsibility we honor with every single cartridge that leaves our facilities."
                 </p>
                 <span style={{ display: 'block', marginTop: '24px', fontWeight: 'bold', color: 'var(--color-gold)' }}>— CEO, Navonmesa Defense</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionNavy">
        <div className="container text-center">
            <span className="section-eyebrow" id="careers">Join The Mission</span>
            <h2 className="section-title" style={{ marginTop: '16px', marginBottom: '40px' }}>Careers at Navonmesa</h2>
            <p className="section-body" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
              We are continually seeking elite talent in materials engineering, ballistics, robotics, and international defense sales. If you have what it takes to build the future of global defense, we want to hear from you.
            </p>
            <Link href="/contact" className="btn btn-primary btn-arrow">View Open Positions</Link>
        </div>
      </section>
    </main>
  );
}
