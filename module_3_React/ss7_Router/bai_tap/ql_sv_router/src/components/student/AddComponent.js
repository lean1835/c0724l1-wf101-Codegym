import React,{useEffect,useRef,useState} from "react"
import { addNewStudent } from "../../service/studentService";
import {useNavigate} from "react-router-dom";
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
function AddComponent(){
    const navigate=useNavigate();
    const handleSubmit=(value)=>{
        console.log("hiiii");
        addNewStudent(value);
        alert("Thêm thành côngn")
        navigate('/list');
    }
    //check dinh dang
    const handleValidate=Yup.object({
        id:Yup.number().required("loi  ne").min(1,"Id phải là số nguyên dương"),
        name:Yup.string().required("Loi chua nhap"),
        phone:Yup.number().required("Loi chua nhap"),
        email:Yup.string().required("Loi chua nhap").matches(/[A-Z][a-z]/,"hehe")
    })
    const [student,setStudent]=useState({id:'',name:'',phone:'',email:''});
    return (
        <>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate} >
                <Form>
                    <div>
                        <label>Nhập id:</label>
                        <Field type="number" name='id'/>
                        <ErrorMessage name="id" component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Nhập name:</label>
                        <Field type="text" name='name'/>
                        <ErrorMessage name="name" component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Nhập phone:</label>
                        <Field type="number" name='phone'/>
                        <ErrorMessage name="phone" component='div' style={{color: 'red'}}/>
                    </div>
                    
                    <div>
                        <label>Nhập email:</label>
                        <Field type="text" name='email'/>
                        <ErrorMessage name="email" component='div' style={{color: 'red'}}/>
                    </div>
                    
                    <div>
                        <button type={'submit'}>Save</button>
                    </div>
                    
                </Form>
            </Formik>
        </>

    );
}
export default AddComponent;