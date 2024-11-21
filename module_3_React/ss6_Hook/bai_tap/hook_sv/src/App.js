import logo from './logo.svg';
import './App.css';
import HeaderComponent from './function_component/HeaderComponent';
import ListComponent from './function_component/student/ListComponent';
import FooterComponent from './function_component/FooterComponent';
function App() {
  return (
    <>
      <HeaderComponent/>
      <ListComponent/>
      <FooterComponent/>
    </>
  );
}

export default App;
