import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header"
import chessImage from "../../assets/chess.png";

function Project1() {
    return (
        <>
            <Header />

            <div style={{ textAlign: 'left', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ marginBottom: '0.5rem' }}>
                    Chess
                </h1>
                <div className="h1-special">
                    A complete C++ implementation of the well known game with advanced object-oriented architecture.
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
                            The chess program is a sophisticated two-player application designed 
                            entirely in C++ and built upon a complex class-based architecture. Each 
                            component of the game, from the chessboard to the individual pieces, is 
                            encapsulated in modular classes that emphasize object-oriented principles 
                            such as inheritance, polymorphism, and encapsulation.
                        </p>
                        
                        <h4 style={{ color: '#F3DADF', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Architecture Highlights
                        </h4>
                        <ul>
                            <li><strong>Board Class:</strong> Manages the overall state of the game, including the arrangement of pieces</li>
                            <li><strong>Piece Hierarchy:</strong> Specialized classes for each piece type—<strong>Pawn</strong>, <strong>Knight</strong>, <strong>Bishop</strong>, <strong>Rook</strong>, <strong>Queen</strong>, and <strong>King</strong>—extend a base <strong>Piece</strong> class</li>
                            <li><strong>Game Engine:</strong> A robust <strong>Game</strong> class orchestrates turn-by-turn mechanics</li>
                            <li><strong>Move Validation:</strong> Intricate algorithms that consider rules like castling and check detection</li>
                        </ul>
                        
                        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                            This project demonstrates my deep understanding of object-oriented programming principles 
                            and mastery of the C++ language, showcasing clean code architecture and efficient problem-solving.
                        </p>
                    </div>
            
                    <img src={chessImage} alt="Chess Game Interface" className="project-image"/>
                    
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
                        }}>Object-Oriented Design</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Inheritance</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Polymorphism</span>
                        <span style={{
                            background: 'linear-gradient(135deg, #F1916D, #D7745A)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            boxShadow: '0 2px 8px rgba(241, 145, 109, 0.3)'
                        }}>Game Logic</span>
                    </div>
                </div>
                
                <a
                    href="https://github.com/odbprojects/chess"
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
  