import React from "react";
import { useLocation } from "react-router-dom";

export default function Blog() {
    const location = useLocation();

    const passdata = location.state?.passdata;
 
    return (
        <>
            <h1>  {passdata}</h1>
        </>
    );
}