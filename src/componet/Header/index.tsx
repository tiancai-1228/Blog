import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
function Header() {
  let location = useRouter();

  const [headerType, setHeaderType] = useState("header");
  const [isLogin, setIsLogin] = useState<any>();
  // const isLogin = Cookies.get("login");

  const handelLogOut = () => {
    Cookies.remove("login");
    setIsLogin(Cookies.get("login"));
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderType("header");
    } else {
      setHeaderType("header_home");
    }
    setIsLogin(Cookies.get("login"));
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
          <Link href="/chat">
            <a className={styles.h3}>chat</a>
          </Link>
        </li>
        {!isLogin && (
          <li>
            <Link href="/signUp">
              <a className={styles.h3}>SignUp/LogIn</a>
            </Link>
          </li>
        )}
        {isLogin && (
          <li>
            <a
              className={styles.h3}
              onClick={() => {
                handelLogOut();
              }}
            >
              Log out
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
