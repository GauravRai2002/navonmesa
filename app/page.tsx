"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

/* ─── Product Data ─── */
const readyProducts = [
  { name: "Fuses", image: "/product_fuses.png", desc: "Precision electronic fuse assemblies for defence applications" },
  { name: "Radio Set", image: "/product_radio.png", desc: "Ruggedized tactical communication systems" },
  { name: "Flight Glide Path Indicator", image: "/product_glidepath.png", desc: "Aviation instrument landing systems" },
  { name: "Chaffs & Flares", image: "/product_chaffs.png", desc: "Countermeasure dispensing systems" },
  { name: "Drones", image: "/product_drone.png", desc: "Unmanned aerial surveillance platforms" },
  { name: "Electronic PCBs", image: "/product_pcb.png", desc: "Military-grade printed circuit boards" },
];

const underTrialProducts = [
  { name: "Drones", image: "/product_drone.png", desc: "Next-generation tactical UAV systems under development" },
  { name: "Munitions", image: "/product_munitions.png", desc: "Advanced precision munitions in trial phase" },
];

const shipEquipment = [
  { name: "Navigation Systems", desc: "Placeholder — update with actual ship navigation equipment details" },
  { name: "Marine Electrical Panels", desc: "Placeholder — update with actual marine electrical panel details" },
  { name: "Communication Equipment", desc: "Placeholder — update with actual ship communication equipment details" },
  { name: "Engine Room Systems", desc: "Placeholder — update with actual engine room equipment details" },
  { name: "Safety & Fire Systems", desc: "Placeholder — update with actual safety equipment details" },
  { name: "Deck Machinery", desc: "Placeholder — update with actual deck machinery details" },
];

const certifications = [
  { icon: "✓", title: "GST Registered", desc: "Fully compliant with GST regulations" },
  { icon: "✓", title: "MSME Registered", desc: "Registered Micro, Small & Medium Enterprise" },
  { icon: "✓", title: "Vendor Code Registered", desc: "Approved vendor for defence procurement" },
  { icon: "✓", title: "Safety & Quality Policy", desc: "Compliant with industry safety standards" },
];

const whyChooseUs = [
  { icon: "👷", title: "Experienced Engineering Team", desc: "Decades of expertise in defence manufacturing and engineering excellence" },
  { icon: "⚡", title: "Quick Response & 24×7 Support", desc: "Round-the-clock availability for critical defence requirements" },
  { icon: "🛡️", title: "Trusted Vendor for Navy & PSU", desc: "Registered and trusted vendor for Indian Navy and Public Sector Undertakings" },
  { icon: "💰", title: "Competitive Pricing", desc: "Cost-effective solutions without compromising on quality or reliability" },
];

const stats = [
  { value: "30+", label: "Years Experience", desc: "Decades of dedicated service in defence manufacturing sector" },
  { value: "99.8%", label: "On-Time Delivery", desc: "Exceptional track record of meeting critical deadlines" },
  { value: "Zero", label: "Security Incidents", desc: "Impeccable safety and security record maintained" },
];

/* ─── Component ─── */
export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up, .fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section id="home" className={styles.hero}>
        <Image
          src="/hero_bg.png"
          alt="Navonmesa Defence Manufacturing Facility"
          fill
          priority
          className={styles.heroBg}
          quality={90}
        />
        <div className={styles.heroOverlay}></div>
        {/* Orange flowing curve decoration */}
        <div className={styles.heroCurve}></div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadges}>
            <span className="badge">🕐 30+ Years Experience</span>
            <span className="badge">🏆 ISO 9001:2015 Certified</span>
          </div>

          <h1 className={styles.heroTitle}>
            Precision-Engineered<br />Defence Systems
          </h1>
          <p className={styles.heroDesc}>
            Trusted manufacturer of advanced defence systems for government agencies.
            Delivering mission-critical components with uncompromising quality and security standards.
          </p>

          <div className={styles.heroActions}>
            <a href="#products" className="btn btn-primary btn-arrow">
              View Capabilities
            </a>
            <a href="#contact" className="btn btn-ghost">
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CORE CAPABILITIES
          ═══════════════════════════════════════ */}
      <section className={`${styles.sectionNavy} section`}>
        <div className={styles.curveDecoration}></div>
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>Core Capabilities</h2>
            <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
              Comprehensive defence manufacturing across multiple domains with proven
              track record in government contracts.
            </p>
          </div>

          <div className={styles.capGrid}>
            <div className={`${styles.capCard} fade-up delay-1`}>
              <div className={styles.capIcon}>🛩️</div>
              <h3>Aerospace & Defence</h3>
              <p className="section-body">Fuses, munitions, flight glide path indicators, chaffs & flares for air platforms.</p>
              <span className={styles.capBadge}>MIL-STD Compliant</span>
            </div>
            <div className={`${styles.capCard} fade-up delay-2`}>
              <div className={styles.capIcon}>🚢</div>
              <h3>Naval Systems</h3>
              <p className="section-body">Maritime defence equipment, ship systems, and naval weapon platforms.</p>
              <span className={styles.capBadge}>MIL-STD-810 Compliant | Salt Fog Tested</span>
            </div>
            <div className={`${styles.capCard} fade-up delay-3`}>
              <div className={styles.capIcon}>📡</div>
              <h3>Electronics & Communications</h3>
              <p className="section-body">Secure communication systems, radar technology, and electronic warfare equipment.</p>
              <span className={styles.capBadge}>TEMPEST Certified | Encrypted Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          READY PRODUCTS
          ═══════════════════════════════════════ */}
      <section id="products" className={`${styles.sectionDark} section halftone-overlay`}>
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-eyebrow">Our Portfolio</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>Ready Products</h2>
            <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
              Production-ready defence systems delivered to armed forces and government agencies.
            </p>
          </div>

          <div className={styles.productGrid}>
            {readyProducts.map((product, i) => (
              <div key={product.name} className={`${styles.productCard} fade-up delay-${(i % 3) + 1}`}>
                <div className={styles.productImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.productImage}
                  />
                  <div className={styles.productImageOverlay}></div>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          UNDER TRIAL
          ═══════════════════════════════════════ */}
      <section className={`${styles.sectionNavy} section`}>
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-eyebrow">In Development</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>Under Trial</h2>
            <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
              Next-generation defence systems currently undergoing rigorous testing and evaluation.
            </p>
          </div>

          <div className={styles.trialGrid}>
            {underTrialProducts.map((product, i) => (
              <div key={product.name + '-trial'} className={`${styles.trialCard} fade-up delay-${i + 1}`}>
                <div className={styles.trialImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.productImage}
                  />
                  <div className={styles.trialBadge}>
                    <span className="badge badge-trial">🔬 Under Trial</span>
                  </div>
                </div>
                <div className={styles.trialInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SHIP EQUIPMENT (Vertical Section)
          ═══════════════════════════════════════ */}
      <section id="ship-equipment" className={`${styles.sectionDark} section`}>
        <div className="container">
          <div className={styles.shipLayout}>
            {/* Left: Ship image */}
            <div className={`${styles.shipImageCol} fade-up`}>
              <div className={styles.shipImageWrap}>
                <Image
                  src="/ship_equipment.png"
                  alt="Naval Ship Equipment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.shipImage}
                />
                <div className={styles.shipImageGradient}></div>
              </div>
            </div>
            {/* Right: Equipment list */}
            <div className={`${styles.shipContentCol} fade-up delay-2`}>
              <span className="section-eyebrow">Maritime Vertical</span>
              <h2 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(30px, 4vw, 48px)' }}>Ship Equipment</h2>
              <p className="section-body" style={{ marginTop: '16px', marginBottom: '32px' }}>
                Maritime defence equipment, ship systems, and naval weapon platforms. 
                Supporting Indian Navy & Defence Projects in Karwar and beyond.
              </p>
              <div className={styles.shipList}>
                {shipEquipment.map((item, i) => (
                  <div key={item.name} className={styles.shipItem}>
                    <div className={styles.shipItemIcon}>⚓</div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US
          ═══════════════════════════════════════ */}
      <section className={`${styles.sectionGradient} section`}>
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-eyebrow">Our Strengths</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>Why Government Agencies Choose Us</h2>
            <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
              Trusted partner for mission-critical defence systems with proven reliability and security.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className={`${styles.whyCard} fade-up delay-${i + 1}`}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="section-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
          ═══════════════════════════════════════ */}
      <section className={`${styles.sectionDark} section`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={`${styles.statCard} fade-up`}>
                <div className={styles.statValue}>{stat.value}</div>
                <h3 className={styles.statLabel}>{stat.label}</h3>
                <p className="section-body" style={{ fontSize: '14px' }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CERTIFICATIONS & COMPLIANCE
          ═══════════════════════════════════════ */}
      <section className={`${styles.sectionNavy} section`}>
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-eyebrow">Standards</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>Certifications & Compliance</h2>
            <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
              Maintaining the highest standards in quality, security, and regulatory compliance.
            </p>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.title} className={`${styles.certCard} fade-up`}>
                <div className={styles.certIcon}>{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p className="section-body">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT / TEAM (Placeholder)
          ═══════════════════════════════════════ */}
      <section id="about" className={`${styles.sectionDark} section`}>
        <div className="container">
          <div className={styles.aboutLayout}>
            <div className={`${styles.aboutContent} fade-up`}>
              <span className="section-eyebrow">About Us</span>
              <h2 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(30px, 4vw, 48px)' }}>
                Professional Engineering Solutions
              </h2>
              <div className="orange-line" style={{ marginTop: '24px', marginBottom: '24px' }}></div>
              <p className="section-body">
                <strong>Navonmesa (नवोन्मेष)</strong> is a professional defence and industrial
                service provider. We provide technical manpower, engineering services,
                maintenance, and field support for defence, naval, and industrial sectors.
              </p>
              <p className="section-body" style={{ marginTop: '16px' }}>
                We deliver <strong>quality, reliability, and safety</strong>-driven services
                with experienced engineers and skilled technicians.
              </p>
            </div>
            <div className={`${styles.aboutTeam} fade-up delay-2`}>
              <h3 className={styles.teamTitle}>Our Engineers</h3>
              <div className={styles.teamPlaceholder}>
                <div className={styles.teamCard}>
                  <div className={styles.teamAvatar}>👤</div>
                  <div>
                    <h4>Mr. [Name]</h4>
                    <span>Chief Engineer — [Placeholder]</span>
                    <p>Placeholder — update with actual engineer details</p>
                  </div>
                </div>
                <div className={styles.teamCard}>
                  <div className={styles.teamAvatar}>👤</div>
                  <div>
                    <h4>Mr. [Name]</h4>
                    <span>Chief Engineer — [Placeholder]</span>
                    <p>Placeholder — update with actual engineer details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / CTA
          ═══════════════════════════════════════ */}
      <section id="contact" className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={`${styles.ctaText} fade-up`}>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>
                Ready to Discuss Your Requirements?
              </h2>
              <p className="section-body" style={{ marginBottom: '32px', maxWidth: '600px' }}>
                Contact our procurement team for detailed capability briefings and secure information exchange.
              </p>
              <a href="mailto:info@navonmesa.com" className="btn btn-primary btn-arrow">
                Request Information
              </a>
              <p style={{ marginTop: '24px', fontSize: '13px', opacity: 0.5 }}>
                All inquiries are handled through secure channels with appropriate confidentiality protocols.
              </p>
            </div>
            <div className={`${styles.ctaContact} fade-up delay-2`}>
              <h3>Contact Us</h3>
              <div className={styles.contactItem}>
                <span>📞</span>
                <div>
                  <strong>Proprietor</strong>
                  <p>[Name — Placeholder]</p>
                  <p>+91 [Phone — Placeholder]</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>[email@placeholder.com]</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <div>
                  <strong>Workshop Address</strong>
                  <p>[Address Line 1 — Placeholder]<br />[City, State — Placeholder]<br />[PIN — Placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAKE IN INDIA
          ═══════════════════════════════════════ */}
      <section className={styles.makeInIndia}>
        <div className="container">
          <div className={styles.makeInIndiaContent}>
            <div className={styles.flagStripe}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.makeInIndiaText}>
              <h2 className={styles.makeInIndiaTitle}>MAKE IN INDIA</h2>
              <p className={styles.makeInIndiaSubtitle}>
                Supporting Indian Navy & Defence Projects
              </p>
              <p className="text-hindi" style={{ fontSize: '18px', color: 'var(--color-orange)', marginTop: '8px' }}>
                आत्मनिर्भर भारत — Self-Reliant India
              </p>
            </div>
            <div className={styles.flagStripe}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
