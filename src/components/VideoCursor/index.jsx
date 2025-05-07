import styles from './VideoCursor.module.css';

const VideoCursor = ({ cursorRef }) => {

  return (
    <button 
      type='button'
      ref={cursorRef}
      className={styles.cursor}
    >
      <span className={styles.cursor_circle}>
        Watch <br/> Reel
      </span>

      <span className={styles.cursor_text}>
        BASIC/DEPT&copy; <br /> 2010
      </span>
    </button>
  )
}

export default VideoCursor;