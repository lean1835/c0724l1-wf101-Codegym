import logo from './logo.svg';
import './App.css';
// import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListComponent from './components/ListComponent';
import DetailComponent from './components/DetailComponent';
import EditComponent from './components/EditComponent'
import { ToastContainer, toast } from 'react-toastify';
import AddComponent from './components/AddComponent';
import HeaderComponent from './components/HeaderComponent';
function App() {
  return (
     <>
     <ToastContainer/>
     <HeaderComponent/>
      <Routes>
      <Route path='/list' element={<ListComponent/>}></Route>
      <Route path='/list/add' element={<AddComponent/>}></Route>
      <Route path={'/list/detail/:id'} element={<DetailComponent/>}></Route>
      <Route path={'/list/edit/:id'} element={<EditComponent/>}></Route>
      </Routes>

     </>

  );
}

export default App;
