import Head from "next/head";
import { useCallback, useState, useEffect } from "react";
import styles from "./kraaangconsole.module.css";
import parse from "html-react-parser";

export default function kraaangconsole(props) {
    const [promptInput, setPromptInput] = useState("");
    const [runningResult, setRunningResult] = useState([]);
    const [loading, setLoading] = useState(false);

    function parseResult(result) {
        return parse(result);
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (runningResult.length === 0) {
            var thisArray = runningResult.slice();
            thisArray.push("<div class='question'>******** I am KRAAANG, your agile advisor, coach, consigliere, and analyst. Ask me anything or use my power panel. **************</div>");
            setRunningResult(thisArray);
        }
    });

    async function onSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
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

            var thisArray = runningResult.slice();
            thisArray.push("<div class='question'>" + promptInput + "</div>");
            setRunningResult(thisArray);
            thisArray.push(data.result);
            setRunningResult(thisArray);

            setPromptInput("");
            setLoading(false);
        } catch (error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
            setLoading(false);
        }
    }

    function resultBuilder() {
        return runningResult.map((item, index) => {
            return (<div id={index}>{parseResult(item)}</div>);
        })

    }

    return (
        <div className={styles.holder}>
            <div className={styles.commBox}>
                <div className={styles.inputBox}>
                    <form onSubmit={onSubmit}>
                        <div className={styles.promptBox}>
                            <input
                                type="text"
                                name="prompt"
                                placeholder="query kraang"
                                value={promptInput}
                                onChange={(e) => setPromptInput(e.target.value)}
                            />
                        </div>
                        <div className={styles.promptButton}>
                            <input type="submit" value="Generate" />
                        </div>
                    </form>
                </div>

                <div className={styles.krangConsole}>
                    <div className={styles.result}>{resultBuilder()}</div>
                    {loading ?
                        (<div className={styles.ldsdualring}></div>)
                        :
                        (<div></div>)
                    }
                </div>
            </div>
            <div className={styles.powerPanel}>
                <div className={styles.panelHeader}>POWER PANEL</div>
                <div className={styles.panelButtonHolder}>
                    <button
                    >
                        Analyze Our Backlog
                    </button>

                </div>
            </div>
        </div>
    );
}
