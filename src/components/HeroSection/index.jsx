import { useRef } from 'react';
import VideoCursor from '../VideoCursor';
import VideoHero from '../VideoHero';
import styles from './HeroSection.module.css';

let cursorSize = 0;
let sectionWidth = 0;
let sectionHeight = 0;

const HeroSection = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  const handleMouseEnter = () => {
    cursorSize = cursorRef.current.offsetWidth;
    sectionWidth = sectionRef.current.offsetWidth;
    sectionHeight = sectionRef.current.offsetHeight;
  }

  const handleMouseMove = (e) => {
    const mouseX = e.clientX - (sectionWidth / 2) - (cursorSize / 2);
    const mouseY = e.clientY - (sectionHeight / 2) - (cursorSize / 2);

    cursorRef.current.style.transition = 'none';
    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }

  const handleMouseLeave = () => {
    cursorRef.current.style.transition = 'all 0.3s ease';
    cursorRef.current.style.transform = `translate3d(-50%, -50%, 0)`;
  }

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