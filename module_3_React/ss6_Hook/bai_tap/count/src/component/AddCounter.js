import React,{useState} from "react"
const useIncrement=(addAmount)=>{
    const [count, setCount] = useState(0);
    const increase=()=>(
        setCount(prev=>{
             return prev+addAmount;
        })
    )
    return [count,increase];
}
export default useIncrement;


