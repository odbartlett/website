import React from "react";
import "../../index.css";
import "./Projects.css";



import Header from "../Components/header"
import cacheImage from "../../assets/cache.png";


function Project3() {

    return (
      <>
        <Header />

        <h1>
            Cache Simulator
            <div className="h1-special">
                Mimic and test the effeciency of different combinations of cache types.
            </div>
        </h1>

        <div className="line"/>

        <div className="project-display-container">
            <div className="project-content">
                <div className="project-text">This cache simulator, written in C++, models 
                    a variety of caching strategies to analyze and evaluate performance. The 
                    core of the simulation is a Cache class, which utilizes a vector of vectors 
                    to represent the cache structure. The outer vector represents the cache sets, 
                    and the inner vectors simulate associative caching. Depending on their size, 
                    these vectors can represent different caching strategies, such as directly mapped, 
                    n-way associative, or fully associative caches. The class includes configurable options 
                    for cache parameters such as the number of sets, blocks per set, bytes per block, and policies
                     like write-allocate vs. no-write-allocate, write-back vs. write-through, and FIFO vs. LRU replacement. 
                     The Cache class also maintains detailed performance metrics, including load and store hits and misses, 
                     total cycles, and current time. Each block within the cache is represented as a Block struct, containing 
                     fields for tag, validity, dirtiness, and access time for LRU policies. Simulated memory operations, such 
                     as loading and storing, are subject to realistic latency calculations, ensuring accurate performance modeling. 
                     The simulator operates via a command-line interface, allowing users to specify cache configurations and input 
                     trace files for testing. This program provides a comprehensive tool for understanding and evaluating the behavior
                      of modern cache systems under various conditions.
                </div>
            
            <img src={cacheImage} alt="Project Preview" className="project-image"/>
        </div>
            <a
            href="https://github.com/odbprojects/cache-simulator"
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
  
  export default Project3
  