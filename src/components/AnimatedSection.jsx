import React, { useEffect, useRef, useState } from 'react';
import './AnimatedSection.css';

function AnimatedSection({ 
  children, 
  className, 
  direction = 'up', 
  delay = 0, 
  animateOnce = false 
}) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-in');
            section.style.animationDelay = `${delay}s`;
            
            // If this is set to animate only once, track that it has animated
            if (animateOnce) {
              setHasAnimated(true);
            }
          } else {
            // Only remove animation class if not set to animate once
            // or if it hasn't animated yet
            if (!animateOnce || !hasAnimated) {
              section.classList.remove('animate-in');
            }
          }
        });
      },
      { 
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px' // No margin
      }
    );
    
    if (section) {
      observer.observe(section);
      section.setAttribute('data-direction', direction);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [delay, direction, animateOnce, hasAnimated]);
  
  return (
    <div 
      ref={sectionRef} 
      className={`animated-section ${className || ''}`}
      data-direction={direction}
      data-animate-once={animateOnce ? 'true' : 'false'}
    >
      {children}
    </div>
  );
}

export default AnimatedSection; 