"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../about/page.module.css";
import capStyles from "../capabilities/capabilities.module.css";

export default function Manufacturing() {
  return (
    <main>
      <div className={styles.pageHeader}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-eyebrow">Production & Scale</span>
          <h1 className="section-title">Automated Precision</h1>
        </div>
      </div>

      <section id="facilities" className="section sectionNavy">
        <div className="container">
          <div className={styles.grid2}>
            <div>
              <h2 className="section-title" style={{ fontSize: '40px', marginBottom: '24px' }}>Advanced Facilities</h2>
              <div className="gold-line" style={{ marginBottom: '24px' }}></div>
              <p className="section-body">
                Navonmesa operates multiple state-of-the-art manufacturing plants globally. Our facilities utilize next-generation robotics and AI-driven optical scanners to monitor production lines with micron-level accuracy.
              </p>
              <ul className={capStyles.specList}>
                <li><strong>Capacity:</strong> 2.5 Billion rounds annually</li>
                <li><strong>Automation:</strong> 98% fully automated assembly lines</li>
                <li><strong>Certifications:</strong> ISO 9001:2015, AQAP 2110</li>
              </ul>
            </div>
            <div className={capStyles.productImageWrapper}>
              <Image
                src="/manufacturing_bg.png"
                alt="Automated Production Floor"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testing" className="section sectionDark">
        <div className="container">
          <div className={styles.grid2}>
             <div className={capStyles.productImageWrapper}>
              <Image
                src="/quality_control.png"
                alt="Quality Control Testing"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className="section-title" style={{ fontSize: '40px', marginBottom: '24px' }}>Relentless Quality Control</h2>
              <div className="gold-line" style={{ marginBottom: '24px' }}></div>
              <p className="section-body">
                Our testing protocols exceed military standards. Every single batch is subjected to extreme temperature variability (–54°C to +52°C), high-pressure ballistic validation, and water-resistance testing before it is cleared for deployment.
              </p>
              <p className="section-body" style={{ marginTop: '16px' }}>
                We don't test for compliance; we test for perfection. Navonmesa guarantees zero failure rates in critical operation environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section sectionNavy text-center" style={{ paddingBottom: '120px' }}>
          <div className="container">
              <h2 className="section-title" style={{ marginBottom: '40px' }}>Audit Our Facilities</h2>
              <p className="section-body" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                We welcome allied defense procurement officers and military delegations to tour our facilities and witness our dedication to precision firsthand. 
              </p>
              <Link href="/contact" className="btn btn-gold btn-arrow">Schedule a Tour</Link>
          </div>
      </section>
    </main>
  );
}
