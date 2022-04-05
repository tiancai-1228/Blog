import React from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.item}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Portfilio</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
