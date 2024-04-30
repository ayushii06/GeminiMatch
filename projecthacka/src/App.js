import { Routes, BrowserRouter, Route } from "react-router-dom";
import Products from './components/Product/Products.js' ;
import './style.css'
import ProductDesc from "./components/Product/ProductDetail.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import './App.css';
import Input from "./components/Input/Input.js";
import Device from "./components/Input/Device.js";
import Search from "./components/Search/Search.js";
import About from "./components/About/About.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/input' element={<Input/>}></Route>          
            <Route exact path='/product' element={<Products/>}></Route>
            <Route exact path='/search' element={<Search/>}></Route>
            <Route path='/detail' element={<ProductDesc/>}></Route>
            <Route path='/Mobile' element={<Device category='Mobile'/>}></Route>
            <Route path='/Laptop' element={<Device category='Laptop'/>}></Route>
            <Route path='/Camera' element={<Device category='Camera'/>}></Route>
            <Route path='/Speaker' element={<Device category='Speaker'/>}></Route>
        </Routes>
  
    </BrowserRouter>
    </>
  );
}

export default App;
