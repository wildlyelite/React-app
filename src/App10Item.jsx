import React from 'react'

export default function App10Item(props) {


  return (
    <div onClick={()=>{
      props.onCheck(props.id)
    }} >
         <li >   
       {props.text}
    </li>
    </div>
   
  )
}
