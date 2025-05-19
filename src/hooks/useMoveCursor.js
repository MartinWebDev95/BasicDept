import { useRef, useState } from "react";

let cursorSize = 0;
let coordX = 0;

const useMoveCursor = () => {
  const [isPressed, setIsPressed] = useState(false);

  const cursorRef = useRef(null);
  const carouselRef = useRef(null);
  const startX = useRef(0);
  const scrollStartRef = useRef(0);

  const handleMouseEnter = () => {
    cursorSize = cursorRef.current.offsetWidth;
  }

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // const mouseX = e.clientX - (cursorSize * 2);
    // const mouseY = e.clientY - (cursorSize * 2);

    cursorRef.current.style.transition = 'none';
    cursorRef.current.style.transform = `translate3d(${mouseX - (cursorSize * 2)}px, ${mouseY - (cursorSize * 2)}px, 0)`;

    // console.log({mouseX: mouseX + cursorSize, coordX});
    // if(isPressed && (mouseX >= coordX)){
      
    //   carouselRef.current.style.transition = 'all .3s linear';
    //   carouselRef.current.scrollLeft -= `${mouseX - coordX}`;
    // }

    // if(isPressed && (mouseX <= coordX)){
      
    //   // console.log({mouseX, coordX});
    //   carouselRef.current.style.transition = 'all .3s linear';
    //   carouselRef.current.scrollLeft += `${coordX - mouseX}`;
    // }
    if(isPressed){
      // const deltaX = previousX.current - mouseX;
      // console.log({previousX: previousX.current, mouseX, deltaX});
      // carouselRef.current.scrollLeft += deltaX;
      const walk = mouseX - startX.current; // how far the mouse has moved
      carouselRef.current.scrollLeft = scrollStartRef.current - walk; // scroll the element
      console.log({mouseX, startX: startX.current, scrollStart: scrollStartRef.current, walk});
    }

    // previousX.current = mouseX;
  }
  
  const handleMouseLeave = () => {
    cursorRef.current.style.transition = 'all .1s linear';
    cursorRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    setIsPressed(false);
  }
  
  const handleMouseDown = (e) => {
    setIsPressed(true);
    // coordX = e.clientX;
    // console.log(coordX);
    // cursorSize = cursorRef.current.offsetWidth;
    // previousX.current = e.clientX;
    startX.current = e.clientX;
    scrollStartRef.current = carouselRef.current.scrollLeft;
  }
  
  const handleMouseUp = () => {
    setIsPressed(false);
  }

  return {
    cursorRef,
    carouselRef,
    isPressed,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
  }
}

export default useMoveCursor;