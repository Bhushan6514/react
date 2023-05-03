import { useState } from "react";
import './Home.css'
function Home(){

    const [arr, setArr] = useState([])
    const [formValues, setFormValues] = useState({
        name :"",
        email:"",
        mobile:""
    })

    function handleInput(e){
        console.log(e.target.name,e.target.value)
        setFormValues({...formValues, [e.target.name]:e.target.value})
        // if(e.target.name=='name'){
        //     setFormValues({...formValues, ['name']:e.target.name})
        // }
        // else if(e.target.value=='email'){
        //     setFormValues({...formValues, ['email']:e.target.email})
        // }
        // else if(e.target.value=='phone'){
        //     setFormValues({...formValues, ['phone']:e.target.phone})
        // }
    }
    function onAdd(){
        setArr([...arr, formValues])
        console.log(arr)
    }


    return(
        <>
        <input onChange={handleInput} name='name' placeholder="Enter Your Name"/>
        <input onChange={handleInput} name='email' placeholder="Enter Your email"/>
        <input onChange={handleInput} name='mobile' placeholder="Enter Your phone no."/>
        <button onClick={onAdd}>Add</button>
        
        {/* {
        arr.map(
                (el,i) => (<h1 style={{color:(i+1)%2==0?"blue":"red"}}>{i+1} {el.name}, {el.email}, {el.mobile}</h1>)
             )
            } */}

        {

            <table >
                    <tr>
                        <th>Sr. no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
             {      
            arr.map(
                (element, j) => (
                  
                    <tr>
                        <td>{j+1}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.mobile}</td>
                    </tr>
                 
                )
            )
             }
            </table>
        }
        </>
    )

};
export default Home;