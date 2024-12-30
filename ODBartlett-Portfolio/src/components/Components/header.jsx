import React from "react";
import { useState } from "react";
import "../../index.css"

const headerStyles = {
    container: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '60px',
        borderBottomRadius: '10px',
        borderColor: '#F1916D',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px 0 0 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: '1000'
    },

    left: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingLeft: '20px',
        color: '#F1916D',
        transition: 'transform 0.3s ease, filter 0.3s ease',
    },

    right: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingRight: '20px'
    },

    leftHover: {
        transform: 'scale(1.2)',
        filter: 'drop-shadow(0 0 0.75em #F1916D)',
    }

}


function Header() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div style = {headerStyles.container}>
            <a href="/">
            <div style={{...headerStyles.left, ...(isHovered ? headerStyles.leftHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                Owen Bartlett
            </div>
            </a>
            <div style={headerStyles.right}>
                odbartlett1@gmail.com
            </div>
        </div>
    );
}  
export default Header;