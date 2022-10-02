import { useState } from "react";
import App9Item from "./App9Item";
import './App.css';


export default  function App9(){

    const [List, setList] = useState("");
    const [Alist,Achangelist] = useState([]);
    

function change(event){
    setList(event.target.value);
    
}
 function add(){

    Achangelist(prevItem =>{
        return[ ...prevItem , List];
    });
    setList("")

 };

    return(

        <section>
            <div className="center">
                <div className="input">
                <input type="text" id="list" onChange={change} value={List}/>
                <button onClick={add}>Add</button>
                </div>

                <ul>
                  {Alist.map((item)=>
                    <App9Item text={item}/>

                  )}
                    
                </ul>

            </div>
        </section>
    )


}