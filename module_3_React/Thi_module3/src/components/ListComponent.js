import React, {useEffect, useRef, useState} from "react";
import { deleteProductById, getAllProduct} from "../services/ProductService";
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function ListComponent (){
    const [isReload,setIsReload]=useState(false);
    const [listProduct,setListProduct]= useState([]);
    const handleDelete=(p)=>{
        console.log("-----------")
        deleteProductById(p.id);
        setIsReload((prevState)=>!prevState);
        setShow(false);
        toast.success("xóa thành công");
    }
    useEffect(()=>{
        const fetchData= async()=>{
            const list= await getAllProduct();
            setListProduct(list);
        }
        fetchData();
    },[isReload])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

        
    return(
        <>
        <h3>Danh sách sản phẩm</h3>
        <Link className={'btn btn-sm btn-success'} to={'/list/add'}>Thêm sản phẩm</Link>
        <table className={'table table-light'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả </th>
                    <th>Giá</th>
                    <th colSpan="2">  </th>
                </tr>
                </thead>
                <tbody>
                            
                {listProduct.map((p, i) => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td><Link className="nameProduct" to={"/list/detail/"+p.id}>
                                                {p.title}       
                            </Link> </td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>

                        <td colSpan="2">
                            <button className={'btn btn-md btn-danger'} onClick={handleShow} >
                                Xóa
                            </button>
                            <Modal show={show} onHide={handleClose} animation={true}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal delete</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn có muốn xóa: {p.title}</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Hủy
                                </Button>
                                
                                <Button variant="danger" onClick={()=>{
                                    handleDelete(p);
                                }}>
                                    Đồng ý
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Link className="btn btn-primary" to={"/list/edit/"+p.id}>
                                 Edit
                            </Link>
                        </td>
                        <td>                         
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
export default ListComponent;