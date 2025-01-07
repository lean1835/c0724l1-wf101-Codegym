import React, {useEffect, useRef, useState} from "react";
import { addNewProduct } from "../services/ProductService";
import {useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {  toast } from 'react-toastify';



function AddComponent() {

    const [productAdd,setProductAdd]= useState({id:"",title:"",price:"",description:""})

    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        console.log(value);
        const service = {
            ...value
        }
        await addNewProduct(service);
        toast.success("Thêm mới thành công");
        navigate('/list');
    }
    const handleValidate = Yup.object({
        title: Yup.string().required("Tên không được để trống"),
        price:Yup.number().required("Giá không được để trống"),
        description: Yup.string().required("Vui lòng mô tả sản phảm"),
    })
    const handleOut=()=>{
        navigate('/list');
    }

    return (
        <>
            <div className="addProduct">
            <p>Thêm sản phẩm</p><hr/>
            <Formik initialValues={productAdd} onSubmit={handleSubmit} validationSchema={handleValidate} >
                <Form>
                    <div>
                        <label >Title:</label>
                        <Field  type='text' name='title'/>
                        <ErrorMessage name='title' style={{color: 'red'}} component='div'/>
                    </div>
                    <br/>
                    <div>
                        <label >Price:</label>
                        <Field  type='number' name='price'/>
                        <ErrorMessage name='price' style={{color: 'red'}} component='div'/>
                    </div><br/>
                    <div>
                        <label>Mô tả</label>
                        <Field type='text' name='description'/>
                        <ErrorMessage name='description' style={{color: 'red'}} component='div'/>
                    </div>
                    <br/>
                    <div >
                        <button className="btn btn-primary nut" type={'submit'}>Thêm</button>

                        <button className="btn btn-secondary nut" onClick={handleOut}>Hủy</button>
                    </div>
                </Form>
            </Formik>
            </div>
           

        </>
    )
}

export default AddComponent;
