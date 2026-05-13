import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";
import cacheImage from "../../assets/cache.png";

const tags = ["C++", "Computer Architecture", "Memory Hierarchy", "Performance Analysis", "LRU/FIFO", "Systems Programming"];

function Project3() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          Cache Simulator
        </h1>
        <div className="h1-special">
          Advanced C++ cache simulation system for analyzing and evaluating memory performance across configurable cache architectures.
        </div>
      </div>

      <div className="line" />

      <div className="project-display-container">
        <div className="project-content">
          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Project Overview</h3>
            <p>
              A C++ cache simulator that models a variety of caching strategies to analyze and evaluate
              performance. The core of the simulation is a sophisticated Cache class using advanced data
              structures to represent different cache architectures and policies.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Architecture & Features</h3>
            <ul>
              <li><strong>Flexible Cache Structure:</strong> Vector-of-vectors design where outer vector represents sets and inner vectors simulate associative caching</li>
              <li><strong>Multiple Cache Types:</strong> Directly mapped, n-way associative, and fully associative caches</li>
              <li><strong>Configurable Parameters:</strong> Sets, blocks per set, bytes per block, and replacement policies all configurable via CLI</li>
              <li><strong>Advanced Policies:</strong> Write-allocate vs. no-write-allocate, write-back vs. write-through, and FIFO vs. LRU replacement</li>
              <li><strong>Performance Metrics:</strong> Detailed tracking of load/store hits and misses, total cycles, and access timing</li>
              <li><strong>Block Management:</strong> Each block contains tag, validity, dirtiness, and access time for LRU policies</li>
            </ul>
          </div>

          <img src={cacheImage} alt="Cache Simulator CLI Output" className="project-image" style={{ imageRendering: 'crisp-edges' }} />

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://github.com/odbprojects/cache-simulator" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub ↗
        </a>
      </div>
    </>
  );
}

export default Project3;
