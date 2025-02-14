import React from "react";
import "./ProductListingAll.css";
import ProductlistingCard from "../../components/productlistingCard/ProductlistingCard";
import { BookData } from "../../pages/BookData";

const ProductListingAll = () => {
  console.log(BookData)
  return (
    <>

    <section className="section">
      <div className="featured-products">
        <h1 className="featured-products-heading">All Products</h1>
      </div>
      <div className="container">
        <div className="grid-container">
          {BookData.map((book) => {
            return(
                <div key={book.id} className="grid-item">
                <ProductlistingCard  bookData = {book}/>
              </div>
            )

          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductListingAll;