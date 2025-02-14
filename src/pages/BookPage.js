import React from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import ProductListingAll from '../components/ProductListingAll/ProductListingAll.js';
import Footer from "../components/Footer/Footer.js";


const BookPage=() => {
  return (
    <section>
      <Navbar />
        <ProductListingAll />
      <Footer />
    </section>
  )
}

export default BookPage;