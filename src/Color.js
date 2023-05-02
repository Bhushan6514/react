import { useState } from "react";
function Color(){

    var [out, setOut] = useState("")

    const handleInput = (e) =>{
        setOut(e.target.value)
    }


    return(
        <>
        <input onChange={handleInput} placeholder="Enter color"/>
        <h1 style= {{color:out}}>{out}</h1>
        </>
    )
}
export default Color;