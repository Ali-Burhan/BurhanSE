import React, { useEffect, useState } from 'react';
import './TypingAnimation.css'; // Create this CSS file to style the animation

const TypingAnimation = ({ text, speed }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIsTyping(prev => prev && currentIndex < text.length);
      setCurrentText(text.substring(0, currentIndex));
      setCurrentIndex(prev => (isTyping ? prev + 1 : prev));
    }, speed);

    return () => clearInterval(typingInterval);
  }, [speed, text, currentIndex, isTyping]);

  return (
    <div className="typing-animation">
      <span className="typing-text">{currentText}</span>
      {isTyping && <span className="blink-caret">&#9646;</span>}
    </div>
  );
};

export default TypingAnimation;
