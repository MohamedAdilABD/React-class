import React, { useState } from "react";

export default function Bank()
{

    const[name,setname] = useState("Mohamed");

    const [balance,setbalance] = useState("10000");

    const [trans, settrans] = useState ([]);

    const updatebalance = (amount) =>
        {
            const newbal = balance - amount;

            setbalance(newbal);

            const newtrans = {
                Name:name,
                Wdamount : amount,
                date : new Date().toLocaleDateString(),
                bal:newbal

            }

            settrans( [...trans ,newtrans] )
        }

    return (

        <>
            <div className="container-fulid bg-primary text-center text-white p-5">

            <h1>Bank Widthdraw App</h1>

            </div>        

            <div className="container bg-light">

                <h3 className="text-end m-3">Welcome {name}</h3>

                <div className="card">
                    <h3 className="card-title p-3">Widthdraw Balance : <span className="text-secondary"> {balance} </span> </h3>
                </div>

                <div className="container">

                    <div className="row m-3 p-3">
                        
                        <div className="col-3 p-3">
                            <button className="btn btn-primary w-50" onClick={() => updatebalance (50)} >50</button>
                        </div>

                        <div className="col-3 p-3">
                            <button className="btn btn-secondary w-50" onClick={() => updatebalance (100)}>100</button>
                        </div>

                        <div className="col-3 p-3">
                            <button className="btn btn-warning w-50" onClick={() => updatebalance (200)}>200</button> 
                        </div>

                        <div className="col-3 p-3">
                           <button className="btn btn-info w-50" onClick={() => updatebalance (500)} >500</button>
                        </div>

                    </div>

                </div>

                
            </div>

            <div>
            <table className="table">
                <tr>
                    <th>S.no</th>
                    <th>Widthdraw Amount</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Balance</th>
                </tr>

                {trans.map( (data,index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.Wdamount}</td>
                        <td>{data.date}</td>
                        <td>{data.Name}</td>
                        <td>{data.bal}</td>
                    </tr>
                ))}
            </table>
            </div>

            
        </>
    )
}