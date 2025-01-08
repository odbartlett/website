import React from "react";
import "../../index.css";
import "./Projects.css";



import Header from "../Components/header"
import keyImage from "../../assets/key_value.png";


function Project4() {

    return (
      <>
        <Header />

        <h1>
            Key/Value Store
            <div className="h1-special">
                A client-server model designed to store information in a key/value table.
            </div>
        </h1>

        <div className="line"/>

        <div className="project-display-container">
            <div className="project-content">
                <div className="project-text">This program demonstrates advanced software 
                    engineering skills, including proficiency in C programming, concurrent 
                    and multithreaded programming with tools like pthread_mutex, and a strong
                     understanding of client-server architecture. It also requires expertise in network 
                     programming using sockets for communication, data serialization and deserialization, 
                     and error handling to ensure robust and reliable operations. Furthermore, designing 
                     the transactional system with rollback mechanisms highlights knowledge of atomicity and 
                     concurrency control principles, essential for database-like operations.
                      
                </div>
            
                <img src={keyImage} alt="Project Preview" className="project-image"/>

                <div className="project-text"> 
                The program is a lightweight, distributed key-value storage system designed for 
                    efficient data operations in a multi-client environment. It consists of a server 
                    that listens for client requests and multiple clients capable of performing key-value 
                    operations, including retrieving (GET), setting (SET), and incrementing (INCR) values. 
                    It supports both atomic individual operations and transactional sequences to group multiple 
                    operations for consistency. The system is used in scenarios where lightweight, concurrent 
                    key-value storage is needed, such as caching systems, distributed applications, or learning 
                    environments for database transaction concepts. Its built-in error handling and concurrency 
                    management ensure it can operate reliably in high-demand situations.
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
  