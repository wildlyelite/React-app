import { useState } from "react";

import './App.css';


export default function App5(){

const [fullName,setFullName] = useState({
    fName:"",
    lName:""
})



function HandleChange(event){
    //destructure
    const {value,name} = event.target;
    setFullName(preValue =>{
        if(name === "fName"){
            return{
                fName: value,
                lName: preValue.lName
            }
        }else if(name === "lName"){
            return{
                fName: preValue.fName,
                lName: value
            }
        }
    })
}



    return(

        <div className="App">
        <div className="container App-header">


            <h1>Hello {fullName.fName} {fullName.lName} </h1>
            <input name="fName" type="text" placeholder="First Name" onChange={HandleChange} value={fullName.fName}/>
            <input name="lName" type="text" placeholder="Last Name"  onChange={HandleChange} value={fullName.lName}/>
            <button>Submit</button>


            </div>
            </div>

    )

};