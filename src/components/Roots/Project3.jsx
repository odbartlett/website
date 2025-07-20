import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header"
import cacheImage from "../../assets/cache.png";

function Project3() {
    return (
        <>
            <Header />

            <div style={{ textAlign: 'left', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ marginBottom: '0.5rem' }}>
                    Cache Simulator
                </h1>
                <div className="h1-special">
                    Advanced C++ cache simulation system for analyzing and evaluating memory performance strategies.
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
                            This cache simulator, written in C++, models a variety of caching strategies to analyze and evaluate performance. 
                            The core of the simulation is a sophisticated Cache class that utilizes advanced data structures to represent 
                            different cache architectures and policies.
                        </p>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Architecture & Features
                        </h4>
                        <ul>
                            <li><strong>Flexible Cache Structure:</strong> Vector of vectors design where outer vector represents cache sets and inner vectors simulate associative caching</li>
                            <li><strong>Multiple Cache Types:</strong> Supports directly mapped, n-way associative, and fully associative caches</li>
                            <li><strong>Configurable Parameters:</strong> Number of sets, blocks per set, bytes per block, and replacement policies</li>
                            <li><strong>Advanced Policies:</strong> Write-allocate vs. no-write-allocate, write-back vs. write-through, and FIFO vs. LRU replacement</li>
                            <li><strong>Performance Metrics:</strong> Detailed tracking of load/store hits/misses, total cycles, and access timing</li>
                            <li><strong>Block Management:</strong> Each block contains tag, validity, dirtiness, and access time for LRU policies</li>
                        </ul>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Technical Implementation
                        </h4>
                        <p>
                            The simulator operates via a command-line interface, allowing users to specify cache configurations and input 
                            trace files for testing. Simulated memory operations are subject to realistic latency calculations, ensuring 
                            accurate performance modeling. This provides a comprehensive tool for understanding and evaluating the behavior 
                            of modern cache systems under various conditions.
                        </p>
                        
                        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                            This project demonstrates deep understanding of computer architecture, memory hierarchy optimization, 
                            and performance analysis techniques essential for systems programming.
                        </p>
                    </div>
            
                    <img src={cacheImage} alt="Cache Simulator Interface" className="project-image"/>
                    
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
                        }}>C++</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Computer Architecture</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Memory Hierarchy</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Performance Analysis</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>LRU/FIFO Algorithms</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Systems Programming</span>
                    </div>
                </div>
                
                <a
                    href="https://github.com/odbprojects/cache-simulator"
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

export default Project3
  