import React, { useEffect, useRef } from 'react';
import './AnimatedSection.css';

function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  animateOnce = false
}) {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-in');
            section.style.animationDelay = `${delay}s`;
            if (animateOnce) {
              hasAnimated.current = true;
            }
          } else if (!animateOnce || !hasAnimated.current) {
            section.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    section.setAttribute('data-direction', direction);
    observer.observe(section);

    return () => observer.unobserve(section);
  }, [delay, direction, animateOnce]);

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${className || ''}`}
      data-direction={direction}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
