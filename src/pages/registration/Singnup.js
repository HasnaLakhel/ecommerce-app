import React from "react";
import "./Singnup.css";
import Authbg from "../../assets/image.webp";
import Navbar from "../../components/Navbar/Navbar";
import Authe from "../../components/Authe/Authe";

const Singnup = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="Singnup-section">
        <div className="Singnup-container">
          <img src={Authbg} className="Singnup-img" />

          <div className="Singnup-content">
            <div className="Singnup-warpper">
              <h1>Singnup</h1>
              <p>Create a new account with email and password</p>
              <Authe buttonName="Singnup" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Singnup;

