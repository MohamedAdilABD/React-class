import React from 'react';
import Food from './Food';


export default class Demo extends React.Component
{
  render()
  {
    let a ="this is variable";

    let obj=
    {
        name:"adil",
        age : "21",
        location:"cud"
    }

    let arr = ["apple","banana","cake"];

    function abc()
    {
        console.log("Button Clicked");
        alert("Button Clicked");
    }

    let clickbtn = ()=>
        {
            alert("click arrow")
        }

    return(
        <div>

            <ul>
                {arr.map((data,index) =>
                (
                    <li>{ index + data}</li>

                ))}
            </ul>


            <h1>Hello react class {a} {obj.age} {arr[1]}</h1>

            <Food data={a}  data1 ={obj} />

            <button onClick={abc}>  click me</button>
            <button onClick={()=> {alert("test")}}>click</button>
            <button onClick={clickbtn}>check</button>
        </div>
    )
  }
}
