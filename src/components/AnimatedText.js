import React, { useEffect, useRef, useState } from 'react';
import '../styles/AnimatedText.css';

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <span ref={ref} className={`animated-text ${isVisible ? 'visible' : ''} ${className}`}>
      {text}
    </span>
  );
};

export default AnimatedText;

