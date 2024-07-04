import { useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [isPressed, setIsPressed] = useState(false);
  const cursorRef = useRef();

  return (
    <button 
      type="button" 
      ref={cursorRef}
      aria-pressed={isPressed}
      className={styles.cursor}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      Drag
    </button>
  )
}

export default CustomCursor