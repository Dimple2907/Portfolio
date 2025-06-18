import React from 'react';
import { useState, useEffect } from 'react';

function SimpleType({ texts = ["MERN Stack Developer"] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];
    
    if (isTyping) {
      if (displayText.length < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        setCurrentTextIndex((current) => (current + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTextIndex, texts]);

  return (
    <span className="simple-type" style={{ color: '#c770f0' }}>
      {displayText}
      <span className="cursor" style={{ color: '#c770f0' }}>|</span>
    </span>
  );
}

export default SimpleType;
