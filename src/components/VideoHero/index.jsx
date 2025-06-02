import formatTime from "../../helpers/formatTime";
import styles from "./VideoHero.module.css";
import useVideoPlayer from "../../hooks/useVideoPlayer";

const VideoHero = () => {

  const { 
    isVideoHidden, 
    duration, 
    currentTime, 
    videoRef, 
    overlayRef, 
    containerRef,
    handlePlay,
    handlePause,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp 
  } = useVideoPlayer();

  return (
    <>
      <video 
        preload='auto' 
        src="/assets/hero_video_trailer.mp4"
        autoPlay 
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className={styles.trailer}
        onClick={handlePlay} 
      >
      </video>

      <div className={styles.video_container} aria-hidden={isVideoHidden}>
        <video 
          ref={videoRef}
          preload='auto' 
          src="/assets/hero_video.mp4"
          autoPlay 
          className={styles.video} 
          onClick={handlePause}
        >
        </video>

        <div ref={containerRef} className={styles.video_overlay}>
          <p 
            ref={overlayRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            {`${formatTime(currentTime)}/${formatTime(duration)}`}
          </p>
        </div>
      </div>
    </>
  )
}

export default VideoHero;