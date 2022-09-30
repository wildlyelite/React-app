import { useState } from "react";

import "./App.css"

export default function App4(){

    const [name,changename] = useState("");
    const [Aname,Achangename] = useState("");

    function handleChange(event){
        changename(event.target.value);
    } 
 
     function change(){
        Achangename(name);
     }
    return(
        <div className="App">
        <div className="container App-header">

            <h1>Hello {Aname}</h1>
            <input type="text" placeholder="what is youre name" onChange={handleChange} value={name} />
            <button onClick={change} > submit</button>

            </div>
            </div>


    )
}