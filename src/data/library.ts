// src/data/library.ts

export type MediaType = "image" | "video" | "audio";

export interface MediaItem {
  type: MediaType;
  url: string;
  alt?: string; 
  caption?: string;
}

export interface SaleInfo {
  isForSale: boolean;
  price?: number;
  currency?: string;
  purchaseLink?: string;
}

export interface ArtData {
  id: string; // 3-digit ID (e.g. "001", "002")
  collection: "machines" | "patterns" | "audiovisual" | "miscellaneous";
  title: string;
  subtitle?: string; // e.g. "Animation, 2025"
  description: string;
  // Legacy fields – used if mediaItems is not provided
  videoUrl?: string;
  audioUrl?: string;
  thumbUrl?: string;
  // Media: either a single media item or multiple (slider/gallery)
  mediaItems?: MediaItem[]; // if provided, used for slider
  // Additional details
  extraInfo?: string; // e.g. "Released on Mesh, 2025"
  externalLink?: string; // e.g. Spotify link
  // Sales / e-commerce information
  saleInfo?: SaleInfo;
}
export interface CollectionData {
  title: string;
  subtitle: string;
  bgImageUrl: string;
}

const placeholderImg = "https://raw.githubusercontent.com/probabilityzero/cloudstorage/main/placeholder.png";

export const collections: Record<string, CollectionData> = {
  machines: {
    title: "Machines",
    subtitle: "Mechanical wonders and futuristic technology",
    bgImageUrl:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
  },
  patterns: {
    title: "Patterns",
    subtitle: "Exploring recurring designs and textures",
    bgImageUrl:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
  },
  audiovisual: {
    title: "Audiovisual",
    subtitle: "Mechanical wonders and futuristic technology",
    bgImageUrl:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
  },
  miscellaneous: {
    title: "Miscellaneous",
    subtitle: "A mix of art and innovation",
    bgImageUrl:
      "https://i.pinimg.com/originals/22/15/76/2215767a1cbd1c2c8bec3241f199b02a.gif",
  },
};

export const artCollection: ArtData[] = [
  {
    id: "001",
    collection: "machines",
    title: "Mechanical Vision",
    subtitle: "Digital Sculpture, 2025",
    description: "A sleek representation of mechanical precision.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    extraInfo: "Exhibited at Tech Expo 2025",
    saleInfo: {
      isForSale: true,
      price: 2500,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/mechanical-vision"
    }
  },
  {
    id: "002",
    collection: "patterns",
    title: "Geometric Flow",
    subtitle: "Pattern, 2024",
    description: "Flowing geometric shapes in a minimalist style.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Geometric Flow artwork"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 500,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/geometric-flow"
    }
  },
  {
    id: "003",
    collection: "audiovisual",
    title: "Sonic Light",
    subtitle: "Audiovisual, 2023",
    description: "A blend of vibrant visuals and captivating sound.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    videoUrl: "https://placehold.co/600x400?text=Video+Sonic+Light",
    externalLink: "https://placeholder.com/sonic-light",
  },
  {
    id: "004",
    collection: "miscellaneous",
    title: "Abstract Echo",
    subtitle: "Misc, 2022",
    description: "A mysterious interplay of abstract forms and echoes.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    extraInfo: "Limited edition print available"
  },
  {
    id: "005",
    collection: "machines",
    title: "Cyber Core",
    subtitle: "Digital Art, 2025",
    description: "A futuristic glimpse into cybernetic systems.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Cyber+Core"
      },
      {
        type: "image",
        url: placeholderImg,
        alt: "Cyber Core detail"
      },
      {
        type: "image",
        url: placeholderImg,
        alt: "Cyber Core detail"
      },
      {
        type: "image",
        url: placeholderImg,
        alt: "Cyber Core detail"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 2700,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/cyber-core"
    }
  },
  {
    id: "006",
    collection: "patterns",
    title: "Mosaic Matrix",
    subtitle: "Pattern, 2024",
    description: "An intricate mosaic that layers modern design.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    saleInfo: {
      isForSale: true,
      price: 650,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/mosaic-matrix"
    }
  },
  {
    id: "007",
    collection: "audiovisual",
    title: "Rhythmic Pulse",
    subtitle: "Audiovisual, 2023",
    description: "Pulsating visuals synchronized with rhythmic audio.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-007.mp3"
      },
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Rhythmic+Pulse"
      },
      {
        type: "image",
        url: placeholderImg,
        alt: "Rhythmic Pulse detail"
      }
    ],
  },
  {
    id: "008",
    collection: "miscellaneous",
    title: "Surreal Whimsy",
    subtitle: "Misc, 2022",
    description: "A whimsical journey into the surreal.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "009",
    collection: "machines",
    title: "Digital Dynamo",
    subtitle: "Digital Sculpture, 2025",
    description: "Dynamic forms and digital energy encapsulated in art.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Digital Dynamo artwork"
      },
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Digital+Dynamo"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 3000,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/digital-dynamo"
    }
  },
  {
    id: "010",
    collection: "patterns",
    title: "Spiral Symphony",
    subtitle: "Pattern, 2024",
    description: "A symphony of spirals and vibrant color.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "011",
    collection: "audiovisual",
    title: "Echoing Beats",
    subtitle: "Audiovisual, 2023",
    description: "An audiovisual journey through sound and motion.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    videoUrl: "https://placehold.co/600x400?text=Video+Echoing+Beats",
    externalLink: "https://placeholder.com/echoing-beats",
  },
  {
    id: "012",
    collection: "miscellaneous",
    title: "Ephemeral Moods",
    subtitle: "Misc, 2022",
    description: "Capturing transient moods through abstract imagery.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "013",
    collection: "machines",
    title: "Robotic Reverie",
    subtitle: "Digital Art, 2025",
    description: "A reverie of robotic forms and futuristic design.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    saleInfo: {
      isForSale: true,
      price: 2800,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/robotic-reverie"
    }
  },
  {
    id: "014",
    collection: "patterns",
    title: "Fractal Finesse",
    subtitle: "Pattern, 2024",
    description: "Delicate fractal patterns that mesmerize the viewer.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Fractal Finesse artwork"
      },
      {
        type: "image",
        url: placeholderImg,
        alt: "Fractal detail"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 700,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/fractal-finesse"
    }
  },
  {
    id: "015",
    collection: "audiovisual",
    title: "Vivid Resonance",
    subtitle: "Audiovisual, 2023",
    description: "A vibrant fusion of sound and animated color.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    videoUrl: "https://placehold.co/600x400?text=Video+Vivid+Resonance",
    extraInfo: "Featured in Audio Visual Fest",
  },
  {
    id: "016",
    collection: "miscellaneous",
    title: "Mystic Mirage",
    subtitle: "Misc, 2022",
    description: "An illusionary glimpse into a mystic world.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "017",
    collection: "machines",
    title: "Quantum Circuit",
    subtitle: "Digital Art, 2025",
    description: "A digital exploration of quantum mechanics and circuitry.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Quantum Circuit artwork"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 3200,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/quantum-circuit"
    }
  },
  {
    id: "018",
    collection: "patterns",
    title: "Lattice Lines",
    subtitle: "Pattern, 2024",
    description: "Intersecting lines form a modern visual lattice.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "019",
    collection: "audiovisual",
    title: "Pulse and Shadow",
    subtitle: "Audiovisual, 2023",
    description: "A dramatic interplay of pulsing lights and shadows.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Pulse+and+Shadow"
      },
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-019.mp3"
      },
       {
        type: "image",
        url: placeholderImg,
        alt: "Pulse and Shadow detail"
      }
    ],
  },
  {
    id: "020",
    collection: "miscellaneous",
    title: "Timeless Drift",
    subtitle: "Misc, 2022",
    description: "An artistic exploration of time and movement.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    extraInfo: "Available as a digital download"
  },
  {
    id: "021",
    collection: "machines",
    title: "Data Forge",
    subtitle: "Digital Sculpture, 2025",
    description: "Forging data into a tangible digital masterpiece.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    saleInfo: {
      isForSale: true,
      price: 2900,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/data-forge"
    }
  },
  {
    id: "022",
    collection: "patterns",
    title: "Chromatic Web",
    subtitle: "Pattern, 2024",
    description: "A web of chromatic threads interwoven into art.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Chromatic Web artwork"
      }
    ]
  },
  {
    id: "023",
    collection: "audiovisual",
    title: "Synchronized Pulse",
    subtitle: "Audiovisual, 2023",
    description: "Visual pulses synchronized with a steady beat.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    videoUrl: "https://placehold.co/600x400?text=Video+Synchronized+Pulse",
    externalLink: "https://placeholder.com/synchronized-pulse",
  },
  {
    id: "024",
    collection: "miscellaneous",
    title: "Ephemeral Trace",
    subtitle: "Misc, 2022",
    description: "A fleeting trace of artistic memory captured in time.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "025",
    collection: "machines",
    title: "Neon Flux",
    subtitle: "Digital Art, 2025",
    description: "A vibrant interplay of neon lights and machine form.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Neon+Flux"
      },
      {
        type: "image",
        url: placeholderImg,
        alt: "Neon Flux detail"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 3100,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/neon-flux"
    }
  },
  {
    id: "026",
    collection: "patterns",
    title: "Tessellated Dream",
    subtitle: "Pattern, 2024",
    description: "A dreamlike tessellation of repeating shapes.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "027",
    collection: "audiovisual",
    title: "Vibrant Echo",
    subtitle: "Audiovisual, 2023",
    description: "Echoing visuals paired with vibrant soundscapes.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-027.mp3"
      },
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Vibrant+Echo"
      },
       {
        type: "image",
        url: placeholderImg,
        alt: "Vibrant Echo detail"
      }
    ],
  },
  {
    id: "028",
    collection: "miscellaneous",
    title: "Whispering Mirage",
    subtitle: "Misc, 2022",
    description: "A quiet, reflective piece with dreamlike imagery.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "029",
    collection: "machines",
    title: "Binary Bloom",
    subtitle: "Digital Art, 2025",
    description: "The digital blossom of binary code and organic design.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    saleInfo: {
      isForSale: true,
      price: 3300,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/binary-bloom"
    }
  },
  {
    id: "030",
    collection: "patterns",
    title: "Kaleido Rhythm",
    subtitle: "Pattern, 2024",
    description: "A rhythmic explosion of kaleidoscopic patterns.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Kaleido Rhythm artwork"
      }
    ]
  },
  {
    id: "031",
    collection: "audiovisual",
    title: "Celestial Harmony",
    subtitle: "Audiovisual, 2023",
    description: "A cosmic interplay of sound and celestial visuals.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    videoUrl: "https://placehold.co/600x400?text=Video+Celestial+Harmony",
    extraInfo: "Premiered on Cosmic Visions",
  },
  {
    id: "032",
    collection: "miscellaneous",
    title: "Serene Reflections",
    subtitle: "Misc, 2022",
    description: "Calm and serene visuals that reflect inner peace.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "033",
    collection: "machines",
    title: "Optic Engine",
    subtitle: "Digital Sculpture, 2025",
    description: "Engineered optical designs fused with mechanical artistry.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Optic Engine artwork"
      },
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Optic+Engine"
      }
    ],
    saleInfo: {
      isForSale: true,
      price: 3500,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/optic-engine"
    }
  },
  {
    id: "034",
    collection: "patterns",
    title: "Radiant Mosaic",
    subtitle: "Pattern, 2024",
    description: "A radiant mosaic that plays with light and structure.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "035",
    collection: "audiovisual",
    title: "Dynamic Spectrum",
    subtitle: "Audiovisual, 2023",
    description: "Shifting colors and dynamic sound create an immersive experience.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    videoUrl: "https://placehold.co/600x400?text=Video+Dynamic+Spectrum",
    externalLink: "https://placeholder.com/dynamic-spectrum",
  },
  {
    id: "036",
    collection: "miscellaneous",
    title: "Transient Visions",
    subtitle: "Misc, 2022",
    description: "A fleeting vision of modern abstract expression.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
  },
  {
    id: "037",
    collection: "machines",
    title: "Circuit Cascade",
    subtitle: "Digital Art, 2025",
    description: "A cascade of circuit elements flowing in digital rhythm.",
    thumbUrl: placeholderImg,
    mediaItems: [{ type: "image", url: placeholderImg }],
    saleInfo: {
      isForSale: true,
      price: 3600,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/circuit-cascade"
    }
  },
  {
    id: "038",
    collection: "patterns",
    title: "Prismatic Layers",
    subtitle: "Pattern, 2024",
    description: "Layers of prismatic hues forming a vibrant pattern.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "image",
        url: placeholderImg,
        alt: "Prismatic Layers artwork"
      }
    ]
  },
  {
    id: "039",
    collection: "audiovisual",
    title: "Sonic Mirage",
    subtitle: "Audiovisual, 2023",
    description: "An interplay of sound and light creating a mirage-like effect.",
    thumbUrl: placeholderImg,
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Sonic+Mirage"
      },
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-039.mp3"
      },
       {
        type: "image",
        url: placeholderImg,
        alt: "Sonic Mirage detail"
      }
    ],
  },
  {
    id: "040",
    collection: "miscellaneous",
    title: "Kaleidoscopic Dreams",
    subtitle: "Misc, 2022",
    description: "Ever-changing dreams rendered in kaleidoscopic form.",
    thumbUrl: placeholderImg,
     mediaItems: [{ type: "image", url: placeholderImg }],
    saleInfo: {
      isForSale: true,
      price: 900,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/kaleidoscopic-dreams"
    }
  }
];