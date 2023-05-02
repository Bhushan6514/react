import { useState } from "react";

function Project(){

    var [out, setOut] = useState("")

    const handleInput = (e) =>{
        setOut(e.target.value)
        console.log(e)
    }
    return(
        <>
            <input onChange={handleInput} placeholder="Enter Any thing" />
            <h2 style={{color:{out}}}>{out}</h2>
        </>
    )

  
}
export default Project;