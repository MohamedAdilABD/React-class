import React, { useState } from "react";


export default function Newformval()
{
    const [email,setemail] = useState("");
    const [error,seterror] = useState("");

    const checkemail = (data) =>
        {
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data))
                {
                    seterror("Email is invalid")
                }
                else
                {
                    seterror("Valid") 
                }
        }

    const submit = (e) =>
        {
            e.preventDefault();

            if(!email)
                {
                    seterror("This is Requred")
                }
        }

    return(
        <>
        <h1>Form</h1>

        <form onSubmit={submit}>
            <input type="email" onChange={ (e) => checkemail(e.target.value) } />
            <p className="text-danger">{error}</p>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}