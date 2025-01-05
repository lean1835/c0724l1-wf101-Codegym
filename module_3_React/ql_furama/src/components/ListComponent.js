import React, {useEffect, useRef, useState} from "react";
import { deleteServiceById, getAllService, searchByNameAndType } from "../services/FuramaService";
import {Link} from 'react-router-dom'
import { getAllType } from "../services/TypeService";
import Form from 'react-bootstrap/Form';
// import {deleteProductById, getAllProduct, searchProductByName} from "../services/productService";
import { ToastContainer, toast } from 'react-toastify';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import {useSelector} from "react-redux";
// import {getAllManufacture} from "../services/manufactureService";
// import PaginationComponent from "./PaginationComponent";
function ListComponent (){
    const [service,setService]=useState([]);
    const [isReload,setIsReload]=useState(false);
    const nameSearchRef=useRef();
    const typeSearchRef=useRef();
    const [typeList,setTypeList]=useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

    const handleDelete=(e)=>{
        console.log("-----------")
        deleteServiceById(e.id);
        setIsReload((prevState)=>!prevState);
        setShow(false);
        toast.success("xóa thành công");
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
        
        <ul  style={{textAlign:'center' }}>
            {service.map((e,i)=>(
                <li>
                    <div className="card vien" style={{ width: "20rem", height:"400px"}}>
                        <img className="card-img-top" style={{width:"100%", height:"40%"}} src={e.img} />
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
                            
                            <Link className="btn btn-warning" to={"/list/edit/"+e.id}>
                                Edit
                            </Link>
                            <button className="btn btn-danger delete" onClick={handleShow}>
                                    Delete
                            </button>
                            
                            <Modal show={show} onHide={handleClose} animation={true}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal delete</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn có muốn xóa {e.name}</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Hủy
                                </Button>
                                
                                <Button variant="danger" onClick={()=>{
                                    handleDelete(e);
                                }}>
                                    Đồng ý
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </>
    );
}
export default ListComponent;