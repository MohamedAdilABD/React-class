import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register()
{
    const [name,setname] = useState("");
    const [email,setemail] = useState("");

    const navigate = useNavigate();

    const handelsubmit = (e) =>
    {
        e.preventDefault();

        axios.get("https://mytravels.store/api.php",
            {
                params:{
                    name:name,
                    email:email,
                    action:"create"
                }
            }
        )

        .then ((res) =>
        {
            alert("Data Added");
            setname("");
            setemail("");
            navigate('/')
        }
        )

        .catch ( (error) =>
        {
            console.log(error, "Data has Error");
        })
    };
    
    
    return(
        <>
        <div className="container bg-light text-center p-4 mt-3">

            <h1>Register Form</h1>

            <form onSubmit={handelsubmit}>

                <input className="w-25 m-3 p-1" type="text" placeholder="Enter the Name" onChange={ (e) => setname(e.target.value) } required />
                <br/>

                <input className="w-25 m-3 p-1" type="text" placeholder="Enter the email" onChange={ (e) => setemail(e.target.value) } required />
                <br/>

                <Link className="btn btn-primary" to={'/'}>Login</Link>

                <input type="submit" className="btn btn-success ms-3" value="Register"/>

            </form>

        </div>
        </>
    )
}