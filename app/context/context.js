"use client";
import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
    const [ name, setName ] = useState(null);

    useEffect(()=> {
        let userName = localStorage?.getItem("name") ? localStorage.getItem("name") : null
        if(userName != undefined && userName !== "undefined") setName(userName);
    },[])

    useEffect(() => {
        if(name != undefined) localStorage.setItem("name", name);
    }, [name]);

    return (
        <GlobalContext.Provider value={{ name, setName }}>
            {children}
        </GlobalContext.Provider>
    );
}