import { render } from "@testing-library/react";
import React from "react";

export default class Example extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            favcolor : "blue"
        }
            
        
    }

    componentDidMount()
    {
        setTimeout(
            () => 
                {
                    this.setState({favcolor:"red"})
                },3000

        )
    }

    componentDidUpdate()
    {
        setTimeout(
            () => 
                {
                    this.setState({favcolor:"yellow"})
                },3000

        )
    }

    render()
    {
        return(
            <>
                <h1>Hello react class {this.state.favcolor}</h1>
            </>
        )
    }
 
    
 
}



