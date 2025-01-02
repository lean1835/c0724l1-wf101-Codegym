import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {Link} from 'react-router-dom'
function HeaderComponent(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-menu">
      <div className="container-fluid button-menu">
        <Link style={{ color:'white',fontSize:'30px',fontWeight:'bold' }} className="navbar-brand " to="/home">
          Furama
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-end">
            <li className="nav-item button-menu">
                <Link style={{color:'white' }} className="nav-link" to="/list">List Service</Link>
            </li>
            
            <li  className="nav-item button-menu">
              <a style={{color:'white' }} className="nav-link active" href="#">
                About us
              </a>
            </li>
            <li className="nav-item button-menu">
              <a style={{color:'white' }} className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item dropdown button-menu">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:'white' }}
              >
                Công cụ ADMIN
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/list/add">
                    Thêm mới
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item disable" href="#">
                    Coming soon...
                  </a>
                </li>
              </ul>
            </li>
          </ul> 
        </div>
      </div>
    </nav></>
    );
}
export default HeaderComponent;