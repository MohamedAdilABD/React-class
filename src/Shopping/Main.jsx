import React, { useEffect, useState } from "react";

import Shop from "./Shop";
//import Cart from "./Cart";
import Local from "./Local";

export default function Main()
{
    const [productinfo, setproductinfo] = useState([]);
    const [error, seterror] = useState("");
    const [cart, setcart] = useState("");

    useEffect( ()=> {
        
        const cval = localStorage.getItem("cart")
        setcart(cval);

        if(cval == 0)
        {
            setcart("")
        }
    },[cart])
    

    const addproduct = (id,name,price,image,quantity,totalprice) =>
    {
        const exist = productinfo.find( (item) => item.id == id );

        if(!exist)
        {
            setproductinfo([...productinfo, {id,name,price,image,quantity,totalprice}])
            localStorage.setItem("product", JSON.stringify([...productinfo, {id,name,price,image,quantity}]))
            localStorage.setItem("cart", productinfo.length + parseInt(1) );
            setcart(localStorage.getItem("cart"))

        }
        else
        {
            seterror("Alredy product added")
        }   
    };
    
    const productdelete = (rdata) =>
    {
        setproductinfo(rdata)
        localStorage.setItem("product", JSON.stringify(rdata));
        localStorage.setItem("cart", parseInt(productinfo.length) - parseInt(1))
        setcart(localStorage.getItem("cart"))
    };

    const productupdate = (udata) =>
    {
        setproductinfo(udata)
        localStorage.setItem("product", JSON.stringify(udata));
        localStorage.setItem("cart", parseInt(JSON.stringify(productinfo.length)) - parseInt(1))
    };

    

    return(
        <>
        <div className="container-fluid text-center bg-light p-4">

            <div className="row">
                <div className="col-8">
                    <h1>Sample Shopping Cart</h1>
                    <p>{error}</p>
                </div>

                <div className="col-4">
                    <img src={require('./Img/cartimg.png')} width="50px" height="50px" /> {cart}
                </div>

            </div>

        </div>

        <div className="container text-center mt-3">

            <div className="row">

                <div className="col-4 card" style={{textAlign:"center", height:"300px", width:"350px"}}>
                    <Shop id={"1"} name={"Apple"} price={"100"} image={require('./Img/apple.jpg')} addtocard={addproduct} quantity="1" />
                </div>

                <div className="col-4 card" style={{textAlign:"center", height:"300px", width:"350px"}}>
                    <Shop id={"2"} name={"Grape"} price={"200"} image={require('./Img/graps.png')} addtocard={addproduct} quantity="1" />
                </div>

                <div className="col-4 card" style={{textAlign:"center", height:"300px", width:"350px"}}>
                    <Shop id={"3"} name={"Orange"} price={"300"} image={require('./Img/orange.jpg')} addtocard={addproduct} quantity="1" />
                </div>

            </div>

        </div>

        {/* <Cart sendcart={productinfo} removedata={productdelete} /> */}
 
        <Local sendcart={productinfo} removedata={productdelete} update={productupdate} />

        </>

    )
}