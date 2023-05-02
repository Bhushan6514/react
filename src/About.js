import { useState } from "react";
function About(){

    var [count, setCount] = useState(0)

    const increment = () => {
        setCount(++count)
        console.log(count)
    }

    return(
    <>
    <button onClick={increment}>Click here</button>
    <h1>Value of count is : {count}</h1>
    </>
    );
}

export default About;