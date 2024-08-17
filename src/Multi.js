import React, { useState } from "react";
import './multi.css';

export default function Multi ()
{
    const [data, setdata] = useState( [] );

    const changedata = (e)=>
        {
            
            const name = e.target.name;
            //const value = e.target.type == 'ckeckbox' ? e.target.checked : e.target.value
            const value = e.target.value

            setdata( (olddata)=> ( {...olddata, [name] : value } ) )
        }


    return (

        <>
           <div className="container-fluid p-5 h-75 bg-primary text-center">
             <h1>Sign up Form</h1> 
           </div>
           <br/> <br/>

           <form className="formh">
             <label>Name:</label>
             <input onChange={changedata} type="text" placeholder="Enter your name" name="name" />
             <br/> <br/>

             <label>Phone:</label>
             <input onChange={changedata} type="number" placeholder="Enter your phone" name="phone"/>
             <br/> <br/>

             <label>Gender:</label>
             <input onChange={changedata} defaultChecked={data.gender == 'male'} type="radio" name="gender" value="male"/>Male
             <input onChange={changedata} defaultChecked={data.gender == 'female'} type="radio" name="gender" value="female"/>Female
             <br/> <br/>

             <label>Language kow:</label>
             <input onChange={changedata} type="checkbox" name="lang" value='English'/> English
             <input onChange={changedata} type="checkbox" name="lang" value='Tamil'/> Tamil
             <br/> <br/>

             <label>Select city:</label>
             <select onChange={changedata} name="city">
                <option>select city</option>
                <option value='pondy'>pondy</option>
                <option value='chennai'>chennai</option>
             </select>
             <br/> <br/>

             <input  type="submit" value='Register'/>
             
           </form>

           <div className="container-fluid p-2 bg-primary text-center">
             <p>Created by Mohamed</p>
           </div>
        </>
    )
}