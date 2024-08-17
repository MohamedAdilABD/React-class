import { render } from "@testing-library/react";
import React from "react";

export default class Root extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            color:"red",
            year:"2024",
            location:["pondey","villupuram"]
        }
    }

    changecolor = ()=>
        {
            this.setState (num =>
                {
                    return{...num, color:"blue" }
                }
            )
        }
    
    changeloc = ()=>
        {
            const newlocation = [...this.state.location];
            newlocation[1] = "cuddalore";
            this.setState({location:newlocation});
        }


    render()
    {
        return(
            <>
            
            <h2>hello react class {this.state.color}</h2>
            <button onClick={this.changecolor}>change color </button>
            <h2>hello react class {this.state.location[0]}  {this.state.location[1]}</h2>
            <button onClick={this.changeloc}>change location</button>
            <h2>hello react class {this.state.location[1]}</h2>
            
            </>
        )
    }
}