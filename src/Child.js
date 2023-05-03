import { useState } from 'react'
import Parent from './Parent'
function Child({color}){

    return(
        <>
           <div style={{width:'100%', height:'1000px', backgroundColor : color==true?  "lightgray" : 'black'}}></div>
        </>
    )
};
export default Child