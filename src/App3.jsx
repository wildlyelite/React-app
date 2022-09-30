import {useState} from 'react'
// app css is been already applied 



export default function App3(){

 const [headingText,changeText] = useState("Hello");

 const [color,changeColor] = useState("white");

function handleClick(){
  changeText("submited");
};

function Color(){
    changeColor("grey");
}


return(
    <div className="App">
    <div className="container App-header">

    <h1>{headingText}</h1>
    <input type="text" placeholder="What's youre name?"  required/>
    <button onClick={handleClick} onMouseOver={Color} style={{backgroundColor:{color}}}> Submit</button>

        
    </div>
    </div>
)
};



