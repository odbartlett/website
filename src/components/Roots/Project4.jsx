import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";
import keyImage from "../../assets/key_value.png";

const tags = ["C Programming", "Client-Server", "Multithreading", "Socket Programming", "Transactions", "Concurrency Control"];

function Project4() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          Key/Value Store
        </h1>
        <div className="h1-special">
          A distributed client-server key-value storage system with multi-client concurrency, atomic transactions, and rollback support.
        </div>
      </div>

      <div className="line" />

      <div className="project-display-container">
        <div className="project-content">
          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Project Overview</h3>
            <p>
              A lightweight distributed key-value storage system demonstrating advanced C programming,
              concurrent and multithreaded programming with pthread_mutex, and a strong understanding
              of client-server architecture. Showcases expertise in network programming, data serialization,
              and robust error handling for reliable distributed operations.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Core Features</h3>
            <ul>
              <li><strong>Distributed Architecture:</strong> Lightweight key-value storage for multi-client environments with socket-based communication</li>
              <li><strong>Concurrent Operations:</strong> Server listens for multiple client requests with robust concurrency management via pthread_mutex</li>
              <li><strong>Data Operations:</strong> GET, SET, and INCR operations with atomic individual execution</li>
              <li><strong>Transaction Support:</strong> Transactional sequences that group multiple operations for consistency guarantees</li>
              <li><strong>Rollback Mechanisms:</strong> Built-in error handling and concurrency control with database-style rollback on failure</li>
              <li><strong>Network Communication:</strong> Socket-based communication with full data serialization and deserialization</li>
            </ul>
          </div>

          <img src={keyImage} alt="Key-Value Store Architecture" className="project-image" style={{ imageRendering: 'crisp-edges' }} />

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://github.com/odbprojects/key-value-storage" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub ↗
        </a>
      </div>
    </>
  );
}

export default Project4;
