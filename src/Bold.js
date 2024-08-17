import {React,useState} from "react";



export default function Bold()
{
    const[data, setdata]=useState( {
        brand:"Ford",
        modal:"Mustang",
        year:"1964",
        color:"Yellow"
    });

    const changedata = () => 
        {

            setdata( previousdata =>
                {
                    return { ...previousdata, color:"blue", year:"2024"}
                }
            )
        }
    

    const [lan, setlan] = useState ( 
        ["Tamil","English","French","Arabic"]);

    const changelan = () =>
        {
            setlan( oldlan =>
                {
                    return { ...oldlan, [0]:["German"], [1]:["Spanish"] }
                }
            )
        }
    return(
        <>
        <h1>use state {data.brand} {data.modal} {data.year} {data.color} </h1>

        <h1>Show array value {lan[0]} {lan[1]}</h1>
        <button onClick={changelan}>Change lan</button>
        <button onClick={changedata}>change object data</button>      
        </>
    )
}
