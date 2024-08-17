import React, { useContext } from "react";

import {namecox} from "./Createcon";

export default function Creategetcon()
{
    const abc = useContext(namecox);
    
    return(
        <>
        {abc.data}
        </>
    )
}