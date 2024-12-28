import React,{useEffect,useRef,useState} from "react"
import { addNewStudent } from "../../service/studentService";
import {useNavigate} from "react-router-dom";
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { getAllClass } from "../../service/classService";
import { toast } from "react-toastify";
import  "bootstrap/dist/js/bootstrap.min";
function AddComponent(){
    // const idRef=useRef();
    // const nameRef=useRef();
    // const phoneRef=useRef();
    // const emailRef=useRef();
    const [classList,setClassList]=useState([]);
    useEffect(()=>{
            const fetchData= async()=>{
                const list= await getAllClass();
                setClassList(list);
            }
            
            fetchData();
            console.log(classList)
        },[])
    const navigate=useNavigate();
    const handleSubmit=(value)=>{

        
            const student={
                ...value,
                class:JSON.parse(value.class)
            }
            addNewStudent(student);
        
       
        toast("them thanh cong")
        navigate('/list');
    }
    //check dinh dang
    const handleValidate=Yup.object({
        id:Yup.number().required("loi  ne").min(1,"Id phải là số nguyên dương"),
        name:Yup.string().required("Loi chua nhap"),
        phone:Yup.number().required("Loi chua nhap"),
        email:Yup.string().required("Loi chua nhap").matches(/[A-Z][a-z]/,"hehe"),
        gender:Yup.string().required("vui lòng nhập giới tính"),
        color:Yup.array().required("chọn màu sắc đii"),
        class:Yup.string().required("chon lop ne")
    })
    const [student,setStudent]=useState({id:'',name:'',gender:'',class:{},color:[],phone:'',email:''});
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
                        <label>gioi tinh     : </label>
                        <Field type="radio" value={'man'} name='gender'/>Nam
                        <Field type="radio" value={'woman'} name='gender'/>Nữ
                        <ErrorMessage name="gender" component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Màu sắc         :   </label>
                        <Field type="checkbox" value={'xanh'} name='color'/>xanh
                        <Field type="checkbox" value={'đỏ'} name='color'/>đỏ
                        <Field type="checkbox" value={'tím'} name='color'/>tím
                        <Field type="checkbox" value={'vàng'} name='color'/>vàng
                        <ErrorMessage name="color" component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Chọn lớp: </label>
                        <Field as='select' name='class'>
                            <option value={''}>---------chọn----------</option>
                            {classList.map((c) => (
                                <option value={JSON.stringify(c)}>{c.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="class" component='div' style={{color: 'red'}}/>
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