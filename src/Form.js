import { useState } from "react";

function Form(){

    var [name, setName] = useState("")
    var [email, setEmail] = useState("")
    var [arr, setArr] = useState([])
    var [count, setCount] = useState(0)

    const handleInput = (e) =>{
        setName(e.target.value.name="Bhushan")
        setEmail(e.target.value.email)

        console.log(e.target.value.name)
        setCount(++count)
        setArr([...arr, count])

    }
    return(
        <>
            <input onChange={handleInput} placeholder="Enter Name" />
            <input onChange={handleInput} placeholder="Enter email" />
            
            <button onClick={handleInput}>Click</button>
            {
            arr.map(
                (el,i) => (<h1 style={{color:el%2==0?"blue":"red"}}>{el}  {el%2==0?"Even":"Odd"}</h1>)
             )
            }

           
        </>
    )

  
}
export default Form;