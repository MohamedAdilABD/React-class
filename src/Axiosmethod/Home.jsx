import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home()
{
    const abc = localStorage.getItem('sname');

    const navi = useNavigate();

    useEffect( ()=> 
    {
        if(!abc)
            {
                navi('/')
            }
    })

    const [name , setName] =useState([]);
    const [email, setEmail] = useState([]);
    const [value , setValue] =useState ([]);
    const [edit,setedit] = useState([]);
    const [id,setid] = useState([]);

    const Adddata =(event) =>
    {
        event.preventDefault();

        if(edit == false)
        {
            axios.get('https://mytravels.store/api.php', {
                params : 
                {
                    action: "create",
                    name:name,
                    email:email
                }})

                .then( (res) =>
                    {
                        alert("added");
                        getdata();
                        setName("");
                        setEmail("");
                    })

                .catch((e) =>  {console.log(e , "Gettig error");})
            
        }
        else
        {
            axios.get('https://mytravels.store/api.php', {
                params : 
                {
                    action: "update",
                    id:id,
                    name:name,
                    email:email
                }})

                .then( (res) =>
                    {
                        alert("updated");
                        getdata();
                        
                    })

            .catch((e) =>  {console.log(e , "Gettig error");})
        }
    };
        
    useEffect ( () =>
    {
        getdata();

    },[])

    const getdata =() =>
    {
        axios.get('https://mytravels.store/api.php')
        .then ( (res) =>
        {
            console.log(res.data , "Show Data");
            setValue(res.data);
        })
        .catch( (error)=>
        {
            console.log(error , " Getting Error");
        })

    };

    const deletedata = (did)  =>
        {
            axios.get('https://mytravels.store/api.php', {
                params : 
                {
                    action: "delete",
                    id:did
                }})

                .then( (res) =>
                    {
                        alert("deleted");
                        getdata();
                       
                    })

                .catch((e) =>  {console.log(e , "Gettig error");})
        };
       
    
    const updatedata = (uid)  =>
    {

        const alldata = value.find((e) => e.id == uid)

            setName(alldata.name)
            setEmail(alldata.email)
            setid(alldata.id)
            setedit(true)
                    
    };

    const logout = () => 
    {
        localStorage.removeItem('sname');
        navi('/')
    };


    return(
        <>
        <div className="container">
            <h1> Add Data </h1>
            <form onSubmit={Adddata}>
                <lable>Name : </lable>
                <input type="text" placeholder="Enter Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <br /> <br />

                <label> Email :  </label>
                <input type="text"  placeholder="Enter Email Id"
                value={ email}
                onChange={(e) => setEmail(e.target.value)} />
                <br /> <br />

                <input type="submit" />
            </form>

        </div>

        <button className="btn btn-info text-center" onClick={logout}>Logout</button>
        
        <div className="container p-3">
            <h1> Show All Users </h1>
        
        <table className="table table-bordered m-3 ">
            <tr>
                <th> Id </th>
                <th> Name </th>
                <th> Email </th>
                <th> Created </th>
                <th> Action </th>
            </tr>


        {value.map( (d,i) =>
        (
            <tr key={i}>
                <td> {d.id} </td>
                <td> {d.name} </td>
                <td> {d.email} </td>
                <td> {d.created_at} </td>
                <td><button onClick={() => updatedata(d.id)}>Edit</button> <button onClick={() => deletedata(d.id)}>Delete</button></td>
            </tr>
        )
        )
        }    

        </table>

        </div>
        
        
        </>
    )
}