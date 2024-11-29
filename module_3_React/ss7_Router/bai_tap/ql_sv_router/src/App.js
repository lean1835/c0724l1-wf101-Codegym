import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListComponent from './components/student/ListComponent';
import FooterComponent from './components/FooterComponent';
import {Routes,Route} from 'react-router-dom'
import AddComponent from './components/student/AddComponent';
import HomeComponent from './components/HomeComponent';
import SearchComponent from './components/student/SearchComponent';
function App() {
  return (
    <>
      <HeaderComponent/>
      <Routes>
        <Route path='/list' element={<ListComponent/>}></Route>
        <Route path='/footer' element={<FooterComponent/>}></Route>
        <Route path='/home' element={<HomeComponent/>}></Route>
        <Route path='/list/add' element={<AddComponent/>}></Route>
        <Route path='/list/search' element={<SearchComponent/>}></Route>
      </Routes>
    </>
  );
}

export default App;