import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../Firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Authe = ({ buttonName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(app);


    //Login
    if (buttonName === 'Login') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/')
        })
        .catch((err) => {
          console.log(err)
        })

    } else {

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          userCredentials.user.displayName = username;
          navigate('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
}


  return (
    <>
      <form onSubmit={handelSubmit}>


{/* Display username field only for signup */}
        {buttonName === 'Singnup' && (
          <div className="from-group">
            <label>userName</label>
            <input type="text"className="form-input" placeholder="Enter your userName" 
            value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
        )}


        <div className="from-group">
          <label>Email</label>
          <input type="text" className="form-input" placeholder="Enter your email" 
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="from-group">
          <label>Password</label>
          <input type="password" className="form-input" placeholder="Enter your Password"
           value={password} onChange={(e) => setPassword(e.target.value)} required
          />
        </div>

        <div className="from-group">
          <input
            type="submit"
            className="buttonCart"
            value={buttonName}
          />
        </div>
      </form>
    </>
  );
};

export default Authe;
