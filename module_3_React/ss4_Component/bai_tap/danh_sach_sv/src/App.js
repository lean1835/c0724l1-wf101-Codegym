import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'; 
import Header from './components/Header'; 
import ListStudentsComponent from './components/Students/ListStudentsComponent';
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

function App() {
  return (
    <>   
     <Header/>
    <ListStudentsComponent list={listStudents}/>
    <Footer/>
    </>

  );
}

export default App;
