import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header"
import trees from "../../assets/trees.png";
import treesPointilism from "../../assets/trees_pointilism.png";

function Project2() {
    return (
        <>
            <Header />

            <div style={{ textAlign: 'left', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ marginBottom: '0.5rem' }}>
                    Image Manipulation
                </h1>
                <div className="h1-special">
                    Full C implementation of a powerful PPM file editor with advanced pixel-level transformations.
                </div>
            </div>

            <div className="line"/>

            <div className="project-display-container">
                <div className="project-content">
                    <div className="project-text">
                        <h3 style={{ color: '#F1916D', marginBottom: '1rem', fontSize: '1.3rem' }}>
                            Project Overview
                        </h3>
                        <p>
                            This C-based image manipulation program is a powerful tool designed to perform a variety of transformations 
                            on images using direct pixel-level manipulation, without relying on any external libraries. It operates through 
                            a command-line interface and solely uses logic to execute commands.
                        </p>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Core Features
                        </h4>
                        <ul>
                            <li><strong>Grayscale:</strong> Converts the input image to grayscale by recalculating pixel values based on their luminance</li>
                            <li><strong>Blend:</strong> Combines the input image with a target image using an alpha value to determine transparency, pixel by pixel</li>
                            <li><strong>Rotate-CCW:</strong> Rotates the image 90 degrees counterclockwise by recalculating the positions of individual pixels</li>
                            <li><strong>Pointillism:</strong> Applies an artistic pointillism effect by redistributing pixel colors in a stippled pattern</li>
                            <li><strong>Blur:</strong> Implements a Gaussian blur by recalculating pixel values based on a weighted average of their neighbors</li>
                            <li><strong>Saturate:</strong> Adjusts the image saturation by scaling pixel color intensity, enhancing or muting vibrancy</li>
                        </ul>
                        
                        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                            This program exemplifies efficient and resourceful programming by providing precise image transformations 
                            through low-level pixel manipulation, making it a powerful and flexible tool for image processing tasks.
                        </p>
                    </div>

                    <img src={trees} alt="Original Image" className="project-image"/>
                    
                    <div style={{ 
                        textAlign: 'center', 
                        margin: '1rem 0', 
                        padding: '1rem',
                        background: 'rgba(243, 218, 223, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(243, 218, 223, 0.1)'
                    }}>
                        <span style={{ 
                            color: '#F1916D', 
                            fontSize: '1.1rem', 
                            fontWeight: '600' 
                        }}>
                            Pointillism Transformation Applied Below
                        </span>
                    </div>
                    
                    <img src={treesPointilism} alt="Pointillism Effect Applied" className="project-image"/>
                    
                    <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '0.8rem', 
                        justifyContent: 'center', 
                        margin: '2rem 0',
                        padding: '1rem'
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>C Programming</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Pixel Manipulation</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>PPM Format</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Image Processing</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>CLI Interface</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Algorithm Design</span>
                    </div>
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

export default Project2
  