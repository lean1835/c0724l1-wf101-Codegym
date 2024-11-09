import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const listStudents=[
  {
    id:"01",
    name:"an1",
    class: "ktpm"
  },
  {
    id:"02",
    name:"an2",
    class: "tmdt"
  },
  {
    id:"03",
    name:"an3",
    class: "sp_toan"
  }
];
const header=<>
         <hr/>
         <h3>Students</h3>
</>
const table=
<table className='table table-striped'>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
  {listStudents.map((e,i)=>(
      <tr>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.class}</td>
      </tr>
    ))}
  </tbody>


</table> 
const result=
<div>
  {header}
  {table}
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  result
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
