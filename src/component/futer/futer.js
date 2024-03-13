import './futer.scss';
import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";


const Futer = () => {
    return (
      <div className="App">
       <div className="futer">
       <div className="menu-futer">
          <div className="logo">Pesto</div>
          <ul className='nav-futer'>
          <li><Link className="a" to='/'>home</Link></li>
          <li><Link className="a" to='/about'>about</Link></li>
          <li><Link className='a' to='/typography'>typography</Link></li>
          </ul>
        </div>
        <div className='icon'>
          <CiFacebook className='icons'/>
        <FaInstagram className='icons' />
        <CiTwitter className='icons' />
        <CiYoutube className='icons'/>
        </div>
       </div>
      </div>
    );
  }
  
  export default Futer;