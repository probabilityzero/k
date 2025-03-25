// src/data/library.ts

export type MediaType = "image" | "video" | "audio";

export interface MediaItem {
  type: MediaType;
  url: string;
  alt?: string; // for images
}

export interface SaleInfo {
  isForSale: boolean;
  price?: number;
  currency?: string;
  purchaseLink?: string;
}

export interface ArtData {
  id: string; // 3-digit ID (e.g. "001", "002")
  collection: "machines" | "patterns" | "audiovisual" | "misc";
  title: string;
  subtitle?: string; // e.g. "Animation, 2025"
  description: string;
  // Media: either a single media item or multiple (slider/gallery)
  mediaItems?: MediaItem[]; // if provided, used for slider
  // Legacy fields – used if mediaItems is not provided
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  // Additional details
  extraInfo?: string; // e.g. "Released on Mesh, 2025"
  externalLink?: string; // e.g. Spotify link
  // Sales / e-commerce information
  saleInfo?: SaleInfo;
}

// Single unified art collection array:
export const artCollection: ArtData[] = [
  {
    id: "001",
    collection: "machines",
    title: "Non Square - Copy Paste Lives",
    subtitle: "Animation, 2025",
    description:
      'Animation loop for Non Square\'s single "Copy Paste Lives".',
    mediaItems: [{ type: "video", url: "/assets/art/non-square.mp4" }],
    extraInfo: "Released on Mesh, 2025",
    externalLink: "https://open.spotify.com/...",
    saleInfo: {
      isForSale: true,
      price: 2500,
      currency: "USD",
      purchaseLink: "https://example.com/buy/non-square",
    },
  },
  {
    id: "002",
    collection: "machines",
    title: "Circuit Board Artwork",
    description: "A futuristic representation of technology in art form.",
    imageUrl:
      "https://placehold.co/600x400?text=Circuit+Board+Artwork",
    audioUrl: "/assets/audio/circuit-audio.mp3",
    saleInfo: {
      isForSale: false,
    },
  },
  {
    id: "003",
    collection: "machines",
    title: "Gallery of Machines",
    subtitle: "Mixed Media, 2025",
    description:
      "A collection of images showcasing the inner workings of machines.",
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Machine+1",
        alt: "Machine 1",
      },
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Machine+2",
        alt: "Machine 2",
      },
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Machine+3",
        alt: "Machine 3",
      },
    ],
    extraInfo: "Limited edition prints available",
    saleInfo: {
      isForSale: true,
      price: 1500,
      currency: "USD",
      purchaseLink: "https://example.com/buy/gallery-of-machines",
    },
  },
  {
    id: "001",
    collection: "patterns",
    title: "Geometric Patterns",
    subtitle: "Pattern, 2024",
    description: "Intricate geometric patterns for modern design.",
    imageUrl:
      "https://placehold.co/600x400?text=Geometric+Patterns",
    saleInfo: {
      isForSale: true,
      price: 500,
      currency: "USD",
      purchaseLink: "https://example.com/buy/geometric",
    },
  },
  {
    id: "001",
    collection: "audiovisual",
    title: "Sound and Vision",
    subtitle: "Audiovisual, 2023",
    description: "A mesmerizing mix of sound and visuals.",
    videoUrl: "/assets/art/audiovisual/sound-vision.mp4",
  },
  {
    id: "001",
    collection: "misc",
    title: "Abstract Thoughts",
    subtitle: "Misc, 2022",
    description: "A blend of abstract art and philosophy.",
    imageUrl:
      "https://placehold.co/600x400?text=Abstract+Thoughts",
  },
];
