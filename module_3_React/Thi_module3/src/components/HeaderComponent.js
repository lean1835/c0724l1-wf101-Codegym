import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {Link} from 'react-router-dom'

function HeaderComponent(){
    return(
        <>
            <div className="caseStudy rainbow-text"><Link className="nav-link" to="/list">Bài thi module 3</Link></div>
    </>
    );
}
export default HeaderComponent;