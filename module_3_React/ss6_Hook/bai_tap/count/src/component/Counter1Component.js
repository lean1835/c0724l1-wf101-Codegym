import useIncrement from "./AddCounter";
import React from "react"
const Counter1Component = ()=>{
    const [count, increase] = useIncrement(1);
    return(
        <>
            <div>Count: {count}</div>
            <button type="button" onClick={increase}>Add 1</button>
        </>
    )
}
export default Counter1Component;