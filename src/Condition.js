import React from "react";

export default function Condition()
{
    // let a=5;
    // if(a>=3)
    //     {
    //         return(
    //             <>
    //                 <h1>If</h1>

    //             </>
    //         )
    //     }

    // else
    // {
    //     return(
    //         <>
    //             <h1>esle</h1>
    //         </>
    //     )
    // }

    
    let a=7;

    return(
        <>
        
            <b>{ a>5 ? <h2>if part</h2> : <h2>else part</h2> }</b>
                       
        
        </>
    )
}