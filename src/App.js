import React, { useState ,useEffect, createContext} from 'react';
import {Routes , Route} from "react-router-dom";
import app from './Firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import BookDetails from './pages/BookDetails';
import Login from './pages/registration/Login';
import Singnup from './pages/registration/Singnup';
import Cartpage from './pages/CartPage/Cartpage';
import Scroltotop from './components/Scroltotop/Scroltotop';


export const UserContext=createContext({});
export const CartContext=createContext({});

const App = () => {

    const auth= getAuth(app);


    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItemes, setCartItemes] = useState([]);
    const [total, setTotal] = useState();



      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthenticatedUser(user);
          } else{
            setAuthenticatedUser(null);
          }
        });
      
      }, [])


      useEffect(() => {
        let total = 0;
        cartItemes.forEach((item)=>{
          total =  total + parseInt(item.price);
        })

        setTotal(total);
      }, [cartItemes])
      
      



  return (
    <Scroltotop>
      <UserContext.Provider value={authenticatedUser}>
        <CartContext.Provider value={{cartItemes ,total ,setCartItemes}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BookPage/>} />
            <Route path="/cart" element={<Cartpage/>} />
            <Route path="/book-details/:id" element={<BookDetails/>} />
            <Route path="/Singnup" element={<Singnup/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
        </CartContext.Provider>
    </UserContext.Provider>
    </Scroltotop>

  );
}

export default App;
