import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './GuitarString.css';

export default function GuitarString() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    
    // Base straight line coordinate for 1000px viewBox
    const originalPath = "M 10 100 Q 500 100 990 100";
    
    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: originalPath },
        duration: 1.2,
        ease: "elastic.out(1, 0.2)"
      });
    };
    
    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate coordinates scaled to the 1000x200 viewBox
      const scaleX = 1000 / rect.width;
      const scaleY = 200 / rect.height;
      
      const svgX = x * scaleX;
      let svgY = y * scaleY;

      // Add a threshold max bending effect to prevent wild stretches
      if(svgY > 180) svgY = 180;
      if(svgY < 20) svgY = 20;
      
      const path = `M 10 100 Q ${svgX} ${svgY} 990 100`;
      
      gsap.to(pathRef.current, {
        attr: { d: path },
        duration: 0.1,
        ease: "power3.out"
      });
    };
    
    svg.addEventListener('mouseleave', handleMouseLeave);
    svg.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      svg.removeEventListener('mouseleave', handleMouseLeave);
      svg.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="string-container section container">
      <svg 
        className="guitar-string-svg"
        viewBox="0 0 1000 200" 
        ref={svgRef}
      >
        <path 
          ref={pathRef}
          d="M 10 100 Q 500 100 990 100" 
          stroke="var(--accent-color)" 
          strokeWidth="3" 
          fill="transparent" 
          strokeLinecap="round"
        />
      </svg>
      <p className="string-subtitle">Interact with me!</p>
    </div>
  );
}
