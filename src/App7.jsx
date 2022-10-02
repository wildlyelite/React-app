import { useState } from "react";
import './App.css';


export default function App6() {

const [contact, setContact] = useState({
fName: "",
lName: "",
email: ""


})

function handleChange(event) {
//destructure
const { value, name } = event.target;

setContact(preValue => {
//Spread operators
return {
    ...preValue,
    [name]: value

};

});


}




return (
<div className="App">
    <div className="container App-header">

        <h1>Hello {contact.fName} {contact.lName} </h1>
        <p>{contact.email}</p>

        < input type = "text"
        placeholder = "First Name"
        name = "fName"
        onChange = {
            handleChange
        }
        value = {
            contact.fName
        }
        />
         < input type = "text"
        placeholder = "Last Name"
        name = "lName"
        onChange = {
            handleChange
        }
        value = {
            contact.lName
        }
        /> 
        <input type = "email"
        placeholder = "Email"
        name = "email"
        onChange = {
            handleChange
        }
        value = {
            contact.email
        }
        />
        <button>Submit</button>



    </div>
</div>
)
}