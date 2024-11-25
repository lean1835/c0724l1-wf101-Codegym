
import {React,useState} from "react"
function count1(addAmount){
  const [count, setCount] = useState(0);
  function increase(addAmount){
    setCount(addAmount);
  }
}
function App() {

  return (
    <div>Count: </div>
  );
}

export default App;
