import { useRef } from "react";
import useMoveCursor from "../../hooks/useMoveCursor";
import getDataBrandFeatures from "../../utils/getDataBrandFeatures";
import CustomCursor from "../CustomCursor";
import styles from './FeaturesBrandCarousel.module.css';

const FeaturesBrandCarousel = () => {

  const barRef = useRef();
  const progressbarRef = useRef();
  
  const { 
    cursorRef,
    carouselRef,
    isPressed, 
    handleMouseEnter, 
    handleMouseMove, 
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp, 
  } = useMoveCursor();

  const handleScroll = (e) => {
    const carousel = carouselRef.current;
    const bar = barRef.current;
    const progressbar = progressbarRef.current;

    const scrollLeft = carousel.scrollLeft;
    const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

    const barWidth = bar.offsetWidth;
    const progressbarWidth = progressbar.offsetWidth;

    const maxTranslate = barWidth - progressbarWidth;

    const scrollPercentage = scrollLeft / maxScrollLeft;
    const translateX = scrollPercentage * maxTranslate;

    progressbar.style.left = `${translateX}px`;
  }

  return (
    <>
      <div 
        className={styles.carousel} 
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <ol ref={carouselRef} className={styles.carousel_list} onScroll={handleScroll}>
          {getDataBrandFeatures.map((item) => (
            <li key={item.id} className={styles.carousel_item}>
              <div className={styles.img_container}>
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className={styles.info}>
                <h2>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        
        <CustomCursor cursorRef={cursorRef} isPressed={isPressed} type="carousel" />
      </div>

      <div ref={barRef} className={styles.carousel_progress}>
        <span ref={progressbarRef} className={styles.carousel_progressbar}></span>
      </div>
    </>
  )
}

export default FeaturesBrandCarousel;

