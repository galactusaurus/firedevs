import Head from "next/head";
import { useCallback, useState, useEffect } from "react";
import styles from "./index.module.css";
import parse from "html-react-parser";
import kraaangconsole from "../pages/kraaangconsole/kraaangconsole";

export default function Home() {
  

  return (


    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>


      <main className={styles.main}>
        <div className={styles.header}>
          <h1>K. R. A. A. A. N. G.</h1>
        </div>
        <div className={styles.krangCage}>
          {kraaangconsole()}
        </div>
      </main>


    </div>
  );
}
