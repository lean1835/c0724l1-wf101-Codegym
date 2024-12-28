import React from "react";
import DeleteComponent from "./DeleteComponent";
import {getAllStudent} from "../../service/studentService";
import AddComponent from "./AddComponent";


class ListComponent extends React.Component {
    constructor(prop) {
        super(prop);
        // state là một đối tượng
        this.state = {
            listStudents: [],
            isShowModal: false,
            isReload: false,
            deleteStudent: {
                id:"",
                name:"",
                phone:"",
                email: ""
            }
        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleReload = this.handleReload.bind(this);
    }
    // sau khi render lần đầu tiên thì hàm sẽ chạy để lấy dữ liệu
    componentDidMount() {
        // fetch data từ backend
        console.log("------componentDidMount run--")
        this.setState((preState) => ({
            ...preState,
            listStudents: [...getAllStudent()]
        }));
    }
    // sau khi thêm mới thành công thì cần kiểm tra state thay đổi => lấy dữ liệu ở dưới lên và render lại
    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if (prevState.isReload !== this.state.isReload) {
            console.log("did update")
            this.setState((preState) => ({
                ...preState,
                listStudents: [...getAllStudent()]
            }))
        }
    }
   // hàm cập nhật state để component render lại
   handleReload() {
    this.setState((pre) => ({
        ...pre,
        isReload: !pre.isReload,
    }))
}


    // đóng mở modal

    handleShowModal(e) {
        this.setState((preState) => (
            {
                ...preState,
                isShowModal: !preState.isShowModal,
                deleteStudent:{
                    ...e
                }
            }
        ))
    }

    render() {
        return (
            <>
                <AddComponent handleReload={this.handleReload.bind(this)}/>

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
                    {this.state.listStudents.map((e, i) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button onClick={()=>{
                                    this.handleShowModal(e);
                                }} className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent handleReload = {this.handleReload} deleteStudent ={this.state.deleteStudent} handleShowModal={this.handleShowModal} isShowModal={this.state.isShowModal}/>
            </>
        )
    }

}

export default ListComponent;