import React, { useEffect, useRef, useState } from 'react';
import { ArtData, artCollection } from '../../data/library';

const GalleryScroll: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Use all images with thumbnails from the library
  const allImages = React.useMemo(() => 
    artCollection.filter(art => art.thumbUrl), 
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    const gallery = galleryRef.current;
    if (!container || !gallery) return;

    let animationFrameId: number;
    const scrollSpeed = 2; // Faster scroll speed

    const autoScroll = () => {
      // Calculate max scroll
      const maxScroll = Math.max(0, gallery.scrollHeight - container.clientHeight);
      
      // Increment scroll position
      const newScrollPosition = (scrollPosition + scrollSpeed) % maxScroll;
      
      setScrollPosition(newScrollPosition);

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scrolling
    animationFrameId = requestAnimationFrame(autoScroll);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollPosition]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div 
        ref={galleryRef}
        className="absolute w-full grid grid-cols-3 gap-1"
        style={{ 
          transform: `translateY(-${scrollPosition}px)`,
          transition: 'transform 0.05s linear'
        }}
      >
        {allImages.map((art: ArtData) => (
          <div 
            key={art.id} 
            className="w-full aspect-square overflow-hidden"
          >
            <img 
              src={art.thumbUrl} 
              alt={art.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryScroll;