import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
class Alert extends React.Component{
    render(){
        return(
            <div class="alert alert-danger" role="alert">
                {this.props.text}
            </div>
        )
    }
}
export default Alert;