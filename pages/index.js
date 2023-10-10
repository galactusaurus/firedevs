import Head from "next/head";
import { useCallback, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

 

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setPromptInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div> 
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Ask me a question</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder=""
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>


      </main>

     
    </div>
  );
}
