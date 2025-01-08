import React from "react";
import "../../index.css";
import "./Projects.css";



import Header from "../Components/header"
import chessImage from "../../assets/chess.png";


function Project1() {

    return (
      <>
        <Header />

        <h1>
            Chess
            <div className="h1-special">
                A complete C++ implementation of the well known game.
            </div>
        </h1>

        <div className="line"/>

        <div className="project-display-container">
            <div className="project-content">
                <div className="project-text">The chess program is a sophisticated two-player application designed 
            entirely in C++ and built upon a complex class-based architecture. Each 
            component of the game, from the chessboard to the individual pieces, is 
            encapsulated in modular classes that emphasize object-oriented principles 
            such as inheritance, polymorphism, and encapsulation. The <strong>Board</strong> class manages 
            the overall state of the game, including the arrangement of pieces, while 
            specialized classes for each piece type—<strong>Pawn</strong>, <strong>Knight</strong>, <strong>Bishop</strong>, and so on—extend a 
            base <strong>Piece</strong> class, implementing unique movement logic and behavior. A robust <strong>Game</strong> class 
            orchestrates the turn-by-turn mechanics, validating moves through intricate algorithms 
            that consider rules like castling and check detection. This project demonstrates my understanding of object
            oriented programming and of the c++ language.
                </div>
            
            <img src={chessImage} alt="Project Preview" className="project-image"/>
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
  