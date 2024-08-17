import React, { useState } from "react";

export default function Formval()
{
    const [name,setname] = useState("");
    const [phone,setphone] = useState("");
    const [err,seterr] = useState("");

    const submitdata = (e) => {
        e.preventDefault();

        if((name=="") && (phone==""))
            {
                seterr("please enter all the data")
            }
    }
    
    return(
        <>
         <h1>Form example</h1>

         <form className="container p-5 bg-primary">
             <label>Name:</label>
             <input onChange={(e) => setname(e.target.value)} type="text"  placeholder="Enter your Name"/>
             <br/> <br/>

             <label>Phone:</label>
             <input onChange={(e) => setphone(e.target.value)} type="number" placeholder="Enter your  number"/>
             <br/> <br/>

             <button className="btn btn-info m-4" onClick={submitdata}> Submit </button>
             <br/> <br/>

             <p>{err}</p>
             
         </form>

         
        
        </>
    )
}