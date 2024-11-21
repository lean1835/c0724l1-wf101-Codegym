/* eslint-disable react/jsx-no-undef */
import React,{useEffect,useState,useRef} from "react"
import { deleteStudentById, getAllStudent,searchByNamme } from "../service/studentService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";

const ListComponent =()=>{
    const [listStudents,setListStudent]=useState([]);
    const [isReload,setIsReload]=useState(false);
    const [isShowModal,setIsShowModal]=useState(false);
    const [nameDelete,SetNameDelete]=useState({id:"",name:"",phone:"", email:""})
    const nameRef=useRef();
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
    const handleShowModal=(student)=>{
        setIsShowModal((prevState)=>!prevState)
        SetNameDelete(()=>({
            ...student
        }))

    }
    const handleCloseModal=()=>{
        setIsShowModal((prevState)=>!prevState)
    }
    const handleSearch=()=>{
        const nameSearch=nameRef.current.value;
        let listSearch=searchByNamme(nameSearch)
        setListStudent(()=>[
            ...listSearch
        ])
    }
    return(
        <>
            <AddComponent handleReload={handleReload}/>
            <form>
                <input type="text" ref={nameRef} placeholder="Nhap thu muon tim"/>
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listStudents.map((student, i) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button onClick={()=>{
                                handleShowModal(student);
                            }} className={'btn btn-sm btn-danger'}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent handleReload={handleReload} handleCloseModal={handleCloseModal} nameDelete={nameDelete}  handleShowModal={handleShowModal} isShowModal={isShowModal}/>
        </>
    )
        
}
export default ListComponent;