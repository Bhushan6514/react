import { useState } from "react";
function ArmStrong(){

    var [out, setOut] = useState(0)
    var [len, setLength] = useState(0)
    var [str, setStr] = useState(0)

    const isArmstrong = (e) =>{
        setOut(e.target.value)
        setLength(out.length)

        for (let i = 1; i <=len; i++) {
            setStr(str + Math.pow(out[i], len))
        }
    }
   
    return(
        <>
        <input onChange={isArmstrong} placeholder="Enter Any thing" />
           <h2>{str===out?"is ArmStrong":"Not Armstrong"}</h2>
        </>
    ) 
}
export default ArmStrong;