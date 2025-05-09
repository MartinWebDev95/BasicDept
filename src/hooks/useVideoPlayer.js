import { useEffect, useRef, useState } from "react";

const useVideoPlayer = () => {
  const [isVideoHidden, setIsVideoHidden] = useState(true);
  const [isPressed, setIsPressed] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  // Update the overlay position when the video is playing
  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;

    if (video) {
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        
        // Calculate the percentage of the video that has played and update the overlay position
        const percentage = (video.currentTime / video.duration) * 100;
        
        if(overlay){
          overlay.style.transform = `translateX(${percentage}%)`;
        }
      }

      video.addEventListener('timeupdate', handleTimeUpdate);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isVideoHidden]);

  const handlePlay = () => {
    setIsVideoHidden(false);
    
    const video = videoRef.current;

    if(!video) return;
    
    video.play();
    
    if(duration !== 0) return;

    setDuration(video.duration);
  }

  const handlePause = () => {
    const video = videoRef.current;
    
    if(!video) return;

    video.pause();
    
    setIsVideoHidden(true);
  }

  const handleMouseDown = () => {
    setIsPressed(true);
    
    const video = videoRef.current;
    const overlay = overlayRef.current;
    
    if(!video || !overlay) return;
    
    video.pause();

    overlay.style.cursor = 'grabbing';
  }

  const handleMouseMove = (e) => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const container = containerRef.current;

    if(!isPressed || !overlay || !video || !container) return;

    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + 50);
    const percentage = offsetX / rect.width;
    const newTime = percentage * video.duration;
    
    setCurrentTime(newTime);

    overlay.style.transition = 'none';
    overlay.style.transform = `translateX(${percentage * 100}%)`;
  }
  
  const handleMouseUp = () => {
    setIsPressed(false);
    
    const video = videoRef.current;
    const overlay = overlayRef.current;
    
    if(!video || !overlay) return;
    
    video.currentTime = currentTime;

    video.play();
    
    overlay.style.cursor = 'grab';
    overlay.style.transition = 'all 0.5s linear';
  }

  return {
    videoRef,
    overlayRef,
    containerRef,
    isVideoHidden,
    duration,
    currentTime,
    handlePlay,
    handlePause,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  };
}

export default useVideoPlayer;