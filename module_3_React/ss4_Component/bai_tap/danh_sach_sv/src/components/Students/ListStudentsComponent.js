import React from  "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class ListStudentsComponent extends React.Component{

    render(){
        return(
            <>
            <table className='table table-striped'>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Class</th>
                </tr>
            </thead>
            <tbody>
            {this.props.list.map((e,i)=>(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.class}</td>
                </tr>
                ))}
            </tbody>
            </table>   
            </>          
        )
    }
} 
export default ListStudentsComponent;