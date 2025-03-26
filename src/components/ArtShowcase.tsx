// src/pages/ArtShowcase.tsx

import React, { useState, useRef } from "react";
import { ArtData, MediaItem } from "../data/library";

interface ArtDisplayProps {
  art: ArtData;
}

const ArtShowcase: React.FC<ArtDisplayProps> = ({ art }) => {
  const { id } = art;
  const isEven = Number(id) % 2 === 0;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {isEven ? (
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="md:w-1/2">
            <DetailsDisplay art={art} />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
          <MediaDisplay art={art} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <MediaDisplay art={art} />
          <DetailsDisplay art={art} />
        </div>
      )}
    </div>
  );
};

interface MediaDisplayProps {
  art: ArtData;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ art }) => {
  // If mediaItems exists and has items, display the slider with thumbnails and caption.
  if (art.mediaItems && art.mediaItems.length > 0) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
      <div>
        <MediaSlider
          items={art.mediaItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {art.mediaItems.length > 1 && (
          <MediaThumbnailList
            items={art.mediaItems}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        {art.mediaItems[currentIndex].caption && (
          <p className="caption text-center mt-2 text-sm text-gray-600">
            {art.mediaItems[currentIndex].caption}
          </p>
        )}
      </div>
    );
  }

  // Fallback: use thumbUrl instead of legacy videoUrl/imageUrl/audioUrl.
  if (art.thumbUrl) {
    return (
      <img
        src={art.thumbUrl}
        alt={art.title}
        className="w-full h-auto object-cover rounded-sm"
      />
    );
  }

  return null;
};

interface MediaSliderProps {
  items: MediaItem[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MediaSlider: React.FC<MediaSliderProps> = ({
  items,
  currentIndex,
  setCurrentIndex,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const swipeThreshold = 50; // minimum distance in pixels for a swipe

  const handlePrev = () => {
    setCurrentIndex((prev: number) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev: number) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > swipeThreshold
    ) {
      // Only support horizontal swiping in one direction
      if (touchStartX.current > touchEndX.current) {
        // Swiped left
        handleNext();
      } else {
        // Swiped right
        handlePrev();
      }
    }
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem = items[currentIndex];

  return (
    <div
      className="relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-full h-auto rounded-sm">
        {currentItem.type === "video" ? (
          <video controls className="w-full h-auto rounded-sm">
            <source src={currentItem.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : currentItem.type === "audio" ? (
          <audio controls className="w-full">
            <source src={currentItem.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <img
            src={currentItem.url}
            alt={currentItem.alt || "Art image"}
            className="w-full h-auto object-cover rounded-sm"
          />
        )}
      </div>
      {items.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-r opacity-75 hover:opacity-100"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-l opacity-75 hover:opacity-100"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

interface MediaThumbnailListProps {
  items: MediaItem[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MediaThumbnailList: React.FC<MediaThumbnailListProps> = ({
  items,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer border ${
            index === currentIndex ? "border-blue-500" : "border-transparent"
          } rounded-sm overflow-hidden`}
          onClick={() => setCurrentIndex(index)}
        >
          <img
            src={item.url}
            alt={item.alt || "thumbnail"}
            className="w-full h-20 object-cover"
          />
          {item.caption && (
            <p className="text-xs text-center mt-1 text-gray-500">
              {item.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

interface DetailsDisplayProps {
  art: ArtData;
}

const DetailsDisplay: React.FC<DetailsDisplayProps> = ({ art }) => {
  const { title, subtitle, description, extraInfo, externalLink, saleInfo } = art;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-xl">{subtitle}</p>}
      <p className="text-base">{description}</p>
      {extraInfo && <p className="text-sm">{extraInfo}</p>}
      {externalLink && (
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Listen to the full track on Spotify
        </a>
      )}
      {saleInfo && saleInfo.isForSale && (
        <div className="mt-4 p-4 border rounded-sm">
          <p className="font-semibold">
            For Sale: {saleInfo.currency} {saleInfo.price}
          </p>
          {saleInfo.purchaseLink && (
            <a
              href={saleInfo.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Purchase Now
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ArtShowcase;
