import { Component } from "react";
import React from "react";

export default class Food extends Component
{
    render()
    {
        return(
            <>
            <h1>this is react child {this.props.data} {this.props.data1.name}</h1>
            </>
        )
    }
}