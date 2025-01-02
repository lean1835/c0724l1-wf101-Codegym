import React, {useEffect, useRef, useState} from "react";
import { getAllService, searchByNameAndType } from "../services/FuramaService";
import {Link} from 'react-router-dom'
import { getAllType } from "../services/TypeService";

// import {deleteProductById, getAllProduct, searchProductByName} from "../services/productService";

// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import {useSelector} from "react-redux";
// import {getAllManufacture} from "../services/manufactureService";
// import PaginationComponent from "./PaginationComponent";
function ListComponent (){
    const [service,setService]=useState([]);
    const [isReload,setIsReload]=useState(false);
    const nameSearchRef=useRef();
    const typeSearchRef=useRef();
    const [typeList,setTypeList]=useState([]);
    const handleReload=()=>{
        setIsReload((prevState)=>!prevState)
    }

    useEffect( ()=>{
        const fetchData= async()=>{
            // const service= await getAllService();
            const nameSearch=nameSearchRef.current.value;
            const typeSearch=typeSearchRef.current.value;
            const service= await searchByNameAndType(nameSearch,typeSearch);
            setService(service);
        }
        const fetchTypeData=async()=>{
            const type= await getAllType();;
            setTypeList(type);
        }
        fetchTypeData();
        fetchData();
        console.log(service)
    },[isReload])
    const handleSearch=()=>{
        setIsReload((pre)=>!pre);
    }
    return(
        <>
        <div className="facilities">FACILITIES</div>
        <div className="search_form">
            <form className={'form-seacrh'}>
                    <input style={{width:'130px'}} className={''} ref={nameSearchRef} name={'nameSearch'} placeholder={'Name seach'}/>
                    <select ref={typeSearchRef} name={'typeSearch'} className={''}>
                        <option value={""}>------chon------</option>
                        {typeList.map(e=>(
                            <option value={e.id}>{e.name}</option>
                        ))}

                    </select>
                    <button onClick={handleSearch}  className={' w-25 btn btn-success btn-sm'} type={'button'} >Search</button>
                </form>
        </div>
        
        <ul>
            {service.map((e,i)=>(
                <li>
                    <div className="card vien" style={{ width: "18rem", height:"400px" }}>
                        <img className="card-img-top" style={{width:"100%", height:"40%"}} src={e.type.img} />
                        <div className="card-body">
                            <h3 className="card-title">{e.name}</h3>
                            <p className="card-text">
                                {e.cost}$/{e.rentalType}
                            </p>
                            <p className="card-text">
                                Diện tích: {e.acreage}m<sup>2</sup>
                            </p>
                            <p className="card-text">
                                Loại: {e.type.name}
                                <Link className="chuThich" to={"/list/detail/"+e.id}>
                                <i class="fa-solid fa-circle-info ">
                                    <a >Xem thêm</a>
                                </i>
                            </Link> 
                            </p>
                            
                            <a href="#" className="btn btn-info">
                            Edit
                            </a>
                            <a href="#" className="btn btn-danger delete">
                            Delete
                            </a>
                            
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        {/* <select ref={searchClassRef}>
                <option value={''}>---------chọn----------</option>
                        {classList.map((c,i) => (
                                <option key={i} value={c.id}>{c.name}</option>
                        ))}
            </select> */}
        </>
    );
}
export default ListComponent;