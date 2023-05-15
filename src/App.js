import React, {useState} from 'react';
//import Animator from './components/animator';
import './App.css';
//<Animator />;




const App = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isHoveredButtonLeft, setIsHoveredButtonLeft] = useState(false);
  const [isHoveredButtonRight, setIsHoveredButtonRight] = useState(false);

  const handleMouseOverLeft = () => {
    setIsHoveredLeft(true);
    setIsHoveredButtonLeft(true);
  };

  const handleMouseOverRight = () => {
    setIsHoveredRight(true);
    setIsHoveredButtonRight(true);
  };

  const handleMouseOutLeft = () => {
    setIsHoveredLeft(false);
    setIsHoveredButtonLeft(false);
  };

  const handleMouseOutRight = () => {
    setIsHoveredRight(false);
    setIsHoveredButtonRight(false);
  };

  


  return (
    <div>
      <div
        onMouseOver={handleMouseOverLeft}
        onMouseOut={handleMouseOutLeft}
        className={`split left ${isHoveredLeft ? "hover-left" : ""}`}
      >
        <h1>Playstation 5</h1>
        <a
          href="#PlayStation"
          className={`btn ${isHoveredButtonLeft ? "left-hover" : ""}`}
        >
          Buy Now
        </a>
      </div>
      <div
        onMouseOver={handleMouseOverRight}
        onMouseOut={handleMouseOutRight}
        className={`split right ${isHoveredRight ? "hover-right" : ""}`}
      >
        <h1>Xbox Series X</h1>
        <a
          href="#Xbox"
          className={`btn ${isHoveredButtonRight ? "right-hover" : ""}`}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default App;

