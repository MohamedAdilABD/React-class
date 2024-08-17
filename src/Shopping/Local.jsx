import React, { useEffect, useState } from "react";

export default function Local(props) 
{
    const [data, setdatas] = useState([]);
    const [newqty, setnewqty] = useState("1");

    useEffect(() => 
    {
        const localdata = localStorage.getItem("product");

        if (localdata) {
            const abc = JSON.parse(localdata);
            setdatas(abc);
        }

    }, [props]);

    const rem = (id) => 
    {
        const ritem = data.filter((item) => item.id !== id);
        setdatas(ritem);
        props.removedata(ritem);
        
    };

    const updateqty = (e, id, price) => 
    {
        
        setnewqty(e.target.value);

        const checkqty = e.target.value;

        if(checkqty !="0")
        {
            const newdata = data.map((item) => item.id == id ? {...item, quantity : parseInt(e.target.value)} : item);
            props.update(newdata);
        }
        else
        {
            alert("Qunatity unable to 0")
        }
        
    };

    const Totalamount = () => {
        return data.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div>
            <div className="container-fluid bg-light mt-2 table table-bordered border-dark table-hover">
                <table>
                    <thead>
                        <tr>
                            <th>Slno</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Product Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td><img src={data.image} width="50px" height="50px" alt={data.name} /></td>
                                <td>{data.name}</td>
                                <td>${data.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={data.quantity}
                                        onChange={(e) => updateqty(e, data.id, data.price)}
                                    />
                                </td>
                                <td>${data.price * data.quantity}</td>
                                <td>
                                    <img
                                        onClick={() => rem(data.id)}
                                        src={require('./Img/remove.png')}
                                        width={30}
                                        height={30}
                                        alt="Remove"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="container text-center bg-light mt-4 p-3">
                <h3>Overall Total: ${Totalamount()}</h3>
            </div>
        </div>
    );
}


