import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../service/studentService";

function DetailComponent (){
    const {id}=useParams();
    const [student,setStudent]=useState({id:'',name:'',gender:'',class:{},color:[],phone:'',email:''});
    useEffect(()=>{
        const fetchData= async()=>{
                    const list= await getStudentById(id);
                    setStudent(list);
                }
                fetchData();
    },[])
    return(
        <>
        <h1>Chi tiet:</h1>
        <p>Id:{student.id}</p>
        <p>Name:{student.name}</p>
        <p>Gender:{student.gender}</p>
        <p>Class:{student.class.name}</p>
        <p>Color:{student.color}</p>
        <p>Phone:{student.phone}</p>
        <p>Email:{student.email}</p>
        </>
    )
}
export default DetailComponent;