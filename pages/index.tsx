import { Button } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../image/logo.jpg";
import loading from "../image/loading.png";
const Home: NextPage = () => {
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
        <p>My Front End Blog : )</p>
        <div className={styles.loginBtn}>
          <Button type="primary" shape="round" size={"middle"} ghost>
            visitor
          </Button>
          <Button
            type="primary"
            shape="round"
            size={"middle"}
            ghost
            onClick={() => {
              console.log(logo);
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
