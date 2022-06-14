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
import { useAppDispatch, useAppSelector } from "../hook/useAppRedux";
import { setUserData } from "../redux/slices/accountSlice";

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.account.value);

  const [isLogin, setIsLogin] = useState<any>();
  const handelLogOut = () => {
    Cookies.remove("login");
    dispatch(setUserData({ userData: undefined }));
  };
  useEffect(() => {
    setIsLogin(Cookies.get("login"));
  }, [userData]);

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
        <p>第一次登入或註冊可能會需要等待一下heroku server睡醒 :)</p>
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
          {isLogin && (
            <Button
              type="primary"
              shape="round"
              size={"middle"}
              ghost
              onClick={() => {
                handelLogOut();
              }}
            >
              Log out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
