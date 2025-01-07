import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../services/ProductService";
import {  toast } from 'react-toastify';
function EditComponent(){
    const {id}=useParams();
    
    const [product,setProduct]=useState(null);
    useEffect(()=>{
        const fetProduct = async () => {
        let product = await getProductById(id);
            setProduct(product);
        }
        fetProduct();
    },[])

    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        console.log(value);
        const service = {
            ...value,
        }
        await updateProduct(id,service);
        navigate('/list');
    }
    const handleOut=()=>{
        navigate('/list');
    }    
       const handleValidate = Yup.object({
           id: Yup.number().required("Vui lòng Nhập id"),
           title: Yup.string().required("Tên không được để trống"),
           price:Yup.number().required("Giá không được để trống"),
           description: Yup.string().required("Vui lòng mô tả sản phảm"),
       })
        if(product==null){
            return "";
        }
    return(
                <>
                    <div className="editProduct"> 
                    <p>Sửa sản phẩm</p><hr/>
                            <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate} >
                                <Form>
                                    <div>
                                        <label >Id:</label>
                                        <Field  type='number' name='id'/>
                                        <ErrorMessage name='id' style={{color: 'red'}} component='div'/>
                                    </div>
                                    <div>
                                        <label >Title:</label>
                                        <Field  type='text' name='title'/>
                                        <ErrorMessage name='title' style={{color: 'red'}} component='div'/>
                                    </div>
                                    <div>
                                        <label >Price:</label>
                                        <Field  type='number' name='price'/>
                                        <ErrorMessage name='price' style={{color: 'red'}} component='div'/>
                                    </div>
                                    <div>
                                        <label>Mô tả</label>
                                        <Field type='text' name='description'/>
                                        <ErrorMessage name='description' style={{color: 'red'}} component='div'/>
                                    </div>
                                    
                                    <div>
                                        <button className="btn btn-success" type={'submit'}>Sửa</button>
                                        <button className="btn btn-info" onClick={handleOut}>Trở lại</button>
                                    </div>
                                </Form>
                            </Formik>
                    </div>
                            
                
                        </>
    )
}
export default EditComponent;