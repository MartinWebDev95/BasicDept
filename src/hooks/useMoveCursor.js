import { useEffect, useRef, useState } from "react";

let cursorSize = 0;

const useMoveCursor = ({ parentRef }) => {
  const [isPressed, setIsPressed] = useState(false);

  const cursorRef = useRef(null);
  const startX = useRef(0);
  const scrollStartRef = useRef(0);

  useEffect(() => {
    // Set the initial position of the custom cursor to the center of the parent element
    if (!parentRef.current || !cursorRef.current) return;
    
    const parentRect = parentRef.current.getBoundingClientRect();
    const positionX = (parentRect.width / 2) - (cursorSize / 2);
    const positionY = (parentRect.height / 2) - (cursorSize / 2);

    cursorRef.current.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
  }, []);

  const handleMouseEnter = () => {
    const cursorRect = cursorRef.current.getBoundingClientRect();
    cursorSize = cursorRect.width;
  }

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const parentRect = parentRef.current.getBoundingClientRect();

    // Calculate the position of the cursor relative to the parent element
    const relativeX = mouseX - parentRect.left;
    const relativeY = mouseY - parentRect.top;

    // Ensure the mouse is always in the middle of the cursor
    const offsetX = relativeX - (cursorSize / 2);
    const offsetY = relativeY - (cursorSize / 2);
    
    cursorRef.current.style.transition = 'none';
    cursorRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

    if(isPressed){
      // How far the mouse has moved
      const walk = mouseX - startX.current;

      // Scroll the element
      parentRef.current.scrollLeft = scrollStartRef.current - walk;
    }
  }
  
  const handleMouseLeave = () => {
    const parentRect = parentRef.current.getBoundingClientRect();

    // Reset the custom cursor position to the center of the parent element
    const positionX = (parentRect.width / 2) - (cursorSize / 2);
    const positionY = (parentRect.height / 2) - (cursorSize / 2);

    cursorRef.current.style.transition = 'transform .2s linear';
    cursorRef.current.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;

    setIsPressed(false);
  }
  
  const handleMouseDown = (e) => {
    setIsPressed(true);
    startX.current = e.clientX;
    scrollStartRef.current = parentRef.current.scrollLeft;
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