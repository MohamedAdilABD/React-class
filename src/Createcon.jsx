import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Creategetcon from "./Creategetcon";

export const namecox = createContext();

export default function Createcon()
{
    const [name,setname] = useState("Hello React")
    return(
        <>
        <namecox.Provider value={{data: name}}>

            <Creategetcon/>

        </namecox.Provider>
        </>
    )
}