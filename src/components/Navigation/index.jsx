import { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {

  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  }

  return (
    <>
      <nav className={styles.navigation} aria-hidden={isMenuHidden}>
        <ul className={styles.navigation_list}>
          <li className={styles.list_item}>
            <a href="#">Work</a>
          </li>
          <li className={styles.list_item}>
            <a href="#">About</a>
          </li>
          <li className={styles.list_item}>
            <a href="#">News</a>
          </li>
          <li className={styles.list_item}>
            <a href="#">Thinking</a>
          </li>
          <li className={styles.list_item}>
            <a href="#">Careers</a>
          </li>
          <li className={styles.list_item}>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div>
          <p>Basic/Dept&copy;, INC</p>
          <p>10 - 24&copy;</p>
        </div>
      </nav>
    
      <button 
        className={styles.menu_mobile} 
        data-menu-hidden={isMenuHidden} 
        onClick={handleMenu}
      >
        {isMenuHidden ? (
          'Menu'
        ) : (
          <>
            <span></span>
            <span></span>
          </>
        )}
      </button>
    </>
  )
}

export default Navigation