import React, { useState,useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";


const alanKey = "d925c2476823b46672d4218af4223fbc2e956eca572e1d8b807a3e2338fdd0dc/stage";
  
const App = () => {

    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle,setActiveArticle] =useState(-1);
    const classes = useStyles();
    
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command,articles})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle(prevArticle=>prevArticle+1)
                }
            }
        })
    },[])
    return (
        <div>
        <div className={classes.logoContainer}>
            <img src="https://alan.app/voice/images/previews/preview.jpg" alt="alan Logo" className={classes.alanLogo} />
        </div>
           <NewsCards articles = {newsArticles} activeArticle={activeArticle} />
        </div>
    );
};

export default App;