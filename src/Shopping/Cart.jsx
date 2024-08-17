import React, { useEffect, useState } from "react";

export default function Cart(props)
{
    const [data,setdata] = useState([]);

    useEffect( ()=> {
        if(props.sendcart)
        {
            setdata(props.sendcart)
        }
    },[props.sendcart])

    const rem = (id) =>
    {
        const ritem = data.filter( (item) => item.id !== id)
        setdata(ritem)
        props.removedata(ritem)

    };


    return(
        
        <div>
            <div className="container-fluid  bg-light mt-2 table table-bordered boder-dark table-hover">            
            <tabel>
                <tr>
                    <th>slno</th>
                    <th>product image</th>
                    <th>product name</th>
                    <th>product price</th>
                    <th>action</th>
                </tr>
                {data.map( (data,index) => (
                   <tr>
                    <td>{index +1}</td>
                    <td><img src={data.image} width="50px" height="50px"/></td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td><img onClick={ () => rem(data.id) } src={require('./Img/remove.png')} width={30} height={30} /></td>
                   </tr>
                ))}
            </tabel>
            </div>
        </div>
        
    )
}

