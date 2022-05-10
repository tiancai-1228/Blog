import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
function Header() {
  let location = useRouter();

  const [headerType, setHeaderType] = useState("header");
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setHeaderType("header");
    } else {
      setHeaderType("header_home");
    }
  });

  return (
    <div
      className={headerType === "header" ? styles.header : styles.header_home}
    >
      <ul className={styles.item}>
        <li>
          <Link href="/">
            <a className={styles.h3}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.h3}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.h3}>Portfilio</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={styles.h3}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/signUp">
            <a className={styles.h3}>Sign Up</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
