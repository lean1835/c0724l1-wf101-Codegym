import React,{useEffect,useState,useRef} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { deleteStudentById, getAllStudent,searchByNamme } from "../../service/studentService";
function ListSearchComponent({listStudents}){
//     const nameSearch=nameRef.current.value;
// const checkP=()=>{
//     if(listStudents.length===0)
//         return false;
//     else return true;
// }

    return(
        <>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {listStudents.map((student, i) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
        
            
    )
}
export default ListSearchComponent;