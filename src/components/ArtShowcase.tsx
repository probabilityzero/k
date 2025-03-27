import React from "react";
import { ArtData } from "../data/library";

interface ArtDisplayProps {
  art: ArtData;
}

const ArtShowcase: React.FC<ArtDisplayProps> = ({ art }) => {
  const { id, mediaItems } = art;
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

      {/* Additional media grid: show if there are more than one media items */}
      {mediaItems && mediaItems.length > 1 && (
        <div
          id="additional-media"
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {mediaItems.slice(1).map((item, index) => (
            <div key={index} className="w-full h-auto rounded-sm">
              {item.type === "video" ? (
                <video controls className="w-full h-auto rounded-sm">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : item.type === "audio" ? (
                <audio controls className="w-full">
                  <source src={item.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <img
                  src={item.url}
                  alt={item.alt || "Art image"}
                  className="w-full h-auto object-cover rounded-sm"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface MediaDisplayProps {
  art: ArtData;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ art }) => {
  if (art.mediaItems && art.mediaItems.length > 0) {
    const mainItem = art.mediaItems[0];
    return (
      <div className="relative">
        <div className="w-full h-auto rounded-sm">
          {mainItem.type === "video" ? (
            <video controls className="w-full h-auto rounded-sm">
              <source src={mainItem.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : mainItem.type === "audio" ? (
            <audio controls className="w-full">
              <source src={mainItem.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <img
              src={mainItem.url}
              alt={mainItem.alt || "Art image"}
              className="w-full h-auto object-cover rounded-sm"
            />
          )}
        </div>
      </div>
    );
  }
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

interface DetailsDisplayProps {
  art: ArtData;
}

const DetailsDisplay: React.FC<DetailsDisplayProps> = ({ art }) => {
  const { title, subtitle, description, extraInfo, externalLink, saleInfo } =
    art;
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
        <div className="mt-4 p-4 border max-w-80 rounded-sm">
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
