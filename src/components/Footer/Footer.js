import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="Box">
            <div className="FooterContainer">
                <div className="Row">
                    <div className="Column">
                        <h2 className="Heading">About Us</h2>
                        <a href="#" className="FooterLink">Aim</a>
                        <a href="#" className="FooterLink">Vision</a>
                        <a href="#" className="FooterLink">Testimonials</a>
                    </div>
                    <div className="Column">
                        <h2 className="Heading">Services</h2>
                        <a href="#" className="FooterLink">Writing</a>
                        <a href="#" className="FooterLink">Internships</a>
                        <a href="#" className="FooterLink">Coding</a>
                        <a href="#" className="FooterLink">Teaching</a>
                    </div>
                    <div className="Column">
                        <h2 className="Heading">Contact Us</h2>
                        <a href="#" className="FooterLink">Uttar Pradesh</a>
                        <a href="#" className="FooterLink">Ahemdabad</a>
                        <a href="#" className="FooterLink">Indore</a>
                        <a href="#" className="FooterLink">Mumbai</a>
                    </div>
                    <div className="Column">
                        <h2 className="Heading">Social Media</h2>
                        <a href="#" className="FooterLink">
                            <i className="fab fa-facebook-f"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="#" className="FooterLink">
                            <i className="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="#" className="FooterLink">
                            <i className="fab fa-twitter"></i>
                            <span>Twitter</span>
                        </a>
                        <a href="#" className="FooterLink">
                            <i className="fab fa-youtube"></i>
                            <span>Youtube</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
