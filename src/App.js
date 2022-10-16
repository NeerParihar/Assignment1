import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from "./components/Aboutus";
import Ahome from "./components/AdminHome";
import Contact from "./components/Contactus";
import Home from "./components/Home";
import Photos from "./components/Images";
import Login from "./components/login";

const App=()=>
{
  return(
    <> 
     
     
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid ">
    <a class="navbar-brand text-info" href="#">Neeraj Parihar</a>
    
      
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        
          <Link class="nav-link active  text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active text-white" aria-current="page" to="/aboutus">About Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active  text-white" aria-current="page" to="/contactus">Contact Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active  text-white" aria-current="page" to="/images">Images</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active  text-info" aria-current="page" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/adminhome" element={<Ahome/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/contactus" element={<Contact/>} ></Route>
      <Route path="/images" element={<Photos/>}></Route>
    </Routes>
    </>
  )

}
export default App;
