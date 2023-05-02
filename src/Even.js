import { useState } from "react";

function Even(){

    var arr = [11, 4, 6, 4, 63,2,87,43,12]
    return(
        <>
        {
            arr.map(
                (el,i) => (<h1 style={{color:el%2==0?"blue":"red"}}>{el}  {el%2==0?"Even":"Odd"}</h1>)
             )
            }
        </>
    )
}
export default Even;