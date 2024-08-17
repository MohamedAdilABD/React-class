import {React,useState} from "react";

 


let a="this is a function"
let bc = ["a","d","i","l"]


const Dood = () =>
    (
        <>

        <h1>useState </h1>
        <h1>Hello Arrow function  {a}</h1>
        <h2> {bc[0]} </h2>
        
        <h2>
            {
               bc.map ( (data,index) => (<p> {index}{data} </p>))
            }
        </h2>

        </>
    )



    export default Dood;