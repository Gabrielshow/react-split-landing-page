import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import  './animator.css' ;

/*this implementation uses the react-transition-group to achieve the same thing with normal CSS*/
/*both the app component <App /> and the Animator <animator /> do the same thing but with different approaches*/
const Animator = () => {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isLeftButtonHovered, setIsLeftButtonHovered] = useState(false);
  const [isRightButtonHovered, setIsRightButtonHovered] = useState(false);

  const handleLeftMouseOver = () => {
    setIsLeftHovered(true);
    setIsLeftButtonHovered(true);
  };

  const handleLeftMouseOut = () => {
    setIsLeftHovered(false);
    setIsLeftButtonHovered(false);
  };

   const handleRightMouseOver = () => {
     setIsRightHovered(true);
     setIsRightButtonHovered(true);
   };

   const handleRightMouseOut = () => {
     setIsRightHovered(false);
     setIsRightButtonHovered(false);
   };

  return (
    <CSSTransition in={true} timeout={400} classNames="split-transition" appear>
      <div>
        <div
          onMouseOver={handleLeftMouseOver}
          onMouseOut={handleLeftMouseOut}
          className={`split left ${isLeftHovered ? "hover-left" : ""}
        `}
        >
          <h1>Playstation 5</h1>
          <a
            href="#PlayStation"
            className={`btn ${isLeftButtonHovered ? "left-btn-transition-enter-active" : ""}`}
          >
            Buy Now
          </a>
        </div>
        <div
          onMouseOver={handleRightMouseOver}
          onMouseOut={handleRightMouseOut}
          className={`split right ${isRightHovered ? "hover-right" : ""}`}
        >
          <h1>Xbox Series X</h1>
          <a
            href="#Xbox"
            className={`btn ${isRightButtonHovered ? "right-btn-transition-enter-active" : ""}`}
          >
            Buy Now
          </a>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Animator
