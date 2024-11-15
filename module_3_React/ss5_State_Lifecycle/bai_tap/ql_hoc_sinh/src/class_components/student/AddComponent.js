import React from "react";
import {addNewStudent, getAllCustomer} from "../../service/studentService";

class AddComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            student :{
                name: "",
                phone:"",
                email:""
            }
        }
        this.handleSave= this.handleSave.bind(this);

    }
    handleSave(){
        console.log("-----save---------")
        // goi api thêm mới
        addNewStudent(this.state.student);
        this.props.handleAddSuccess();

    }
    handleOnChange(event){
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState((preState)=>({
            ...preState,
            student:{
                ...preState.student,
                [event.target.name]: event.target.value,
            }

        }))

    }

    render() {
        return (
            <>
                <h2>Add Students</h2>
                <form>
                    Name:
                    <input name={'name'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    Phone:
                    <input name={'phone'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    Email:
                    <input name={'email'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    <button onClick={this.handleSave} type="button">Save</button>
                </form>
            </>

        );
    }
}
export default AddComponent ;