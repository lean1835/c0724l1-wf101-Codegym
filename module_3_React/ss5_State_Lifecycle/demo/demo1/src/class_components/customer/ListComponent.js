import React from "react";
import DeleteComponent from "./DeleteComponent";
import {getAllCustomer} from "../../service/customerService";
import AddComponent from "./AddComponent";


class ListComponent extends React.Component {
    constructor(prop) {
        super(prop);
        // state là một đối tượng
        this.state = {
            customerList: [],
            isShowModal: false,
            isAddSuccess: false,
        }
        this.handleShowModal = this.handleShowModal.bind(this);
    }
    // sau khi render lần đầu tiên thì hàm sẽ chạy để lấy dữ liệu
    componentDidMount() {
        // fetch data từ backend
        console.log("------componentDidMount run--")
        this.setState((preState) => ({
            ...preState,//rải lại các thuộc tính đã dc khởi tạo của state
            customerList: [...getAllCustomer()] //set lại các thuộc tính cần cập nhật
        }));
    }
    // sau khi thêm mới thành công thì cần kiểm tra state thay đổi => lấy dữ liệu ở dưới lên và render lại
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isAddSuccess !== this.state.isAddSuccess) {
            this.setState((preState) => ({
                ...preState,
                customerList: [...getAllCustomer()]
            }))
        }
    }
    
   // hàm cập nhật state để component render lại
    handleAddSuccess() {
        this.setState((pre) => ({
            ...pre,
            isAddSuccess: true,
        }))
    }

    // đóng mở modal

    handleShowModal() {
        this.setState((preState) => (
            {
                ...preState,
                isShowModal: !preState.isShowModal //khác với trạng thái hiển thời
            }
        ))
    }

    render() {
        return (
            <>
                <AddComponent handleAddSuccess={this.handleAddSuccess.bind(this)}/>

                <table className={'table table-dark'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.customerList.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                                <button onClick={this.handleShowModal.bind(this)} className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent handleShowModal={this.handleShowModal} isShowModal={this.state.isShowModal}/>
            </>
        )
    }

}

export default ListComponent;