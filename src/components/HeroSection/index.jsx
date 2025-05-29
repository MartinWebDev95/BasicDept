import { useRef } from 'react';
import VideoCursor from '../VideoCursor';
import VideoHero from '../VideoHero';
import styles from './HeroSection.module.css';
import useMoveCursor from '../../hooks/useMoveCursor';

const HeroSection = () => {
  const sectionRef = useRef();

  const { 
    cursorRef, 
    handleMouseEnter, 
    handleMouseMove, 
    handleMouseLeave 
  } = useMoveCursor({ parentRef: sectionRef });

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id='section_hero'
      className={styles.hero_section}
    >
      <VideoCursor cursorRef={cursorRef} />

      <VideoHero />
    </section>
  )
}

export default HeroSection;