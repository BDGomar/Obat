import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const startValue = 0;
          const endValue = parseInt(end.replace(/\D/g, '')) || 0;

          const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startValue + (endValue - startValue) * easeOut);
            
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          animate();
          observerRef.current.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  const displayValue = end.includes('+') ? `${count}${suffix}+` : 
                      end.includes('%') ? `${count}${suffix}%` :
                      end.includes('HEC') ? 'HEC' :
                      `${count}${suffix}`;

  return <span ref={countRef}>{displayValue}</span>;
};

export default CountUp;

