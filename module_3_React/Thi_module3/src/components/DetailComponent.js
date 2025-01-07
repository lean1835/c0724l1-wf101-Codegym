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
        <div className="detailProduct">
        <p>Chi tiết sản phẩm:</p> <hr/>
        <h3>Tên sản phẩm: {oneProduct.title}</h3>
        <div>Mô tả: {oneProduct.description}</div>
        <div>Giá: {oneProduct.price}</div><button className="btn btn-secondary" onClick={handleOut}>Hủy</button>
        </div>
        
        </>
    );
}
export default DetailComponent;

