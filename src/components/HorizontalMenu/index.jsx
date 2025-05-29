import { useRef } from 'react'
import useMoveCursor from '../../hooks/useMoveCursor'
import getDataHorizontalMenu from '../../utils/getDataHorizontalMenu'
import CustomCursor from '../CustomCursor'
import { ArrowIcon } from '../Navigation'
import styles from './HorizontalMenu.module.css'

const HorizontalMenu = ({ isHorizontalMenuHidden, handleHorizontalMenu }) => {

  const carouselRef = useRef();

  const { 
    cursorRef,
    isPressed, 
    handleMouseEnter, 
    handleMouseMove, 
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp, 
  } = useMoveCursor({ parentRef: carouselRef });

  return (
    <div className={styles.horizontal_menu} aria-hidden={isHorizontalMenuHidden}>
      <div className={styles.first_row}>
        <button
          type='button'
          className={styles.horizontal_menu_btn_mobile}
          onClick={handleHorizontalMenu}
        >
          <ArrowIcon />
        </button>

        <div aria-hidden={isHorizontalMenuHidden}>
          <div className={styles.dot}></div>
          
          <p>(5) Internal Works <br/> &copy;24 <small>c/o</small> BASIC/DEPT®</p>
          
          <p>A collection of internal project and initiatives under the BASIC/DEPT® brand.</p>
        </div>

        <button 
          type='button'
          className={styles.horizontal_menu_btn} 
          id='horizontal_menu_btn_close'
          data-menu-hidden={isHorizontalMenuHidden}
          onClick={handleHorizontalMenu}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div 
        className={styles.carousel} 
        aria-hidden={isHorizontalMenuHidden}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <ol ref={carouselRef} className={styles.carousel_list}>
          {getDataHorizontalMenu.map((item) => (
            <li key={item.id} className={styles.carousel_item}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className={styles.info}>
                <div>
                  <p>{item.title}</p>
                  <p>{`©${item.year}`}</p>
                </div>

                <p className={styles.subtitle}>{item.subtitle}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        
        <CustomCursor cursorRef={cursorRef} isPressed={isPressed} type="menu" />
      </div>

      <div className={styles.footer} aria-hidden={isHorizontalMenuHidden}>
        <p>BASIC/DEPT®, INC</p>
        <p>10 - 24&copy;</p>
      </div>
    </div>
  )
}

export default HorizontalMenu