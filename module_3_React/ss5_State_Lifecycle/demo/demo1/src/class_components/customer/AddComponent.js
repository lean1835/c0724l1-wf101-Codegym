import React from "react";
import {addNewCustomer, getAllCustomer} from "../../service/customerService";

class AddComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            customer :{
                id: "",
                name:""
            }
        }
        this.handleSave= this.handleSave.bind(this);

    }
    handleSave(){
        console.log("-----save---------")
        // goi api thêm mới
        addNewCustomer(this.state.customer);
        this.props.handleAddSuccess(); ///gọi hàm để nhận giá trị true
    }
    handleOnChange(event){
        console.log(event.target.name) // lấy dc tên id của ô input
        console.log(event.target.value) //lấy dc giá trị ô input
        this.setState((preState)=>({
            ...preState,
            customer:{
                ...preState.customer, // rải lại đối tượng cũ
                [event.target.name]: event.target.value, // set lại với mảng các ô input:, với : tên ô input= giá trị mới đổi
            }

        }))

    }

    render() {
        return (
            <>
                <h2>Add Customer</h2>
                <form>
                    ID:
                    <input name={'id'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    Name:
                    <input name={'name'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    <button onClick={this.handleSave} type="button">Save</button>
                </form>
            </>

        );
    }
}
export default AddComponent ;