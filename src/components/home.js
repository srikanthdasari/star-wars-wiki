import React, {useContext, useState, useEffect} from 'react';
import Context from '../configs/context';


export default function Home() {
    const context = useContext(Context)
    useEffect(()=>{
        if(!context.isAppReady) {
            context.dispatchAppLoading();
            setTimeout(()=>{
                context.dispatchAppLoaded();
            },2000);            
        }
    })

    return (
        <h1>
        {
            context.isAppReady?"Welcome":"Loading.."
        }
        </h1>

    )
}