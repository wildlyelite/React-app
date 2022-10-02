import { useState } from "react";
import App10Item from "./App10Item";
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

 function delet(id){
    Achangelist(prevItem =>{
        return prevItem.filter((item,index)=>{return index !== id})
       

    }
    )

 }

    return(

        <section>
            <div className="center">
                <div className="input">
                <input type="text" id="list" onChange={change} value={List}/>
                <button onClick={add}>Add</button>
                </div>

                <ul>
                  {Alist.map((item,index )=>
                    <App10Item text={item} onCheck={delet} key={index} id={index}/>

                  )}
                    
                </ul>

            </div>
        </section>
    )


}