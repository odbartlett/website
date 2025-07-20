import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";

function Project5() {
    return (
        <>
            <Header />

            <div style={{ textAlign: 'left', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ marginBottom: '0.5rem' }}>
                    Cryptocurrency Trading Platform
                </h1>
                <div className="h1-special">
                    A comprehensive trading application interfacing with the Binance exchange API for automated trading and portfolio management.
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
                            This cryptocurrency trading platform demonstrates advanced software engineering capabilities in financial technology, 
                            including secure API integration, real-time data processing, and automated trading systems. The application leverages 
                            the Binance API for executing trades, managing orders, and accessing market data, while implementing robust 
                            authentication using HMAC-SHA256 signatures for secure communications.
                        </p>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Core Features
                        </h4>
                        <ul>
                            <li><strong>Secure API Integration:</strong> HMAC-SHA256 authentication for secure Binance API communication</li>
                            <li><strong>Real-time Data Processing:</strong> Live market data streaming and analysis</li>
                            <li><strong>Automated Trading:</strong> Support for market and limit orders with automated execution</li>
                            <li><strong>Portfolio Management:</strong> Comprehensive tracking and management of trading positions</li>
                            <li><strong>Custom Algorithms:</strong> Extensible framework for implementing custom trading strategies</li>
                            <li><strong>Backtesting Capabilities:</strong> Historical data analysis for strategy validation</li>
                        </ul>
                    </div>
                
                    <div style={{ 
                        textAlign: 'center', 
                        margin: '2rem 0', 
                        padding: '2rem',
                        background: 'linear-gradient(135deg, rgba(243, 218, 223, 0.05) 0%, rgba(241, 145, 109, 0.05) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(243, 218, 223, 0.1)',
                        backdropFilter: 'blur(5px)'
                    }}>
                        <h3 style={{ color: '#F1916D', marginBottom: '1rem', fontSize: '1.3rem' }}>
                            Development Status
                        </h3>
                        <p style={{ color: '#F3DADF', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            This project is currently in active development. The foundation is complete with secure API integration 
                            and core trading functionality implemented. Future development will focus on enhanced market analysis tools, 
                            mobile notifications, and comprehensive reporting features for regulatory compliance and performance tracking.
                        </p>
                    </div>

                    <div className="project-text"> 
                        <h4 style={{ color: '#F3DADF', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Future Development Plans
                        </h4>
                        <ul>
                            <li><strong>Enhanced Market Analysis:</strong> Advanced technical indicators and charting capabilities</li>
                            <li><strong>Mobile Notifications:</strong> Real-time alerts for price movements and trade executions</li>
                            <li><strong>Multi-Exchange Support:</strong> Integration with additional cryptocurrency exchanges</li>
                            <li><strong>Regulatory Compliance:</strong> Comprehensive reporting for tax and regulatory requirements</li>
                            <li><strong>Performance Tracking:</strong> Detailed analytics and performance metrics dashboard</li>
                            <li><strong>Risk Management:</strong> Advanced risk assessment and portfolio protection features</li>
                        </ul>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Technical Architecture
                        </h4>
                        <p>
                            The platform is designed to be highly extensible, allowing for implementation of custom trading algorithms, 
                            backtesting capabilities, and multi-exchange support. The modular architecture ensures scalability and 
                            maintainability as the platform grows in complexity and features.
                        </p>
                        
                        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                            This project showcases expertise in financial technology, API integration, real-time systems, and 
                            secure software development practices essential for fintech applications.
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
                        }}>API Integration</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Cryptocurrency</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Real-time Data</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>HMAC-SHA256</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Automated Trading</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Fintech</span>
                    </div>
                </div>

                <a
                    href="https://github.com/odbprojects/crypto_bot"
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

export default Project5
  