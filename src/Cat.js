import React from "react";
import { useState } from "react";


export default function Cat()
{

    let[data, setdata] = useState ("CAT");

    const [god,setgod] = useState (
        {
            age:"21",
            loc:"npm",
            ph:"88709"
        }
    );

    const [see,setsee] = useState (["a","b","c",{age:"22",phone:"12345"}])

    let changedata = () =>
        {
            setdata("CAT")
        }

    let agedata = () =>
        {
            setgod( copydata => 
                {
                    return {...copydata, age:"22", loc:"uae", pop:"test"}
                }
            )
        }
    
    const adata = () =>
        {
            setsee (copydata =>
                {
                    return {...copydata, [0]:["e"]}
                }
            )
        }

    const arrayvalue = () =>
        {
            setsee ( olddata =>
                {
                    return{...olddata,[3]:{age:"100"}}
                }
            )
        }    

    return(
        <>
            <h2>React UseState Example {data}</h2>

            <button onClick={ ()=> (setdata ("RAT" ) ) } >change to rat </button>
            <button onClick={changedata} >change to cat </button>

            <h2>object Example {god.age} {god.pop} </h2>
            <button onClick={agedata} >change age value</button>

            <h2>Array Example {see[0]}</h2>
            <button onClick={adata}>update array value</button>

            <h2>array in object example {see[3].age}</h2>
            <button onClick={arrayvalue}>update array</button>

        </>
    )
}

