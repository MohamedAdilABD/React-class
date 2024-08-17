import React from "react";

export default function Shop(props)
{
    const addprod = (e) =>
    {
        props.addtocard(props.id, props.name, props.price, props.image, props.quantity, props.totalprice)
    };

    return(

        <div>
            
            <div className="card-body">

            <img src={props.image}  width={50} height={50}/>
            <h1>{props.name}</h1>
            <h3>${props.price}</h3>
            <button className="btn btn-sucess" onClick={ (e) => addprod()}>Add to Cart</button>
            </div>
            
        </div>
    )
}