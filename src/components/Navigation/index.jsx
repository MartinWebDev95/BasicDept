import { useState } from 'react';
import styles from './Navigation.module.css';
import HorizontalMenu from '../HorizontalMenu';

export const ArrowIcon = () => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  )
}

const Navigation = () => {

  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isHorizontalMenuHidden, setIsHorizontalMenuHidden] = useState(true);

  const handleHorizontalMenu = () => {
    if(window.innerWidth > 1200 && isHorizontalMenuHidden) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    
    if(window.innerWidth > 1200 && !isHorizontalMenuHidden) {
      document.querySelector('body').style.overflow = 'auto';
    }

    setIsHorizontalMenuHidden(!isHorizontalMenuHidden);
  }

  const handleMenu = () => {
    if(isMenuHidden) {
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('body').style.setProperty('--colorLogo', '#F9CDCD');
      document.querySelector('header').classList.remove('hide_header');
    } else {
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('body').style.setProperty('--colorLogo', '#fff');
    }

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
          <li className={styles.list_item}>
            <button type='button' onClick={handleHorizontalMenu}>
              Initiatives
              <ArrowIcon />
            </button>
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