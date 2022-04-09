import { Button } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/TitlePage.module.css";
import logo from "../image/logo.jpg";
import loading from "../image/loading.png";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();
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
        <p>Hellow Front End Blog : )</p>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
