import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";
import trees from "../../assets/trees.png";
import treesPointilism from "../../assets/trees_pointilism.png";

const tags = ["C Programming", "Pixel Manipulation", "PPM Format", "Image Processing", "CLI Interface", "Algorithm Design"];

function Project2() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          Image Manipulation
        </h1>
        <div className="h1-special">
          Full C implementation of a powerful PPM file editor with advanced pixel-level transformations — no external libraries.
        </div>
      </div>

      <div className="line" />

      <div className="project-display-container">
        <div className="project-content">
          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Project Overview</h3>
            <p>
              A C-based image manipulation program that performs a variety of transformations on images
              using direct pixel-level manipulation, without relying on any external libraries. It operates
              through a command-line interface and uses pure algorithmic logic to execute all transformations.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Core Features</h3>
            <ul>
              <li><strong>Grayscale:</strong> Converts the input image to grayscale by recalculating pixel values based on luminance</li>
              <li><strong>Blend:</strong> Combines the input image with a target image using an alpha value to determine per-pixel transparency</li>
              <li><strong>Rotate-CCW:</strong> Rotates the image 90° counterclockwise by recalculating individual pixel positions</li>
              <li><strong>Pointillism:</strong> Applies an artistic pointillism effect by redistributing pixel colors in a stippled pattern</li>
              <li><strong>Blur:</strong> Implements a Gaussian blur by recalculating pixel values as a weighted average of their neighbors</li>
              <li><strong>Saturate:</strong> Adjusts image saturation by scaling pixel color intensity, enhancing or muting vibrancy</li>
            </ul>
          </div>

          <img src={trees} alt="Original Image" className="project-image" />

          <div style={{ textAlign: 'center', margin: '0.5rem 0 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--coral)', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>
            Pointillism transformation applied below
          </div>

          <img src={treesPointilism} alt="Pointillism Effect Applied" className="project-image" />

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://github.com/odbprojects/image_manip" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub ↗
        </a>
      </div>
    </>
  );
}

export default Project2;
