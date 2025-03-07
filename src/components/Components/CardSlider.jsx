import React from "react";
import "../../index.css";
import "./CardSlider.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CardSlider = () => {
    const projects = [
        {
            image: "https://www.shutterstock.com/image-vector/falling-bitcoin-gold-coins-icons-600nw-1424998934.jpg", 
            title: "Crypto Trading Bot",
            description: "A comprehensive trading application interfacing with the Binance exchange API",
            link: "/crypto-trading-bot"
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/2620/2620517.png", 
            title: "Key/Value Store",
            description: "A distributed key-value storage system with multi-client support.",
            link: "/key-value"
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/000/162/591/non_2x/vector-linear-digital-photo-editing-icons.jpg",
            title: "Image-Manipulation",
            description: "A photoshopesque program designed to manipulate ppm images",
            link: "/image-manip"
        },
        {
            image: "https://img.freepik.com/premium-vector/cache-memory-vector-filled-outline-icon-design-illustration_357500-1235.jpg", 
            title: "Cache Simulator",
            description: "A cache simulator capable of mimicing the effeciency of different caches",
            link: "/cache-sim"
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/022/208/730/non_2x/chess-pieces-clip-art-isolated-on-transparent-background-vector.jpg", 
            title: "Chess",
            description: "A full C++ implementation with a UI in the terminal ",
            link: "/chess"
        },
    ];

    const slideLeft = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 550;
    }

    const slideRight = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 550;
    }

    return (
    <div id="main-slider-container">
        <MdChevronLeft size={40} className="slider-icon left" onClick={slideRight}/>
        <MdChevronRight size={40} className="slider-icon right" onClick={slideLeft}/>
        <div id="slider">
    {
    projects.map((project, index) => {
        return (
            <a 
              href={project.link} 
              key={index} 
              className="slider-card-link"
            >
                <div className="slider-card">
                    <div className="slider-card-image" 
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover' 
                        }}>
                    </div>
                    <p className="slider-card-title">{project.title}</p>
                    <p className="slider-card-description">{project.description}</p>
                </div>
            </a>
        );
    })
    }
      </div>
    </div>
  );
}

export default CardSlider;
