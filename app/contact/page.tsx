"use client";

import styles from "../about/page.module.css";
import contactStyles from "./contact.module.css";

export default function Contact() {
  return (
    <main>
      <div className={styles.pageHeader}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-eyebrow">Connect With Us</span>
          <h1 className="section-title">Global Defense Sales</h1>
        </div>
      </div>

      <section className="section sectionDark">
        <div className="container">
          <div className={styles.grid2} style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '24px' }}>Secure Communications</h2>
              <div className="gold-line" style={{ marginBottom: '24px' }}></div>
              <p className="section-body" style={{ marginBottom: '40px' }}>
                For international procurement, technical specifications, or specialized contract inquiries, please reach out to our global defense sales division. All communications are strictly confidential.
              </p>
              
              <div className={contactStyles.contactInfo}>
                <div className={contactStyles.infoBlock}>
                  <h4>Global Headquarters</h4>
                  <p className="section-body">1700 Defense Boulevard<br/>Arlington, VA 22209<br/>United States</p>
                </div>
                <div className={contactStyles.infoBlock}>
                  <h4>European Operations</h4>
                  <p className="section-body">Avenue des Alliés 45<br/>1000 Brussels<br/>Belgium</p>
                </div>
                <div className={contactStyles.infoBlock}>
                  <h4>Direct Link</h4>
                  <p className="section-body">sales@navonmesa.defense<br/>+1 (800) 555-AMMO</p>
                </div>
              </div>
            </div>

            <div className={contactStyles.formWrapper}>
              <form className={contactStyles.form} onSubmit={(e) => e.preventDefault()}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '24px', letterSpacing: '0.05em' }}>Inquiry Form</h3>
                
                <div className={contactStyles.inputGroup}>
                  <label htmlFor="name">Full Name / Rank</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                
                <div className={contactStyles.gridInput}>
                  <div className={contactStyles.inputGroup}>
                    <label htmlFor="org">Organization / Agency</label>
                    <input type="text" id="org" placeholder="Ministry of Defense" />
                  </div>
                  <div className={contactStyles.inputGroup}>
                    <label htmlFor="email">Secure Email</label>
                    <input type="email" id="email" placeholder="john.doe@mod.gov" />
                  </div>
                </div>

                <div className={contactStyles.inputGroup}>
                  <label htmlFor="interest">Primary Interest</label>
                  <select id="interest" defaultValue="">
                    <option value="" disabled>Select a division...</option>
                    <option value="small">Small Arms Ammunition</option>
                    <option value="heavy">Heavy Ordnance</option>
                    <option value="special">Special Purpose / Covert</option>
                    <option value="tour">Facility Tour / Audit</option>
                  </select>
                </div>

                <div className={contactStyles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Include contract requirements or specifications..."></textarea>
                </div>

                <button type="submit" className="btn btn-gold btn-arrow" style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}>
                  Transmit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
