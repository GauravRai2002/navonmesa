"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // Always dark on non-home pages, otherwise transparent until scrolled
  const headerClass = `${styles.header} ${scrolled || !isHome ? styles.headerScrolled : ""}`;

  return (
    <header className={headerClass}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}></div>
        NAVONMESA
      </Link>
      <nav className={styles.nav}>
        <Link href="/capabilities" className={`${styles.navLink} ${pathname === "/capabilities" ? styles.active : ""}`}>Capabilities</Link>
        <Link href="/manufacturing" className={`${styles.navLink} ${pathname === "/manufacturing" ? styles.active : ""}`}>Manufacturing</Link>
        <Link href="/global" className={`${styles.navLink} ${pathname === "/global" ? styles.active : ""}`}>Global Reach</Link>
        <Link href="/about" className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}>Who We Are</Link>
        <Link href="/contact" className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`}>Contact</Link>
      </nav>
    </header>
  );
}
