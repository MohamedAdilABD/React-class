import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout()
{

    return(
        <>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          
          <Outlet />
        </>
    )
}