import React, { useEffect, useState } from "react";


export default function Street()
{
    const [count, setcount] = useState(0);
    const [calculation, setcalculation] = useState(0);

    useEffect( ()=>
        {
            settime()
        },[calculation]
    );

    const settime =() =>
        {
            setTimeout( ()=>
            {
                setcount((count) => count + 1)
            },1000
            )
            
        }
    return(

        <div>
            <h1>Welcome to React UseEffect {count} </h1>
            <button onClick={settime}>Tick Tick Tick</button>

            <p>
                calculation: {calculation}
            </p>
            <button onClick={()=> {setcalculation("100")}}> calculate</button>
        </div>
    )
}