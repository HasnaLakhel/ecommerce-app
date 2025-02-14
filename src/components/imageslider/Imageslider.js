import React from 'react';
import "./imageslider.css";
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../assets/manga/1345590.png';
import image2 from '../../assets/manga/death-note.jpg';
import image3 from '../../assets/manga/one-piece.jpg';
import image4 from '../../assets/manga/death-note.jpg';




export default function Imageslider(props) {
    return (
        <div className="Showcase">
            <AliceCarousel
                autoPlay
                autoPlayInterval={1000}
                disableButtonsControls 
            >
<div className="slider-item">
    <img src={image1} className="sliderimg"/>
    <div className="slider-content">
        <div className="hero-text">
            <h1>Best Manga Available </h1>
            <p>Buy quality Manga at cheaper prices</p>
            <button><a href={props.url}>Manga Book</a></button>
        </div>
    </div>
</div>
<div className="slider-item">
    <img src={image2} className="sliderimg" alt='Showcase of Manga content'/>
    <div className="slider-content">
        <div className="hero-text">
            <h1>Best Manga available</h1>
            <p>Buy quality Manga at cheaper prices</p>
            <button><a href={props.url}>Manga Book</a></button>
        </div>
    </div>
</div>
<div className="slider-item">
    <img src={image3} className="sliderimg" alt='Showcase of Manga content'/>
    <div className="slider-content">
        <div className="hero-text">
            <h1>Best Manga available</h1>
            <p>Buy quality Manga at cheaper prices</p>
            <button><a href={props.url}>Manga Book</a></button>
        </div>
    </div>
</div>
<div className="slider-item">
    <img src={image4} className="sliderimg" alt='Showcase of Manga content'/>
    <div className="slider-content">
        <div className="hero-text">
            <h1>Best Manga available</h1>
            <p>Buy quality Manga at cheaper prices</p>
            <button><a href={props.url}>Manga Book</a></button>
        </div>
    </div>
</div>

            </AliceCarousel>
        </div>
    );
}
