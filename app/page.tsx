import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>

      <br />

      <ul className={styles.navLinks}>
        <li><Link href="/" className={styles["nav-button"]}>Home</Link></li>
        <li><Link href="/product" className={styles["nav-button"]}>Product</Link></li>
        <li><Link href="/services" className={styles["nav-button"]}>Services</Link></li>
        <li><Link href="/about" className={styles["nav-button"]}>About</Link></li>
        <li><Link href="/contact" className={styles["nav-button"]}>Contact</Link></li>
      </ul>

      <br />

      <Link href="https://nextjs.org/" target="_blank">Next.js Documentation</Link>
    </>
  );
}
 