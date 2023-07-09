import React, { useContext } from 'react';
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../../ContextProvider/Context';

const Navbar = () => {
  const navigate = useNavigate()
  const {loggedIn,LoginB} = useContext(AuthContext) 
  return (
        <div className="nav">
        <div className="title">
            <Link to="/"><h2 >DISH APP</h2></Link>
        </div>
        <div className="menu">
        <Link exact to="/" >Home</Link>
        <Link exact to="/addtodish" >Your Favourite Dish</Link>
        <Link exact to="/rankings" >Rankings</Link>
        {
          loggedIn ? <button className='Navbtn' onClick={()=>{
            LoginB();
            navigate("/");
            }}>Logout</button> : null
        }
        </div>
    </div>

  );
}

export default Navbar; 