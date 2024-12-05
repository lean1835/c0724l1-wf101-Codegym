import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../service/studentService";

function DetailComponent (){
    const {id}=useParams();
    const [student,setStudent]=useState({id:" ",name:" ",phone:" ",email:" "});
    useEffect(()=>{
        setStudent(()=>({
            ...getStudentById(id)
        }))
    },[])
    return(
        <>
        <h1>Chi tiet:</h1>
        <p>Id:{student.id}</p>
        <p>Name:{student.name}</p>
        <p>Phone:{student.phone}</p>
        <p>Email:{student.email}</p>
        </>
    )
}
export default DetailComponent;