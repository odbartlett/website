import React from "react";
import "../../index.css";
import "./AboutMe.css";
import headshot from "../../assets/headshot.jpeg";

const AboutMe =()=> {
    return (
        <div className="about-me-container">
          {/* Card 1 - Image with Photostrip */}
          <div className="card image-card">
          <img
              src={headshot}
              alt="Backyard"
              className="image"
            />
          </div>

          {/* Card 4 - Ticket-Like Travel Card */}
          <div className="card ticket-card">
            
              <div>
                <p>I am a sophmore computer science student at
                  Johns Hopkins University. My experience covers a vast
                  area of expertice, and is characterized by my ability to 
                  adapt to new challenges and learn new skills quickly. I am
                  a recruited college athelete for water polo and have worked with
                  teams of all shapes and sizes.
                </p>
              </div>
            
          </div>
    
          {/* Card 3 - Styled Text Card */}
          <div className="card text-card">
          <div className="hobbies-section">
            <h2>Hobbies</h2>
            <ul className="hobbies-list">
              <li>Surfing</li>
              <li>Skiing</li>
              <li>Working out (swimming)</li>
              <li>Music (listening to or playing the guitar)</li>
              <li>Watching TV</li>
            </ul>
          </div>
          </div>

          {/* Card 2 - Image with Text Overlay */}
          <div className="card image-overlay-card">
            <div className="overlay-text">
              <h3>Home: Newport Beach, CA</h3>
            </div>
          </div>
    
        </div>
      );
}

export default AboutMe;