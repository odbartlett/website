import React from "react";
import "../index.css";
import "./CardSlider.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CardSlider = (props) => {
    const projects = [
        {
          image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
          title: "57hours",
          description: "Redesigning an adventures booking platform",
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "57hours",
            description: "Redesigning an adventures booking platform",
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
            title: "57hours",
            description: "Redesigning an adventures booking platform",
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
            title: "57hours",
            description: "Redesigning an adventures booking platform",
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "blob",
            description: "Redesigning an adventures booking platform",
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
      <div id="slider">
        {
        projects.map((project,index)=>{
                return(
                    <div className="slider-card" key={index}>
                        <div className="slider-card-image" 
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover' 
                            }}>
                        
                        </div>
                        <p className="slider-card-title">{project.title}</p>
                        <p className="slider-card-description">{project.description}</p>
                    </div>
                )
            })
        }
      </div>
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideRight}/>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideLeft}/>
    </div>
  );
}

export default CardSlider;