import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";

const tags = ["API Integration", "Cryptocurrency", "Real-time Data", "HMAC-SHA256", "Automated Trading", "Fintech", "Backtesting"];

function Project5() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          Crypto Trading Bot
        </h1>
        <div className="h1-special">
          A comprehensive automated trading platform interfacing with the Binance exchange API — market orders, HMAC-SHA256 auth, and backtesting.
        </div>
      </div>

      <div className="line" />

      <div className="project-display-container">
        <div className="project-content">
          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Project Overview</h3>
            <p>
              This cryptocurrency trading platform demonstrates advanced software engineering capabilities
              in financial technology, including secure API integration, real-time data processing, and
              automated trading systems. The application leverages the Binance API for executing trades,
              managing orders, and accessing market data, implementing HMAC-SHA256 signatures for secure communications.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Core Features</h3>
            <ul>
              <li><strong>Secure API Integration:</strong> HMAC-SHA256 authentication for all Binance API communications</li>
              <li><strong>Real-time Data Processing:</strong> Live market data streaming and analysis</li>
              <li><strong>Automated Trading:</strong> Support for market and limit orders with automated execution</li>
              <li><strong>Portfolio Management:</strong> Comprehensive tracking and management of trading positions</li>
              <li><strong>Custom Algorithms:</strong> Extensible framework for implementing custom trading strategies</li>
              <li><strong>Backtesting:</strong> Historical data analysis for strategy validation before live deployment</li>
            </ul>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Technical Architecture</h3>
            <p>
              The platform is designed to be highly extensible, allowing for implementation of custom trading
              algorithms, multi-exchange support, and regulatory compliance reporting. The modular architecture
              ensures scalability and maintainability as trading logic grows in complexity.
            </p>
          </div>

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://github.com/odbprojects/crypto_bot" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub ↗
        </a>
      </div>
    </>
  );
}

export default Project5;
