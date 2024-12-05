import Head from "next/head";
import { useCallback, useState, useEffect } from "react";
import styles from "./index.module.css";
import parse from "html-react-parser";
import kraaangconsole from "../pages/kraaangconsole/kraaangconsole";
export default function Home() {
  

  return (


    <div>
      <Head>
        <title>NOOB - NewToWealth Official Opportunity Broker </title>
        <link rel="icon" href="/baby.png" />
      </Head>
      

      <main className={styles.main}>
        
        <div className={styles.krangCage}>
          {kraaangconsole()}
        </div>
      </main>
    </div>
  );
}
