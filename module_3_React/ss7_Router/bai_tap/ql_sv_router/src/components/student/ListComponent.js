/* eslint-disable react/jsx-no-undef */
import React,{useEffect,useState,useRef} from "react"
import { deleteStudentById, getAllStudent,searchByNamme } from "../../service/studentService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import AddComponent from "./AddComponent";

import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ListComponent =(nameSearch)=>{
    const [listStudents,setListStudent]=useState([]);
    const [isReload,setIsReload]=useState(false);
    const [nameDelete,SetNameDelete]=useState({id:"",name:"",phone:"", email:""})
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setListStudent((pre)=>(
            [
                ...getAllStudent()
            ]
            
        ))
    },[isReload])

    const handleReload=()=>{
        setIsReload((prevState)=>!prevState)
    }

    const handleShow=(student)=>{
        setShow((prevState)=>!prevState)
        SetNameDelete(()=>({
            ...student
        }))

    }
    const handleClose=()=>{
        setShow((prevState)=>!prevState)
    }
    //--------------
    const handleDelete=()=>{
        
        deleteStudentById(nameDelete.id);
        handleClose();
        handleReload();
        console.log(getAllStudent());
    }
    //-------------

    return(
        <>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                {listStudents.map((student, i) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button className={'btn btn-sm btn-danger'} onClick={()=>{
                                handleShow(student);
                            }}>
                                Delete
                            </button>
                        </td>
                        <td>
                        <Link className="btn btn-success" to={'/list/detail/'+student.id}>Detail</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa {nameDelete.name}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
        
}
export default ListComponent;