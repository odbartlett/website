import React from "react";
import "../../index.css";
import "./CardSlider.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CardSlider = (props) => {
    const projects = [
        {
          image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
          title: "Chess",
          description: "A full C++ implementation with a UI in the terminal ",
          link: "/project1"
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "57hours",
            description: "Redesigning an adventures booking platform",
            link: "/project2"
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
            title: "57hours",
            description: "Redesigning an adventures booking platform",
            link: "/project3"
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", 
            title: "57hours",
            description: "Redesigning an adventures booking platform",
            link: "/project4"
        },
        {
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: "blob",
            description: "Redesigning an adventures booking platform",
            link: "/project5"
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