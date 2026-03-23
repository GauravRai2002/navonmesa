"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <Image
          src="/hero_bg.png"
          alt="Navonmesa Hero Background"
          fill
          priority
          className={styles.heroBg}
          quality={100}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Precision Ammunition Division</span>
          <h1 className={styles.heroTitle}>Outpacing Every Threat</h1>
          <div className={styles.heroActions}>
            <Link href="/capabilities" className="btn btn-primary btn-arrow">
              Accelerating Defense
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES / SPLIT SECTION */}
      <section className={`${styles.sectionDark} section`}>
        <div className="container">
          <div className={styles.splitLayoutGrid}>
            <div className={styles.splitContent}>
              <span className="section-eyebrow">Advanced Ordnance</span>
              <h2 className="section-title" style={{ marginTop: '16px' }}>Tactical Superiority</h2>
              <div className={styles.goldLine} style={{ marginTop: '24px', marginBottom: '24px' }}></div>
              <p className="section-body">
                Navonmesa engineers world-class ammunition designed for the most demanding environments and elite military forces. Our munitions are developed using state-of-the-art ballistics research to ensure unparalleled accuracy, reliability, and lethality.
              </p>
              <div style={{ marginTop: '40px' }}>
                <Link href="/capabilities" className="btn btn-primary btn-arrow">
                  Explore Ammunition Lines
                </Link>
              </div>
            </div>
            <div className={styles.splitImageWrapper}>
              <Image
                src="/ammo_product.png"
                alt="Premium Ammunition Products"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.splitImage}
              />
            </div>
          </div>

          {/* Feature Grid */}
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Small Arms</h3>
              <p className="section-body">Precision-engineered calibers for assault rifles, submachine guns, and sidearms ensuring consistent performance.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Special Purpose</h3>
              <p className="section-body">Armor-piercing, incendiary, and subsonic munitions tailored for specialized tactical operations and covert missions.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Heavy Ordnance</h3>
              <p className="section-body">High-explosive and anti-materiel rounds designed to neutralize fortified targets and light armored vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING / QUALITY CONTROL */}
      <section className={`${styles.sectionNavy} section`}>
        <div className="container">
           <div className={styles.splitLayoutGridReverse}>
            <div className={styles.splitImageWrapper}>
              <Image
                src="/manufacturing_bg.png"
                alt="Automated Manufacturing Facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.splitImage}
              />
            </div>
            <div className={styles.splitContent}>
              <span className="section-eyebrow">Production Excellence</span>
              <h2 className="section-title" style={{ marginTop: '16px' }}>Precision at Scale</h2>
              <p className="section-body" style={{ marginTop: '24px' }}>
                Our fully automated, military-grade manufacturing facilities leverage advanced robotics and AI-driven quality assurance. Every round produced by Navonmesa adheres strictly to NATO STANAG and MIL-SPEC standards, ensuring zero-defect output for critical missions.
              </p>
            </div>
          </div>

          <div className={styles.splitLayoutGrid} style={{ marginTop: '30px' }}>
            <div className={styles.splitContent}>
              <span className="section-eyebrow">Quality Assurance</span>
              <h2 className="section-title" style={{ marginTop: '16px' }}>Relentless Validation</h2>
              <p className="section-body" style={{ marginTop: '24px' }}>
                Navonmesa's testing laboratories subject our ammunition to extreme environmental, pressure, and ballistics testing. Our commitment to absolute reliability means our products perform flawlessly from arctic tundras to desert environments.
              </p>
            </div>
            <div className={styles.splitImageWrapper}>
              <Image
                src="/quality_control.png"
                alt="Quality Control Laboratory"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.splitImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className={`${styles.sectionDark} section`}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-eyebrow">International Operations</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Global Defense Network</h2>
          <p className="section-body" style={{ maxWidth: '700px', margin: '24px auto 0' }}>
            Trusted by allied nations and Tier-1 operators worldwide. Our robust supply chain ensures rapid, secure deployment of critical munitions to any theater of operations across the globe.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '600px', maxWidth: '1400px', margin: '0 auto' }}>
          <Image
            src="/global_reach.png"
            alt="Global Defense Map"
            fill
            style={{ objectFit: 'contain' }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`${styles.sectionNavy} section`} style={{ padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Secure Your Advantage</h2>
          <Link href="/contact" className="btn btn-gold btn-arrow">
            Contact Sales Division
          </Link>
        </div>
      </section>
    </main>
  );
}
