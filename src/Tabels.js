import React, { useState } from "react";

function Tabels () 
{
    const table = (t)=>
        {
            for (let i =1; i<=10; i++ )
                {
                    console.log('${t} x ${i} = ${i*t}');
                };
        }


    useState ( ()=>
    {
        table(2);
    }
);
    
return (
    <div>Tabels</div>
)
}

export default Tabels