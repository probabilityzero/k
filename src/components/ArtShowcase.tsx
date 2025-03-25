// components/ArtDisplay.tsx

import React, { useState } from "react";
import { ArtData, MediaItem } from "../data/library";

interface ArtDisplayProps {
  art: ArtData;
}

const ArtShowcase: React.FC<ArtDisplayProps> = ({ art }) => {
  const { id } = art;
  const isEven = Number(id) % 2 === 0;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {isEven ? (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <MediaDisplay art={art} />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <DetailsDisplay art={art} />
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
  // If mediaItems exists and has items, render slider
  if (art.mediaItems && art.mediaItems.length > 0) {
    return <MediaSlider items={art.mediaItems} />;
  }

  // Fallback to legacy fields:
  if (art.videoUrl) {
    return (
      <video controls className="w-full h-auto rounded-sm">
        <source src={art.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  if (art.imageUrl) {
    return (
      <img
        src={art.imageUrl}
        alt={art.title}
        className="w-full h-auto object-cover rounded-sm"
      />
    );
  }
  if (art.audioUrl) {
    return (
      <audio controls className="w-full">
        <source src={art.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  }

  return null;
};

interface MediaSliderProps {
  items: MediaItem[];
}

const MediaSlider: React.FC<MediaSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  const currentItem = items[currentIndex];

  return (
    <div className="relative">
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
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-r"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-l"
          >
            Next
          </button>
        </>
      )}
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
