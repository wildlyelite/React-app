import { useState } from "react";
import './App.css';


export default function App6(){

   const [contact,setContact] = useState({
     fName:"",
     lName:"",
     email:""


   })

   function handleChange(event){
//destructure
    const {value,name} = event.target ;

    setContact( preValue=> {
        if(name === "fName"){
            return{
                fName: value,
                lName: preValue.lName,
                email:preValue.email
            }
        }else if(name === "lName"){
            return{
                fName: preValue.fName,
                lName: value,
                email:preValue.email
            }
        }else if(name === "email"){
            return{
                fName: preValue.fName,
                lName:preValue.lName,
                email:value
            }
        }





    })


   }




    return(
        <div className="App">
        <div className="container App-header">

      <h1>Hello {contact.fName} {contact.lName}   </h1>
      <p>{contact.email}</p>

      <input type="text"  name="fName" onChange={handleChange} value={contact.fName} />
      <input type="text"  name="lName" onChange={handleChange} value={contact.lName} />
      <input type="email" name="email" onChange={handleChange} value={contact.email} />
      <button>Submit</button>


        
        </div>
        </div>
    )
}