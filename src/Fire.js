import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Blog from "./Router/Blog";
import Layout from "./Router/Layout";


export default function Fire()
{
    return (
        <BrowserRouter>
        
          <Routes>
            
              <Route path="/" element={<Layout/>} >
                 <Route index element={<Home/>} />
                 <Route path="/blog" element={<Blog/>} />
                 <Route path="/contact" element={<Contact/>} />
                 <Route path="*" element={<About/>} />
                </Route>

          </Routes> 
        
        </BrowserRouter>
    )
}