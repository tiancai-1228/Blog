/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hook/useAppRedux";
import styles from "../../styles/Home.module.css";
const home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>welcome</h1>
      </div>
    </>
  );
};

export default home;
