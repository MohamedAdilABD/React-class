import React, { useState } from "react";

export default function Form()
{

    const [name,setname] = useState();
    const [phone,setphone] = useState();
    const [show,setshow] = useState(false);


    const changedata = (event) =>
        {
            event.preventDefault ();
            setshow (true)
        }


    return(

        <>
          <h1>Form Example</h1>

          <form>
             <label>Name:</label>
             <input onChange={(e) => setname(e.target.value)} type="text"  placeholder="Enter your Name"/>
             <br/> <br/>

             <label>Phone:</label>
             <input onChange={(e) => setphone(e.target.value)} type="number" placeholder="Enter your phone number"/>
             <br/> <br/>

             <button onClick={changedata}> Submit </button>
             <br/> <br/>

          </form>

          

          {show ? <> <h1>Show data</h1>
          <p>Your name is {name} </p>
          <p>Your name is {phone} </p> </> : null }
        
        </>
    )
}
