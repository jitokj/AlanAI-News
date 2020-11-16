import React, { useState,useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";


const alanKey = "d925c2476823b46672d4218af4223fbc2e956eca572e1d8b807a3e2338fdd0dc/stage";
  
const App = () => {

    const [newsArticles,setNewsArticles]=useState([]);
    
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command,saved_articles})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(saved_articles);
                }
            }
        })
    },[])
    return (
        <div>
           <NewsCards articles = {newsArticles} />
        </div>
    );
};

export default App;