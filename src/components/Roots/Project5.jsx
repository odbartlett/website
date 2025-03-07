import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";

// Note: You'll need to import the image for the crypto trading app
// import cryptoImage from "path/to/your/crypto-image";

function Project5() {
    return (
        <>
            <Header />

            <h1>
                Cryptocurrency Trading Platform
                <div className="h1-special">
                    A comprehensive trading application interfacing with the Binance exchange API
                </div>
            </h1>

            <div className="line"/>

            <div className="project-display-container">
                <div className="project-content">
                    <div className="project-text">
                        This cryptocurrency trading platform demonstrates advanced software engineering
                        capabilities in financial technology, including secure API integration, real-time
                        data processing, and automated trading systems. The application leverages the
                        Binance API for executing trades, managing orders, and accessing market data,
                        while implementing robust authentication using HMAC-SHA256 signatures for
                        secure communications.
                    </div>
                
                    <img src={cryptoImage} alt="Crypto Trading Platform Preview" className="project-image"/>

                    <div className="project-text"> 
                        The platform supports various trading functionalities including market and limit
                        orders, automated trading strategies, and portfolio management. Key features
                        include technical analysis capabilities with indicators like MACD and Bollinger
                        Bands, real-time market data processing, and risk management systems. The
                        application is designed to be extensible, allowing for implementation of custom
                        trading algorithms, backtesting capabilities, and multi-exchange support.
                        Future development plans include enhanced market analysis tools, mobile
                        notifications, and comprehensive reporting features for regulatory compliance
                        and performance tracking.
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
  