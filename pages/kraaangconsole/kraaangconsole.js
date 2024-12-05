import Head from "next/head";
import { useCallback, useState, useEffect } from "react";
import styles from "./kraaangconsole.module.css";
import parse from "html-react-parser";


export default function kraaangconsole(props) {
    var rootURL = "diat_skeleton/diat.html/?causes=";
    var allFlag = "ALL";
    var defaultUrl = rootURL + allFlag;
    var flagList = ""; 
    const [promptInput, setPromptInput] = useState("");
    const [runningResult, setRunningResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [oozing, setOozing] = useState(false);
    const [url, setUrl] = useState(defaultUrl);
    

    function parseResult(result) {
        return parse(result);
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (runningResult.length === 0 & !oozing) {
            var thisArray = runningResult.slice();
            thisArray.push("<div class='question'>Hi. I'm N00b. <br/> </div>");
            
            thisArray.push("<div class='question2'>My job is to help you find a Financial Advisor that can help you invest in ways that align with your passions. <br/></div>");      
            
            thisArray.push("<div class='question3'> Tell me what you care about. <br/> </div>");
              
            
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
            let result = data.result;
            const re = new RegExp("==(.*?)==");
            let subResult = result.match(re);
            flagList = subResult[1];
            flagList = flagList.replaceAll(' ', '');
            setUrl(rootURL+flagList);
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
        //setUrl(defaultUrl);     
        await makeCall(promptInput, "generate");
    }

    function resultBuilder() {
        return runningResult.map((item, index) => {
            return (<div id={index}>{parseResult(item)}</div>);
        })

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
