import React from "react";
import Newstyle from "./Style.module.css"
import './normal.css'

export default function Styling()
{
    const abc =
    {
        color:"green",
        backgroundColor:"pink",
        textAlign:"center",
        padding:"40px"
    }

    return(
        <>
           <h1>Welcome to React Css Style page</h1>

           <h2 style={{color:"red", backgroundColor:"yellow", textAlign:"center", padding:"40px"}}>Inline css</h2>

           <h2 style={abc}>Object Css</h2>

           <h2>Module Css</h2>

           <h2 className={Newstyle.good}>Class Type Css</h2>

           <h2 className="normal">Normal Css</h2>
           <br/> <br/> 

           <h1>Boostrap Css</h1>

           <div className="container p-5 text-center">
            
              <div className="row">

                  <div className="col-4 bg-primary p-5">
                     <h3>Block 1</h3>
                  </div>

                  <div className="col-4 bg-secondary p-5">
                      <h3>Block 2</h3>
                  </div>

                  <div className="col-4 bg-primary p-5">
                      <h3>Block 3</h3>
                  </div>

              </div>

           </div>
        </>
    )
}