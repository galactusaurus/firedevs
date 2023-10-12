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

    async function makeCall(thisPrompt, route){
        try {
            setLoading(true);
            const response = await fetch("/api/"+route, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: thisPrompt }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }

            var thisArray = runningResult.slice();
            thisArray.push("<div class='question'>" + thisPrompt + "</div>");
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
    async function onSubmit(event) {
        event.preventDefault();
        await makeCall(promptInput, "generate");
    }

    function resultBuilder() {
        return runningResult.map((item, index) => {
            return (<div id={index}>{parseResult(item)}</div>);
        })

    }

    async function showTeam(e){
        e.preventDefault();        
        await makeCall("show me the team with skillsets, don't include gender data", "teamOnly");
    }

    async function analyzeBacklog(e){
        e.preventDefault();        
        await makeCall("show the backlog in this format, include all stories and bugs, don't included completed stories or bugs: story or bug | number | status | description", "backlogOnly");
    }

    async function instantRetro(e){
        e.preventDefault();        
        await makeCall("look at the last sprint and analyze the results, create a report on the data and speculate why some developers didn't complete their stories and why bugs were introduced", "retro");
    }

    async function suggestNextSprint(e){
        e.preventDefault();        
        await makeCall(`look at what his not yet started in the backlog, assign only stories in Not Started status, assign items 
        to developers understanding that only 80 hours may be planned for each developer, 
        and each story may only go to one developer, call this Kraaang's Sprint Plan
        and structure it such that the developer is parent div and the stories are in an unordered list
        beneath. make sure to include the story or bug number and the description.
        `, "generate");
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
                    <button onClick={showTeam}>
                        Team
                    </button>
                    <button onClick={analyzeBacklog}>
                        Backlog
                    </button>
                    <button onClick={instantRetro}>
                        Instant Retro
                    </button>
                    <button onClick={suggestNextSprint}>
                        Plan Next Sprint
                    </button>
                </div>
            </div>
        </div>
    );
}
