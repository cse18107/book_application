import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route,Routes} from "react-router-dom";
import Home from './components/Pages/Home/Home'
import AddBook from './components/Pages/AddBook/AddBook';
import EditBook from './components/Pages/EditBook/EditBook';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/add-book" exact element={<AddBook/>}/>
        <Route path="/edit-book" exact element={<EditBook/>}/>
      </Routes>
    </>
  );
}

export default App;
