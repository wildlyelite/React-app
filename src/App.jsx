import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [count,setCount] = useState(0);





function add(){
  setCount(count + 1);

}

function sub(){
setCount(count - 1);
}

  return (
    <div className="App">
   <div className="container App-header">
    <h1>{count}</h1>
    <div>
    <button  onClick={add}>+</button>
    <button  onClick={sub}>-</button>
    </div>
    
   </div>
    </div>
  );
}

export default App;
