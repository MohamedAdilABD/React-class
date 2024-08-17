import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Login()
{
    const [name,setname] = useState("");
    const [email,setemail] = useState("");

    const navigate = useNavigate();

    const login = (e) =>
    {
        e.preventDefault();

        axios.get("https://mytravels.store/api.php",
            {
                params:{
                    name:name,
                    email:email,
                    action:"login"
                }
            }
        )

        .then ( (res) =>
        {
            if(res.data == 'User Found')
            {
                alert("Login Successful");
                navigate('/home');
                localStorage.setItem('sname', name)
            }
            else
            {
                alert("Login Failed")
            }
        }
        )

        .catch ( (error) =>
        {
            console.log(error, "Data has Error");
        })

    }
    return(
        <>
        <div className="container bg-light p-4 text-center mt-3">

            <h1>Login Form</h1>

            <form onSubmit={login}>

                <input className="w-25 m-3 p-1" type="text" placeholder="Enter the Name"  onChange={ (e) => setname(e.target.value) } required />
                <br/>

                <input className="w-25 m-3 p-1" type="text" placeholder="Enter the email"  onChange={ (e) => setemail(e.target.value) } required />
                <br/>

                <Link className="btn btn-primary" to={'/register'}>Register</Link>

                <input type="submit" className="btn btn-success ms-3" value="Login"/>

            </form>

        </div>
        </>
    )
}