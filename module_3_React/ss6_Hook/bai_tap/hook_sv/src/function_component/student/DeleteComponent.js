
//mới hiện modal
import React from "react";
import {deleteStudentById, getAllStudent} from "../service/studentService";
const DeleteComponent =({isShowModal, handleShowModal,nameDelete,handleCloseModal,handleReload})=>{

    // const handleDelete= ()=>{
    //     console.log("-------delete------------")
    //      deleteStudentsId(deleteStudent.id);
    //     console.log(getAllStudent());
    //     handleShowModal();
    //     handleReload();
    // }

    const handleDelete=()=>{
        deleteStudentById(nameDelete.id);
        handleCloseModal();
        handleReload();
        console.log(getAllStudent());
    }


        return (
            isShowModal&&<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Do you want to delete {nameDelete.name} ???</p>
                        </div>
                        <div className="modal-footer">
                            <button  onClick={handleCloseModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleDelete}  type="button" className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default DeleteComponent;