import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../hook/useAppRedux";
import { setUserData } from "../../redux/slices/accountSlice";
import Cookies from "js-cookie";
function Header() {
  let location = useRouter();
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.account.value);

  const [headerType, setHeaderType] = useState("header");
  const [isLogin, setIsLogin] = useState<any>();

  const handelLogOut = () => {
    Cookies.remove("login");
    dispatch(setUserData({ userData: undefined }));
  };

  useEffect(() => {
    console.log("in");

    if (
      location.pathname === "/" ||
      location.pathname === "/signUp" ||
      location.pathname === "/login"
    ) {
      setHeaderType("header");
    } else {
      setHeaderType("header_home");
    }
  });

  useEffect(() => {
    setIsLogin(Cookies.get("login"));
  }, [userData]);

  return (
    <div
      className={headerType === "header" ? styles.header : styles.header_home}
    >
      {headerType === "header_home" && (
        <div className={styles.backBtn}>
          <Link href="/">
            <a className={styles.h3}>back</a>
          </Link>
        </div>
      )}

      <ul className={styles.item}>
        <li>
          <Link href="/home">
            <a className={styles.h3}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.h3}>About</a>
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
