import useIncrement from "./AddCounter";
import React from "react"
const Counter2Component = ()=>{
    const [count, increase] = useIncrement(2);
    return(
        <>
            <div>Count: {count}</div>
            <button type="button" onClick={increase}>Add 2</button>
        </>
    )
}
export default Counter2Component;