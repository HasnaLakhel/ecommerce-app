import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ProductListing from '../components/ProductListing/ProductListing';
import Footer from '../components/Footer/Footer';
import Imageslider from '../components/imageslider/Imageslider';

const HomePage=() => {
  return (
    <section>
      <Navbar />
      < Imageslider/>
      <ProductListing/>
      <Footer />
    </section>
  )
}

export default HomePage;