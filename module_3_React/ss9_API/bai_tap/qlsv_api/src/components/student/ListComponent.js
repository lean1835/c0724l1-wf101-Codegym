/* eslint-disable react/jsx-no-undef */
import React,{useEffect,useState,useRef} from "react"
import { deleteStudentById, getAllStudent,searchByNamme } from "../../service/studentService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import AddComponent from "./AddComponent";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import  "bootstrap/dist/js/bootstrap.min";
import { getAllClass } from "../../service/classService";

const ListComponent =(nameSearch)=>{
    //class list---------------
 const [classList,setClassList]=useState([]);
    useEffect(()=>{
                const fetchData= async()=>{
                    const listClass= await getAllClass();
                    setClassList(listClass);
                }
                fetchData();
                console.log(classList)
            },[])
    //class list-----------
    const [listStudents,setListStudent]=useState([]);
    const [isReload,setIsReload]=useState(false);
    const [nameDelete,SetNameDelete]=useState({id:"",name:"",phone:"", email:""})
    const [show, setShow] = useState(false);
    const searchRef = useRef();
    const searchClassRef=useRef();
    const handleSearch =()=>{
        let nameSearch = searchRef.current.value;
        let classSearch = searchClassRef.current.value;
        const fetchData = async ()=>{
            const searchList = await searchByNamme(nameSearch,classSearch);
            setListStudent(searchList);
        }
        fetchData();
    }
    useEffect(()=>{
        const fetchData= async()=>{
            const list= await getAllStudent();
            console.log(list)
            setListStudent(list);
        }
        fetchData();
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
        toast("xóa thành côngnpm s")
        console.log(getAllStudent());
    }
    //-------------

    return(
        <>  <input ref={searchRef} name={'searchName'} placeholder={'Enter search name'}/>
            <select ref={searchClassRef}>
                <option value={''}>---------chọn----------</option>
                        {classList.map((c,i) => (
                                <option key={i} value={c.id}>{c.name}</option>
                        ))}
            </select>   
            <button onClick={handleSearch} className={'btn btn-primary btn-sm'} type={'button'} >Search</button>
              
                
                
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>Color</th>
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
                        <td>{student.gender}</td>
                        <td>{student.class.name}</td>
                        <td>{student.color}</td>
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