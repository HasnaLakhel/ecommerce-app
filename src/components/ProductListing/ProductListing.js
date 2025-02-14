import React from "react";
import "./ProductListing.css";
import ProductlistingCard from "../../components/productlistingCard/ProductlistingCard";
import { BookData } from "../../pages/BookData";

const ProductListing = () => {
  return (
    <section>
      <div className="featured-products">
        <h1 className="featured-products-heading">Featured Products</h1>
      </div>
      <div className="product-listing-container">
        <div className="container">
          <div className="listing-container">
            {BookData.slice(0, 4).map((book) => (
              <ProductlistingCard key={book.id} bookData={book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
