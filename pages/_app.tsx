import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../componet/Layout";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
