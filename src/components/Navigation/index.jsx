import { useState } from 'react';
import styles from './Navigation.module.css';
import HorizontalMenu from '../HorizontalMenu';

const Navigation = () => {

  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isHorizontalMenuHidden, setIsHorizontalMenuHidden] = useState(true);

  const handleHorizontalMenu = () => {
    setIsHorizontalMenuHidden(!isHorizontalMenuHidden);
  }

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

        <div className={styles.footer}>
          <p>Basic/Dept&copy;, INC</p>
          <p>10 - 24&copy;</p>
        </div>

        <HorizontalMenu 
          isHorizontalMenuHidden={isHorizontalMenuHidden} 
          handleHorizontalMenu={handleHorizontalMenu}
        />
      </nav>

      <button 
        className={styles.horizontal_menu_btn} 
        data-menu-hidden={isHorizontalMenuHidden}
        onClick={handleHorizontalMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    
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