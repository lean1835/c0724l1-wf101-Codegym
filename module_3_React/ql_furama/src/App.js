import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListComponent from './components/ListComponent';
import HomeComponent from './components/HomeComponent';
import DetailComponent from './components/DetailComponent';
import { ToastContainer, toast } from 'react-toastify';
import AddComponent from './components/AddComponent';
function App() {
  return (
     <>
     <ToastContainer/>
     <HeaderComponent/>
     {/* <div className="card vien" style={{ width: "18rem" }}>
      <img className="card-img-top" style={{width:"100%"}} src="https://th.bing.com/th/id/OIP.NPKgsDyStE3WtvrLXwKAzgHaFI?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div> */}

      {/* <Routes>
        
      </Routes>
     */}
     
      <Routes>
      <Route path='/list' element={<ListComponent/>}></Route>
      <Route path='/home' element={<HomeComponent/>}></Route>
      <Route path='/list/add' element={<AddComponent/>}></Route>
      <Route path={'/list/detail/:id'} element={<DetailComponent/>}></Route>

      </Routes>
      
     </>

  );
}

export default App;
