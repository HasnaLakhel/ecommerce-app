import React from "react";
import "./Singnup.css";
import Authbg from "../../assets/image.webp";
import Authe from "../../components/Authe/Authe";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <section className='Singnup-section'>
        
        <div className='Singnup-container'>
            <img src={Authbg} className='Singnup-img'/>
        
        <div className='Singnup-content'>
            <div className='Singnup-warpper'>
                <h1>Login</h1>
                <p>Create a new account with email and password</p>

                <Authe buttonName="Login"/>
            </div>
        </div>
        </div>
    </section>
    </React.Fragment>
  )
}

export default Login;
