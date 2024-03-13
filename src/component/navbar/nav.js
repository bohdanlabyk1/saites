import  './nav.scss';
 import { Routes, Route, Link } from "react-router-dom"
 import Home from '../../page/Home/Home';
import About from '../../page/about/About';
import Typographi from '../../page/typography/Typographi';
import { useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
const Navbar = () => {
 const[isopen, setIsopen] = useState();

    return (
      <div className="App">
       <div className="nav-bar">
       <div className="logo">Pesto</div>
        <div className={`menu ${isopen ? "active" : ""}`}>
          <ul className='menu-nav'>
          <li><Link className='a' to='/'>home</Link></li>
          <li><Link className='a' to='/about'>about</Link></li>
          <li><Link className='a' to='/typography'>typography</Link></li>
          </ul>
        </div>
        <button className='menu-btn'
         onClick={()=> setIsopen(!isopen)}><AiOutlineUnorderedList /></button>
       </div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/typography' element={<Typographi/>}/>
     </Routes>
      </div>
    );
  }
  
  export default Navbar;