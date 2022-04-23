import React, { useEffect, useState } from "react";
import { Button } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/TitlePage.module.css";
import logo from "../image/logo.jpg";
import loading from "../image/loading.png";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Home: NextPage = () => {
  const router = useRouter();
  const isLogin = Cookies.get("login");

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.box1}>
          <Image src={logo.src} layout="fill" />
        </div>
        <div className={styles.box2}>
          <Image src={loading.src} layout="fill" />
        </div>
      </div>
      <div className={styles.title}>
        <h1>welcome</h1>
        <p>Front End Blog : )</p>
        <div className={styles.loginBtn}>
          <Button
            type="primary"
            shape="round"
            size={"middle"}
            onClick={() => {
              router.push("/home");
            }}
            ghost
          >
            visitor
          </Button>
          {!isLogin && (
            <Button
              type="primary"
              shape="round"
              size={"middle"}
              ghost
              onClick={() => {
                router.push("/login");
              }}
            >
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
