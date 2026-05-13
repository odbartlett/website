import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";
import chessImage from "../../assets/chess.png";

const tags = ["C++", "Object-Oriented Design", "Inheritance", "Polymorphism", "Game Logic", "Encapsulation"];

function Project1() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          Chess Engine
        </h1>
        <div className="h1-special">
          A complete two-player C++ chess implementation built on a sophisticated class-based OOP architecture.
        </div>
      </div>

      <div className="line" />

      <div className="project-display-container">
        <div className="project-content">
          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Project Overview</h3>
            <p>
              A sophisticated two-player chess application designed entirely in C++ and built upon a complex
              class-based architecture. Each component — from the chessboard to individual pieces — is
              encapsulated in modular classes that emphasize OOP principles: inheritance, polymorphism,
              and encapsulation.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Architecture Highlights</h3>
            <ul>
              <li><strong>Board Class:</strong> Manages overall game state including piece arrangement and move history</li>
              <li><strong>Piece Hierarchy:</strong> Pawn, Knight, Bishop, Rook, Queen, and King all extend a base Piece class via polymorphism</li>
              <li><strong>Game Engine:</strong> A robust Game class orchestrates turn-by-turn mechanics and game state transitions</li>
              <li><strong>Move Validation:</strong> Intricate algorithms covering castling, en passant, promotion, and check detection</li>
              <li><strong>Check/Checkmate:</strong> Full detection of check, checkmate, and stalemate conditions</li>
            </ul>
          </div>

          <img src={chessImage} alt="Chess Game Interface" className="project-image" />

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://github.com/odbprojects/chess" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub ↗
        </a>
      </div>
    </>
  );
}

export default Project1;
