import React,{useEffect,useState,useRef} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { deleteStudentById, getAllStudent,searchByNamme } from "../../service/studentService";
import ListSearchComponent from "./ListSearchComponent"
function SearchComponent(){
//     const nameSearch=nameRef.current.value;
const isCheck=false;
const handleSearch=()=>{
    const nameSearch=nameRef.current.value;
    let listSearch=searchByNamme(nameSearch)
    setListStudent(()=>[
        ...listSearch
    ])
    // SetIsCheck(()=>isCheck=true);

}
    // const [isCheck,SetIsCheck]=useState(false);
    const nameRef=useRef();
    const [listStudents,setListStudent]=useState([]);



    return(
        <><form>
                <input type="text" ref={nameRef} placeholder="Nhap thu muon tim"/>
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
{/* 
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
                                // handleShowModal(student);
                            }} className={'btn btn-sm btn-danger'}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table> */}
            <ListSearchComponent  listStudents={listStudents} />
        </>
        
            
    )
}
export default SearchComponent;