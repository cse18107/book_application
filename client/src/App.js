import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route,Routes} from "react-router-dom";
import Home from './components/Pages/Home/Home'
import AddBook from './components/Pages/AddBook/AddBook';
import EditBook from './components/Pages/EditBook/EditBook';
import Detail from './components/Pages/Detail/Detail';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/add-book" exact element={<AddBook/>}/>
        <Route path="/edit-book/:id" exact element={<EditBook/>}/>
        <Route path="/detail-book/:id" exact element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
