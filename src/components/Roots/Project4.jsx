import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header"
import keyImage from "../../assets/key_value.png";

function Project4() {
    return (
        <>
            <Header />

            <div style={{ textAlign: 'left', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ marginBottom: '0.5rem' }}>
                    Key/Value Store
                </h1>
                <div className="h1-special">
                    A distributed client-server system designed for efficient concurrent data storage and retrieval operations.
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
                            This program demonstrates advanced software engineering skills, including proficiency in C programming, 
                            concurrent and multithreaded programming with tools like pthread_mutex, and a strong understanding 
                            of client-server architecture. It showcases expertise in network programming, data serialization, 
                            and robust error handling for reliable distributed operations.
                        </p>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Core Features
                        </h4>
                        <ul>
                            <li><strong>Distributed Architecture:</strong> Lightweight, distributed key-value storage system for multi-client environments</li>
                            <li><strong>Concurrent Operations:</strong> Server listens for multiple client requests with robust concurrency management</li>
                            <li><strong>Data Operations:</strong> Support for GET, SET, and INCR operations with atomic individual operations</li>
                            <li><strong>Transaction Support:</strong> Transactional sequences to group multiple operations for consistency</li>
                            <li><strong>Rollback Mechanisms:</strong> Built-in error handling and concurrency control for database-like operations</li>
                            <li><strong>Network Communication:</strong> Socket-based communication with data serialization/deserialization</li>
                        </ul>
                    </div>
            
                    <img src={keyImage} alt="Key-Value Store Architecture" className="project-image"/>

                    <div className="project-text"> 
                        <h4 style={{ color: '#F3DADF', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            System Architecture
                        </h4>
                        <p>
                            The program is designed for scenarios where lightweight, concurrent key-value storage is needed, 
                            such as caching systems, distributed applications, or learning environments for database transaction concepts. 
                            Its built-in error handling and concurrency management ensure it can operate reliably in high-demand situations.
                        </p>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Technical Highlights
                        </h4>
                        <ul>
                            <li><strong>Atomicity:</strong> Ensures all-or-nothing execution of transaction sequences</li>
                            <li><strong>Concurrency Control:</strong> pthread_mutex implementation for thread-safe operations</li>
                            <li><strong>Network Programming:</strong> Socket-based client-server communication</li>
                            <li><strong>Data Integrity:</strong> Robust error handling and rollback mechanisms</li>
                            <li><strong>Scalability:</strong> Designed to handle multiple concurrent clients efficiently</li>
                        </ul>
                        
                        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                            This project showcases essential skills in distributed systems, concurrent programming, and database 
                            transaction concepts, making it valuable for understanding modern backend infrastructure.
                        </p>
                    </div>
                    
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
                        }}>Client-Server</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Multithreading</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Socket Programming</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Transactions</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Concurrency Control</span>
                    </div>
                </div>
                
                <a
                    href="https://github.com/odbprojects/key-value-storage"
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

export default Project4
  