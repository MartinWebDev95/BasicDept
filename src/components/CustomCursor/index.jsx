import styles from './CustomCursor.module.css';

const CustomCursor = ({ cursorRef, isPressed, type }) => {
  return (
    <button 
      type="button" 
      ref={cursorRef}
      aria-pressed={isPressed}
      data-cursor={type}
      className={styles.cursor}
    >
      Drag
    </button>
  )
}

export default CustomCursor