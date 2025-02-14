import React, {useContext} from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App'; 
import { ReactComponent as Cart} from '../../assets/cart.svg';
import { getAuth, signOut } from 'firebase/auth';
import app from "../../Firebase/Firebase";



const Navbar=()=> {

  const user = useContext(UserContext);
  const auth = getAuth(app);
  const navigate = useNavigate


//  pour gérer la déconnexion de l'utilisateur
  const handleLogout =()=> {
    signOut(auth).then(()=>{
      navigate('/');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const showLoginAndSignUp= (
      <nav className='nav-link-container'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/Books'className='nav-link'>Manga</Link>
        <Link to='/Login'className='nav-link'>Login</Link>
        <Link to='/Singnup'className='nav-link'>Singn up</Link>
      </nav>
  )


  const showLogoutAndCart= (
    <nav className='nav-link-container'>
      <Link to='/' className='nav-link'>Home</Link>
      <Link to='/Books'className='nav-link'>Manga</Link>
      <Link onClick={handleLogout} to='/'className='nav-link'>Logout</Link>
      <Link to='/cart' className='cart-link'><Cart/></Link>
    </nav>
)   



  return (
    <>
    <section className='navbar-container'>
      <div className='container flex justify-between align-center'>
        <a href='a'className='logo'>Manga<span className='logox'>Store</span></a>

        {user ? showLogoutAndCart  : showLoginAndSignUp}

      </div>
    </section>
    </>
  )
}

export default Navbar   