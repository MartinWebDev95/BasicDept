import styles from './CustomCursor.module.css';

const CustomCursor = ({ cursorRef, isPressed }) => {
  return (
    <button 
      type="button" 
      ref={cursorRef}
      aria-pressed={isPressed}
      className={styles.cursor}
    >
      Drag
    </button>
  )
}

export default CustomCursor