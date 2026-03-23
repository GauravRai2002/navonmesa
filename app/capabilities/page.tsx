"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../about/page.module.css";
import capStyles from "./capabilities.module.css";

export default function Capabilities() {
  return (
    <main>
      <div className={styles.pageHeader}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-eyebrow">Ordnance & Munitions</span>
          <h1 className="section-title">Capabilities Portfolio</h1>
        </div>
      </div>

      <section id="small-arms" className="section sectionDark">
        <div className="container">
          <div className={styles.grid2}>
            <div className={capStyles.productImageWrapper}>
              <Image
                src="/ammo_product.png"
                alt="Small Arms Ammunition"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className="section-title" style={{ fontSize: '40px', marginBottom: '24px' }}>Small Arms Ammunition</h2>
              <div className="gold-line" style={{ marginBottom: '24px' }}></div>
              <p className="section-body">
                Navonmesa's small arms division produces millions of rounds annually without a single drop in quality. From standard 5.56x45mm NATO ball to match-grade 7.62x51mm sniper munitions, our cartridges deliver devastating terminal ballistics and absolute reliability.
              </p>
              <ul className={capStyles.specList}>
                <li><strong>Calibers:</strong> 5.56mm, 7.62mm, 9mm, .338 Lapua, .50 BMG</li>
                <li><strong>Variants:</strong> FMJ, Enhanced Penetrator, Tracer, Blank</li>
                <li><strong>Standards:</strong> MIL-SPEC, STANAG 4172 / 2310 / 4383</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="special-purpose" className="section sectionNavy">
        <div className="container">
          <div className={styles.grid2} style={{ direction: 'rtl' }}>
             <div className={capStyles.productImageWrapper}>
               {/* Use the hero background as a placeholder for a dark tactical shot */}
              <Image
                src="/hero_bg.png"
                alt="Special Purpose Rounds"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ direction: 'ltr' }}>
              <h2 className="section-title" style={{ fontSize: '40px', marginBottom: '24px' }}>Special Purpose Munitions</h2>
              <div className="gold-line" style={{ marginBottom: '24px' }}></div>
              <p className="section-body">
                Designed for specialized mission profiles, our covert and tactical rounds offer solutions where standard ballistics fall short. This includes subsonic rounds for suppressed operations and highly lethal frangible rounds for CQB (Close Quarters Battle).
              </p>
              <ul className={capStyles.specList}>
                <li><strong>Subsonic Heavy Weight:</strong> 300 BLK, 9mm</li>
                <li><strong>Armor Piercing (AP):</strong> Tungsten core penetrators</li>
                <li><strong>Frangible:</strong> Zero over-penetration CT rounds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section sectionDark text-center" style={{ paddingBottom: '120px' }}>
          <div className="container">
              <h2 className="section-title" style={{ marginBottom: '40px' }}>Require Custom Loadouts?</h2>
              <Link href="/contact" className="btn btn-gold btn-arrow">Contact Engineering Team</Link>
          </div>
      </section>
    </main>
  );
}
