import { useState } from "react"
import Child from "./Child"

function Parent({num}){

    var [color, setColor] = useState(false)

    function light(){  
            setColor(true)
    }
    function dark(){
            setColor(false)
        }
    


    return(
        <>
            <button onClick={light}>Light mode</button>
            <button onClick={dark}>Dark mode</button>
            <Child color={color}/>
        </>
    )
    }    
export default Parent