import React from "react";
import "../../index.css";
import "./Projects.css";



import Header from "../Components/header"
import trees from "../../assets/trees.png";
import treesPointilism from "../../assets/trees_pointilism.png";


function Project1() {

    return (
      <>
        <Header />

        <h1>
            Image-Manipulation
            <div className="h1-special">
                Full C implementation of a ppm file editor
            </div>
        </h1>

        <div className="line"/>

        

        <div className="project-display-container">

            
            <div className="project-content">

                <img src={trees} alt="Project Preview" className="project-image"/>
                <div className="project-text">

                <p>
        This C-based image manipulation program is a powerful tool designed to perform a variety of transformations 
        on images using direct pixel-level manipulation, without relying on any external libraries. It operates through 
        a command-line interface and soley uses logic to execute commands. 
      </p>
      <p>The supported commands include:</p>
            <ul>
            <li>
                <strong>grayscale:</strong> Converts the input image to grayscale by recalculating pixel values based on their luminance.
            </li>
            <li>
                <strong>blend:</strong> Combines the input image with a target image using an alpha value to determine transparency, pixel by pixel.
            </li>
            <li>
                <strong>rotate-ccw:</strong> Rotates the image 90 degrees counterclockwise by recalculating the positions of individual pixels.
            </li>
            <li>
                <strong>pointillism:</strong> Applies an artistic pointillism effect by redistributing pixel colors in a stippled pattern to create a unique visual style.
            </li>
            <li>
                <strong>blur:</strong> Implements a Gaussian blur by recalculating pixel values based on a weighted average of their neighbors, controlled by the sigma parameter.
            </li>
            <li>
                <strong>saturate:</strong> Adjusts the image saturation by scaling pixel color intensity, enhancing or muting vibrancy.
            </li>
            </ul>
      <p>
        This program exemplifies efficient and resourceful programming by providing precise image transformations through low-level pixel manipulation, making it a powerful and flexible tool for image processing tasks.
        The example image below shows the effect of the pointilism transformation on the image above.
      </p>

                </div>
                 <img src={treesPointilism} alt="Project Preview" className="project-image"/>
        
        </div>
            <a
            href="https://github.com/odbprojects/image_manip"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            >
            View on GitHub
            </a>
        </div>
      </>
    )
  }
  
  export default Project1
  