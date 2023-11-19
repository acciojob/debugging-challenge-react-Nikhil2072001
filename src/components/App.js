import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)
    function handleChange(){
      setCount(count + 1) ;
    }
  return (
    <div class="ball">
      <h1 class="count" ondoubleclick={() => { alert("cant edit it") }}>{count}</h1>
      <button class='increment-button' onclick={() => handleChange}>Increment</button>
    </div>
  )
}


export default App;