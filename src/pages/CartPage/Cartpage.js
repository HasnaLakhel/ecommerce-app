import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CartItemesContainer from '../../components/CartItemesContainer/CartItemesContainer'

const Cartpage=()=> {
  return (
    <>
    <section >
      <Navbar/>

      <CartItemesContainer/>

      <Footer/>
      </section>
    </>
  )
}

export default Cartpage