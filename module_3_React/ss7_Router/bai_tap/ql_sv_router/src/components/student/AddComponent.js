import React,{useEffect,useRef,useState} from "react"
import { addNewStudent } from "../../service/studentService";
import {useNavigate} from "react-router-dom";
function AddComponent({handleReload}){
    const idRef=useRef();
    const nameRef=useRef();
    const phoneRef=useRef();
    const emailRef=useRef();
    const navigate=useNavigate();
    const handleSave=(student)=>{
        
        console.log("hiiii");
        addNewStudent({
            id: idRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value
        })
        alert("Thêm thành công");
        // handleReload();
        navigate('/list');
    }
    return (
        <>
            <h2>Add Students</h2>
            <form>
                ID:
                <input name={'id'} ref={idRef}/>
                Name:
                <input name={'name'} ref={nameRef}/>
                Phone:
                <input name={'phone'} ref={phoneRef}/>
                Email:
                <input name={'email'} ref={emailRef}/>
                <button onClick={handleSave} type="button">Save</button>
            </form>
        </>

    );
}
export default AddComponent;