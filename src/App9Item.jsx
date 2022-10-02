import React, { useState } from 'react'

export default function App9Item(props) {


    const [Change,setChange] = useState(false)
   

    
function change(){
    setChange(preValue => {
        return !preValue; 
    });
}


  return (
    <div onClick={change} >
         <li style={{textDecoration: Change ? 'line-through' : 'none' ,cursor:'pointer'}}  >   
       {props.text}
    </li>
    </div>
   
  )
}
