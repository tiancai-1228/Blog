import Link from "next/link";
import React from "react";
import styles from "../styles/404.module.css";
function NotFund() {
  return (
    <div className={styles.notFund}>
      <h1>Ooops...</h1>
      <p>NotFund </p>
      <p>
        go back to the
        <Link href="/">
          <a className={styles.goBackBtn}>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFund;
