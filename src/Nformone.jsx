import React, { useState } from "react";

export default function Nformone()
{
    const [name,setname] = useState("");
    const [mail,setmail] = useState("");
    const [phone,setphone] = useState("");
    const [gender,setgender] = useState("");
    const [lang,setlang] = useState("");

    return (
        <>
         <h1 className="text-center p-4 ">Form Validation</h1>

         <form className="container bg-secondary ">

            <label>Name:</label>
            <input type="text" value={name} onChange={ (e) => setname(e.target.value) } placeholder="Enter the Name"/>
            <br/> <br/>

            <label>Email:</label>
            <input type="email" value={mail} onChange={ (e) => setmail(e.target.value) } placeholder="Enter the Email"/>
            <br/> <br/>

            <label>Phone:</label>
            <input type="number" value={phone} onChange={ (e) => setphone(e.target.value) } placeholder="Enter the Number"/>
            <br/> <br/>

            <label>Gender:</label>
            <input type="radio" name="gender" value={gender} onChange={ (e) => setgender(e.target.value) }/>Male
            <input type="radio" name="gender" value={gender} onChange={ (e) => setgender(e.target.value) }/>Female
            <br/> <br/>

            <label>Language known:</label>
            <input type="checkbox" value={lang} onChange={(e) => setlang(e.target.value)}/>English
            <input type="checkbox" value={lang} onChange={(e) => setlang(e.target.value)}/>Tamil
            <input type="checkbox" value={lang} onChange={(e) => setlang(e.target.value)}/>Arabic 
            <input type="checkbox" value={lang} onChange={(e) => setlang(e.target.value)}/>French 
            <br/> <br/>

            <label>Select Country:</label>
            <select>
                <option>Chose your country</option>
                <option>India</option>
                <option>Pakstian</option>
                <option>Turkey</option>
                <option>China</option>
                <option>Japan</option>
                <option>UAE</option>
            </select>      
            <br/> <br/>

            <button className="btn btn-info m-4">Submit</button> 
         </form>
        
        
        </>
    )
}