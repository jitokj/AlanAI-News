import React, { useState,useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";


const alanKey = "d925c2476823b46672d4218af4223fbc2e956eca572e1d8b807a3e2338fdd0dc/stage";
  
const App = () => {
    
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command,saved_articles})=>{
                if(command === 'newHeadlines'){
                    console.log(saved_articles);
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Alan-ai </h1>
        </div>
    );
};

export default App;