import React from "react";
import { useState } from "react";
import "../../index.css"

const headerStyles = {
    container: {
        position: 'absolute',
        left: '0',
        paddingTop: '10px',
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },

    left: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingLeft: '20px',
        color: '#F1916D',
    },

    right: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingRight: '20px',
        transition: 'transform 0.3s ease, filter 0.3s ease',
        cursor: 'pointer',
    },

    leftHover: {
        transform: 'scale(1.2)',
        filter: 'drop-shadow(0 0 0.75em #F1916D)',
    }

}


function Footer() {
    const [isHovered, setIsHovered] = useState(false);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return (
        <div style = {headerStyles.container}>
            <div style={headerStyles.left}>
                Thanks for Visiting!
            </div>


            <div style={{...headerStyles.right, ...(isHovered ? headerStyles.leftHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToTop}
            > 
                Back To Top
            </div>
            
        </div>
    );
}  

export default Footer;
