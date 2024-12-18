import React from "react";
import "../index.css";
import "./Section.css";

const AboutMe =()=> {
    return (
        <div className="about-me-container">
          {/* Card 1 - Image with Photostrip */}

          <div className="card image-card">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Photostrip"
              className="image"
            />
            <div className="photo-strip">
              <img src="https://via.placeholder.com/100" alt="Smiling Face 1" />
              <img src="https://via.placeholder.com/100" alt="Smiling Face 2" />
              <img src="https://via.placeholder.com/100" alt="Smiling Face 3" />
            </div>
          </div>
    
          {/* Card 2 - Image with Text Overlay */}
          <div className="card image-overlay-card">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Backyard"
              className="image"
            />
            <div className="overlay-text">
              <p>FAVORITE PLACE TO WORK FROM</p>
              <h3>Backyard at home in Šmrika</h3>
            </div>
          </div>
    
          {/* Card 3 - Styled Text Card */}
          <div className="card text-card">
            <p className="highlighted-text">
              <strong>I should definitely mention that I’m an optimist.</strong> I
              like mixing cocktails and music. I guess that makes me an optimistic
              mixologist.
            </p>
          </div>
    
          {/* Card 4 - Ticket-Like Travel Card */}
          <div className="card ticket-card">
            <div className="ticket-header">
              <div>
                <p>RIJ</p>
                <span>RIJEKA, CROATIA</span>
              </div>
              <div className="ticket-icon">✈</div>
              <div>
                <p>BER</p>
                <span>BERLIN, GERMANY</span>
              </div>
            </div>
            <hr />
            <div className="ticket-footer">
              <p>
                STATUS <br />
                <strong>CURRENTLY IN CROATIA</strong>
              </p>
              <p>
                SEAT <br />
                <strong>AT THE BEACH</strong>
              </p>
            </div>
          </div>
        </div>
      );
}

export default AboutMe;