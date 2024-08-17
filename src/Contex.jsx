import React from "react";
import { useState, createContext, useContext } from "react";

import Getcontex from "./Getcontex";
export const Acontext = createContext();



export default function Contex()
{
    const [user, setuser] = useState("Hello Contex");

    return(

        <>

        <h1>Contex Example</h1>

        <Acontext.Provider value={{status: user}} > 
            <h3>{user}</h3>

            <Getcontex />
            
        </Acontext.Provider>

        

        </>
    )
}