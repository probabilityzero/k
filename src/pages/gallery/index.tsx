import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArtData, artCollection } from '../../data/library';

const GalleryScroll: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Prepare images with additional randomized properties
  const imageGrid = useMemo(() => {
    return artCollection
      .filter(art => art.thumbUrl)
      .map(art => ({
        ...art,
        scrollSpeed: 1 + Math.random() * 3, // Varied scroll speeds
        blur: Math.random() > 0.7 ? `blur(${5 + Math.random() * 10}px)` : 'blur(0px)', // Random blur
        scale: 0.8 + Math.random() * 0.4, // Varied scales
        opacity: 0.6 + Math.random() * 0.4, // Varied opacity
        offset: Math.random() * 200 - 100 // Horizontal offset
      }))
      .sort(() => Math.random() - 0.5); // Randomize order
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const gallery = galleryRef.current;
    if (!container || !gallery) return;

    let animationFrameId: number;

    const autoScroll = () => {
      // Calculate max scroll
      const maxScroll = Math.max(0, gallery.scrollHeight - container.clientHeight);
      
      // Increment scroll position with varied speeds
      const newScrollPosition = (scrollPosition + 1.5) % maxScroll;
      
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
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div 
        ref={galleryRef}
        className="absolute w-full grid grid-cols-3 gap-1 md:gap-2 lg:gap-4"
        style={{ 
          transform: `translateY(-${scrollPosition}px)`,
          transition: 'transform 0.05s linear'
        }}
      >
        {imageGrid.map((art, index) => (
          <div 
            key={art.id} 
            className="w-full aspect-square relative overflow-hidden"
            style={{
              transform: `
                scale(${art.scale}) 
                translateX(${art.offset}px)
              `,
              opacity: art.opacity,
              zIndex: index
            }}
          >
            <img 
              src={art.thumbUrl} 
              alt={art.title}
              className="w-full h-full object-cover transition-all duration-300"
              style={{
                filter: art.blur,
                transform: `translateY(${Math.sin(index) * 50}px)` // Subtle wave effect
              }}
            />
          </div>
        ))}
      </div>
      {/* Overlay effects for multiversal feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 mix-blend-overlay" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-indigo-900 to-black" />
      </div>
    </div>
  );
};

export default GalleryScroll;