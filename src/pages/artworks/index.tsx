// src/pages/artworks/index.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  createMandelbrotSketch,
  createLorenzSketch,
  createFourierSketch,
  createJuliaSetSketch,
  createTessellationSketch,
} from "../../data/artworks/p5";

interface SketchInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  // We keep a reference to the sketch, though it isn’t used on this page.
  sketch: { setup: (p: any) => void; draw: (p: any) => void };
}

const sketchShowcase: SketchInfo[] = [
  {
    id: "mandelbrot-explorer",
    title: "Mandelbrot Explorer",
    description: "A dynamic Mandelbrot set visualization using p5.js.",
    thumbnail: "/assets/thumbs/mandelbrot.jpg",
    sketch: createMandelbrotSketch,
  },
  {
    id: "lorenz-attractor",
    title: "Lorenz Attractor",
    description: "A 3D exploration of the Lorenz attractor using p5.js.",
    thumbnail: "/assets/thumbs/lorenz.jpg",
    sketch: createLorenzSketch,
  },
  {
    id: "fourier-series",
    title: "Fourier Series",
    description: "Visualization of Fourier series approximations using p5.js.",
    thumbnail: "/assets/thumbs/fourier.jpg",
    sketch: createFourierSketch,
  },
  {
    id: "julia-set",
    title: "Julia Set",
    description: "An interactive Julia set visualization powered by p5.js.",
    thumbnail: "/assets/thumbs/julia.jpg",
    sketch: createJuliaSetSketch,
  },
  {
    id: "tessellation-art",
    title: "Tessellation Art",
    description: "Geometric patterns generated with p5.js.",
    thumbnail: "/assets/thumbs/tessellation.jpg",
    sketch: createTessellationSketch,
  },
];

const ArtworksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Processing Artworks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sketchShowcase.map((item) => (
          <Link
            key={item.id}
            to={`/artworks/${item.id}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtworksPage;
