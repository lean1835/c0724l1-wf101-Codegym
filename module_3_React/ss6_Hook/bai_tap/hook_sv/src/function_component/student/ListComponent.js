/* eslint-disable react/jsx-no-undef */
import React,{useEffect,useState} from "react"
import { getAllStudent } from "../service/studentService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
const ListComponent =()=>{
    const [listStudents,setListStudent]=useState([]);
    const [isReload,setIsReload]=useState(false);
    const [isShowModal,setIsShowModal]=useState(false);
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
    const handleShowModal=()=>{
        setIsShowModal((prevState)=>!prevState)
    }
    return(
        <>
            <AddComponent handleReload={handleReload}/>
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
            <DeleteComponent  handleShowModal={handleShowModal} isShowModal={isShowModal}/>
        </>
    )
        
}
export default ListComponent;