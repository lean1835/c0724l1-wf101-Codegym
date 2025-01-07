import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getProductById } from "../services/ProductService";
import {useNavigate} from 'react-router-dom'

const DetailComponent= ()=>{
    const navigate = useNavigate();
    const {id}=useParams();
    const [oneProduct,setOneProduct]=  useState({id:"",title:"",price:"",description:""})
    useEffect(()=>{
        const fetchData=async ()=>{
            const tempProduct= await getProductById(id);
            setOneProduct(tempProduct);
        }
        fetchData();   
    },[])
    const handleOut=()=>{
        navigate('/list');
    }
    return(
        <>
        <div>
        <h1>Chi tiết sản phẩm:</h1>
        <h3>Tên sản phẩm: {oneProduct.title}</h3>
        <p>Mô tả: {oneProduct.description}</p>
        <p>Giá: {oneProduct.price}</p>
        </div>
        <button className="btn btn-primary" onClick={handleOut}>Hủy</button>
        </>
    );
}
export default DetailComponent;

