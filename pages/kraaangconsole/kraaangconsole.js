import Head from "next/head";
import { useCallback, useState, useEffect } from "react";
import styles from "./kraaangconsole.module.css";
import parse from "html-react-parser";


export default function kraaangconsole(props) {
    var defaultUrl = "diat_skeleton/diat.html/?causes=Green_Energy";
    const [promptInput, setPromptInput] = useState("");
    const [runningResult, setRunningResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [oozing, setOozing] = useState(false);
    const [url, setUrl] = useState("diat_skeleton/diat.html/?causes=Green_Energy,Affordable_Housing");
    

    function parseResult(result) {
        return parse(result);
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (runningResult.length === 0 & !oozing) {
            var thisArray = runningResult.slice();
            thisArray.push("<div class='question'>Welcome to NOOB, the impactful advising tool of the future.</div>");
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
        setUrl(defaultUrl);     
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
        await makeCall("show all stories and bugs, don't include completed stories or bugs: story or bug | number | status | description", "backlogOnly");
    }

    async function instantRetro(e){
        e.preventDefault();        
        await makeCall(`
        look at the last sprint and analyze the results, 
        create a report on the data and speculate why some developers didn't complete their stories and why bugs were introduced.
        look back at the sprint before and compare the results statistically.
        `, "retro");
    }

    async function suggestNextSprint(e){
        e.preventDefault();        
        await makeCall(`for each developer, assign one or two stories or bugs with a status of Not Started and a time_estimate less than or equal to 32 hours. all stories and bugs in status Not Started should be assigned. include the story or bug number and the time_Estimate for the bug or story in the response.
        `, "resourcing");
    }


 

    return (
        <div className={styles.holder}>
            <div className={styles.commBox}>
                

                <div className={styles.krangConsole}>
                    <div className={styles.result}>{resultBuilder()}</div>
                    {loading ?
                        (<div className={styles.ldsdualring}></div>)
                        :
                        (<div></div>)
                    }
                    {
                     oozing ? 
                     (<img className={styles.oozeGif} src="/ooze.gif" />)
                     :
                     (<div></div>)   
                    }
                </div>

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
                            <input type="submit" value="Go" />
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.powerPanel}>
                
                <iframe width="1000px" height="800px" style={{border:"none"}} src={url} title="description"></iframe>
            </div>

        </div>
    );
}
