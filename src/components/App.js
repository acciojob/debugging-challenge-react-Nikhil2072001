import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)
    function handleChange(){
      setCount(count + 1) ;
    }
    function givealert(){
      alert("cant edit it")
    }
  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={() => givealert}>{count}</h1>
      <button className='increment-button' onClick={() => handleChange}>Increment</button>
    </div>
  )
}


export default App;