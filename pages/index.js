import Head from "next/head";
import { useCallback, useState, useEffect } from "react";
import styles from "./index.module.css";
import parse from "html-react-parser";
import kraaangconsole from "../pages/kraaangconsole/kraaangconsole";
export default function Home() {
  

  return (


    <div>
      <Head>
        <title>K.R.A.A.A.N.G. - Your Robotic Agile Consultant</title>
        <link rel="icon" href="/krang2.png" />
      </Head>
      <div>
        <img className={styles.krangimg} src="/krang2.png" />
      </div>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>K. R. A. A. A. N. G. - Your Robotic Agile Consultant</h1>
        </div>
        <div className={styles.krangCage}>
          {kraaangconsole()}
        </div>
      </main>
    </div>
  );
}
