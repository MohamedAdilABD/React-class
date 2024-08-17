// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Dataform()
// {
//     const [value,setvalue] = useState([]);
//     useEffect( () =>
//     {
//         getdata();
//     },[]
//     )

//     const getdata = () =>
//     {
//         axios.get( 'https://mytravels.store/api' )
//         .then( (data) => 
//         {
//             console.log(data , "show data");

//             setvalue(data.data);
//         })

//         .catch( (error) => 
//         {
//             console.log(error , "getting error")
//         })
//     }


//     return(
//         <>
//           <h1>Data Axios method </h1>

//           <div className="container p-3">
//             <h2>Show all Data</h2>

          

//           <table className="table table-bo ">

//             <tr>
//                 <th>Slno</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Created</th>
//                 <th>Action</th>    
//             </tr>  

//             {value.map( (data, index) => (
//                 <tr key={index}>
//                   <td>{data.id}</td>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                   <td>{data.created}</td>
//                   <td><button>Edit</button> <button>Delete</button></td>
//                 </tr>
//             ))}
            
//           </table>
//           </div> 
//         </>
//     )
// }

import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Dataform()
{
    const [name , setName] =useState("");
    const [email, setEmail] = useState("");

    const [value , setValue] =useState ([]);


    const handlesubmit =(event) =>
    {
        event.preventDefault();

        axios.get("https://mytravels.store/api.php" ,
        {
            params:{
                name:name,
                email:email,
                action:"create"
            }
        }
    )

        .then ( (data1) =>
            {
                alert(data1.data);
                getdata();
                setName("");
                setEmail("");
            })
            .catch( (error)=>
            {
                console.log(error , " Getting Error");
                alert("Error")
                
            })
    
    }

    const deleted = (id) =>
    {
      axios.get('https://mytravels.store/api.php',
        {
            params:{
                id:id,
                action:"delete"
            }
        }
      )
      .then ( (data1) =>
        {
            alert(data1.data);
            getdata();
            setName("");
            setEmail("");
        })
        .catch( (error)=>
        {
            console.log(error , " Getting Error");
            alert("Error")
            
        })
    }
   

    useEffect ( () =>
    {
        getdata();
    },[])


    const getdata =() =>
    {
        axios.get('https://mytravels.store/api.php')
        .then ( (data1) =>
        {
            console.log(data1.data , "Show Data");
            setValue(data1.data);
        })
        .catch( (error)=>
        {
            console.log(error , " Getting Error");
        })

    }


    return(
        <>
        <div className="container">
            <h2> Add Data </h2>
            <form onSubmit={handlesubmit}>
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
                <td> <button> Edit </button>
                <button onChange={ () => (deleted)} > Delete </button> </td>
            </tr>
        )
        )
        }    

        </table>

        </div>
        
        
        </>
    )
}