import {useState} from 'react'
import './App.css';


function App2() {


setInterval(() => {

  setTime(new Date().toLocaleTimeString());
  
}, 1000);
let [time,setTime] = useState( new Date().toLocaleTimeString());

function load(){

  setTime(new Date().toLocaleTimeString());
}






return(
<div className="App">
  <div className="container App-header">
  <h1>{time}</h1>
  <button onClick={load}   style={{backgroundColor:"lightgreen",fontSize:"1rem",width:"auto"}} ><h1>Get Time</h1></button>

  </div>
</div>
)
}

export default App2;
