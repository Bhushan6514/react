import { useState } from "react";
function ArmStrong(){

    var [out, setOut] = useState("")
    var [len, setLength] = useState(0)
    var [str, setStr] = useState(0)

    const isArmstrong = (e) =>{
        
        for (let i = 1; i <=len; i++) {
            setOut(e.target.value)
            setLength(out.length)
            setStr(str + (Math.pow(parseInt(out[i]), len)))
        }
    }
   
    return(
        <>
        <input onChange={isArmstrong} placeholder="Enter Any thing" />
           <h2>{str==out?"is ArmStrong":"Not Armstrong"}</h2>
        </>
    ) 
}
export default ArmStrong;