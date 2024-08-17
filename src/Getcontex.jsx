import React, { createContext, useContext } from "react";

import { Acontext } from "./Contex";

export default function Getcontex()
{
    const abc = useContext(Acontext);

    return(
        <>
        <h1> Get Context {abc.status}</h1>
        </>
    )
}