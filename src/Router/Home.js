import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navi = useNavigate();

    const blogpage = () =>
        {
            navi('/blog',
                {
                    state: {passdata:"Welcome back Mohamed Adil"}
                }
            )
        }

    const gotoBlogs = () => {
        navi("/blog", { state: { passdata: "Mr Madhan Kumar" } });
    }

    return (
        <>
            <h1>Welcome to Home page</h1>

            <Link to="/blog">Go to Blog</Link>
            <br />
            <br />
            <br />

            <button onClick={blogpage}>click to go</button>

            <button onClick={gotoBlogs}>Go to Blogs btn</button>

            <Link to="/blog" state={{ passdata: "fita Academy" }}>Go to Blog</Link>
        </>
    );
}