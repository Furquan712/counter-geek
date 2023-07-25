import React from "react";
import { useState } from "react";

function App() {

const[count, setCount ] = useState(0);

const increament = () => {
   setCount(count+1);
}
const decrement = () => {
  if(count > 0){
    setCount(count-1);
  }
}

const reset= () => {
   setCount(0);
}
  return (
    <div className="App">
     <div>Counter app </div>
     <div>
      <button onClick={increament}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
     </div>
     <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
