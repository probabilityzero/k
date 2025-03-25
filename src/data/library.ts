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

export const artCollection: ArtData[] = [
  {
    id: "001",
    collection: "machines",
    title: "Mechanical Vision",
    subtitle: "Digital Sculpture, 2025",
    description: "A sleek representation of mechanical precision.",
    imageUrl: "https://placehold.co/600x400?text=Mechanical+Vision",
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
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Geometric+Flow",
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
    videoUrl: "https://placehold.co/600x400?text=Video+Sonic+Light",
    externalLink: "https://placeholder.com/sonic-light"
  },
  {
    id: "004",
    collection: "misc",
    title: "Abstract Echo",
    subtitle: "Misc, 2022",
    description: "A mysterious interplay of abstract forms and echoes.",
    imageUrl: "https://placehold.co/600x400?text=Abstract+Echo",
    extraInfo: "Limited edition print available"
  },
  {
    id: "005",
    collection: "machines",
    title: "Cyber Core",
    subtitle: "Digital Art, 2025",
    description: "A futuristic glimpse into cybernetic systems.",
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Cyber+Core"
      },
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Cyber+Core+Detail",
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
    imageUrl: "https://placehold.co/600x400?text=Mosaic+Matrix",
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
    mediaItems: [
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-007.mp3"
      },
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Rhythmic+Pulse"
      }
    ]
  },
  {
    id: "008",
    collection: "misc",
    title: "Surreal Whimsy",
    subtitle: "Misc, 2022",
    description: "A whimsical journey into the surreal.",
    imageUrl: "https://placehold.co/600x400?text=Surreal+Whimsy"
  },
  {
    id: "009",
    collection: "machines",
    title: "Digital Dynamo",
    subtitle: "Digital Sculpture, 2025",
    description: "Dynamic forms and digital energy encapsulated in art.",
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Digital+Dynamo",
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
    imageUrl: "https://placehold.co/600x400?text=Spiral+Symphony"
  },
  {
    id: "011",
    collection: "audiovisual",
    title: "Echoing Beats",
    subtitle: "Audiovisual, 2023",
    description: "An audiovisual journey through sound and motion.",
    videoUrl: "https://placehold.co/600x400?text=Video+Echoing+Beats",
    externalLink: "https://placeholder.com/echoing-beats"
  },
  {
    id: "012",
    collection: "misc",
    title: "Ephemeral Moods",
    subtitle: "Misc, 2022",
    description: "Capturing transient moods through abstract imagery.",
    imageUrl: "https://placehold.co/600x400?text=Ephemeral+Moods"
  },
  {
    id: "013",
    collection: "machines",
    title: "Robotic Reverie",
    subtitle: "Digital Art, 2025",
    description: "A reverie of robotic forms and futuristic design.",
    imageUrl: "https://placehold.co/600x400?text=Robotic+Reverie",
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
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Fractal+Finesse",
        alt: "Fractal Finesse artwork"
      },
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Detail+Fractal+Finesse",
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
    videoUrl: "https://placehold.co/600x400?text=Video+Vivid+Resonance",
    extraInfo: "Featured in Audio Visual Fest"
  },
  {
    id: "016",
    collection: "misc",
    title: "Mystic Mirage",
    subtitle: "Misc, 2022",
    description: "An illusionary glimpse into a mystic world.",
    imageUrl: "https://placehold.co/600x400?text=Mystic+Mirage"
  },
  {
    id: "017",
    collection: "machines",
    title: "Quantum Circuit",
    subtitle: "Digital Art, 2025",
    description: "A digital exploration of quantum mechanics and circuitry.",
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Quantum+Circuit",
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
    imageUrl: "https://placehold.co/600x400?text=Lattice+Lines"
  },
  {
    id: "019",
    collection: "audiovisual",
    title: "Pulse and Shadow",
    subtitle: "Audiovisual, 2023",
    description: "A dramatic interplay of pulsing lights and shadows.",
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Pulse+and+Shadow"
      },
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-019.mp3"
      }
    ]
  },
  {
    id: "020",
    collection: "misc",
    title: "Timeless Drift",
    subtitle: "Misc, 2022",
    description: "An artistic exploration of time and movement.",
    imageUrl: "https://placehold.co/600x400?text=Timeless+Drift",
    extraInfo: "Available as a digital download"
  },
  {
    id: "021",
    collection: "machines",
    title: "Data Forge",
    subtitle: "Digital Sculpture, 2025",
    description: "Forging data into a tangible digital masterpiece.",
    imageUrl: "https://placehold.co/600x400?text=Data+Forge",
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
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Chromatic+Web",
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
    videoUrl: "https://placehold.co/600x400?text=Video+Synchronized+Pulse",
    externalLink: "https://placeholder.com/synchronized-pulse"
  },
  {
    id: "024",
    collection: "misc",
    title: "Ephemeral Trace",
    subtitle: "Misc, 2022",
    description: "A fleeting trace of artistic memory captured in time.",
    imageUrl: "https://placehold.co/600x400?text=Ephemeral+Trace"
  },
  {
    id: "025",
    collection: "machines",
    title: "Neon Flux",
    subtitle: "Digital Art, 2025",
    description: "A vibrant interplay of neon lights and machine form.",
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Neon+Flux"
      },
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Neon+Flux+Detail",
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
    imageUrl: "https://placehold.co/600x400?text=Tessellated+Dream"
  },
  {
    id: "027",
    collection: "audiovisual",
    title: "Vibrant Echo",
    subtitle: "Audiovisual, 2023",
    description: "Echoing visuals paired with vibrant soundscapes.",
    mediaItems: [
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-027.mp3"
      },
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Vibrant+Echo"
      }
    ]
  },
  {
    id: "028",
    collection: "misc",
    title: "Whispering Mirage",
    subtitle: "Misc, 2022",
    description: "A quiet, reflective piece with dreamlike imagery.",
    imageUrl: "https://placehold.co/600x400?text=Whispering+Mirage"
  },
  {
    id: "029",
    collection: "machines",
    title: "Binary Bloom",
    subtitle: "Digital Art, 2025",
    description: "The digital blossom of binary code and organic design.",
    imageUrl: "https://placehold.co/600x400?text=Binary+Bloom",
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
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Kaleido+Rhythm",
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
    videoUrl: "https://placehold.co/600x400?text=Video+Celestial+Harmony",
    extraInfo: "Premiered on Cosmic Visions"
  },
  {
    id: "032",
    collection: "misc",
    title: "Serene Reflections",
    subtitle: "Misc, 2022",
    description: "Calm and serene visuals that reflect inner peace.",
    imageUrl: "https://placehold.co/600x400?text=Serene+Reflections"
  },
  {
    id: "033",
    collection: "machines",
    title: "Optic Engine",
    subtitle: "Digital Sculpture, 2025",
    description: "Engineered optical designs fused with mechanical artistry.",
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Optic+Engine",
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
    imageUrl: "https://placehold.co/600x400?text=Radiant+Mosaic"
  },
  {
    id: "035",
    collection: "audiovisual",
    title: "Dynamic Spectrum",
    subtitle: "Audiovisual, 2023",
    description: "Shifting colors and dynamic sound create an immersive experience.",
    videoUrl: "https://placehold.co/600x400?text=Video+Dynamic+Spectrum",
    externalLink: "https://placeholder.com/dynamic-spectrum"
  },
  {
    id: "036",
    collection: "misc",
    title: "Transient Visions",
    subtitle: "Misc, 2022",
    description: "A fleeting vision of modern abstract expression.",
    imageUrl: "https://placehold.co/600x400?text=Transient+Visions"
  },
  {
    id: "037",
    collection: "machines",
    title: "Circuit Cascade",
    subtitle: "Digital Art, 2025",
    description: "A cascade of circuit elements flowing in digital rhythm.",
    imageUrl: "https://placehold.co/600x400?text=Circuit+Cascade",
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
    mediaItems: [
      {
        type: "image",
        url: "https://placehold.co/600x400?text=Prismatic+Layers",
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
    mediaItems: [
      {
        type: "video",
        url: "https://placehold.co/600x400?text=Video+Sonic+Mirage"
      },
      {
        type: "audio",
        url: "https://example.com/audio-placeholder-039.mp3"
      }
    ]
  },
  {
    id: "040",
    collection: "misc",
    title: "Kaleidoscopic Dreams",
    subtitle: "Misc, 2022",
    description: "Ever-changing dreams rendered in kaleidoscopic form.",
    imageUrl: "https://placehold.co/600x400?text=Kaleidoscopic+Dreams",
    saleInfo: {
      isForSale: true,
      price: 900,
      currency: "USD",
      purchaseLink: "https://placeholder.com/buy/kaleidoscopic-dreams"
    }
  }
];
