import { useState } from "react";

function EvenOdd(){

    var [out, setOut] = useState("")

    const handleInput = (e) =>{
        setOut(e.target.value)
        console.log(e)
    }

    return(
        <>
        <input onChange={handleInput} placeholder="Enter Any thing" />
            <h2 style={{color:out%2==0?"blue":"red"}}>{out%2==0?"Even":"Odd"}</h2>
        </>
    )
}
export default EvenOdd;