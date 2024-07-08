import { useRef, useState } from "react";

let cursorSize = 0;

const useMoveCursor = () => {
  const [isPressed, setIsPressed] = useState(false);

  const cursorRef = useRef(null);

  const handleMouseEnter = () => {
    cursorSize = cursorRef.current.offsetWidth;
  }

  const handleMouseMove = (e) => {
    const mouseX = (e.clientX - 96) - (cursorSize + (cursorSize / 2));
    const mouseY = e.clientY - (cursorSize + (cursorSize / 2));
    
    cursorRef.current.style.transition = 'none';
    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }
  
  const handleMouseLeave = () => {
    cursorRef.current.style.transition = 'all .1s linear';
    cursorRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    setIsPressed(false);
  }
  
  const handleMouseDown = () => {
    setIsPressed(true);
    cursorSize = cursorRef.current.offsetWidth;
  }
  
  const handleMouseUp = () => {
    setIsPressed(false);
  }

  return {
    cursorRef,
    isPressed,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
  }
}

export default useMoveCursor;