// src/pages/artworks/[processingUrl]/index.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type p5Type from "p5";
import P5Wrapper from "../../../components/P5Wrapper";
import {
  createMandelbrotSketch,
  createLorenzSketch,
  createFourierSketch,
  createJuliaSetSketch,
  createTessellationSketch,
} from "../../../data/artworks/p5";


// Map URL slugs to the corresponding p5 sketch objects.
const sketchMap: Record<string, (p5: p5Type) => void> = {
  "mandelbrot-explorer": (p5) => {
    createMandelbrotSketch.setup(p5);
    createMandelbrotSketch.draw(p5);
  },
  "lorenz-attractor": (p5) => {
    createLorenzSketch.setup(p5);
    createLorenzSketch.draw(p5);
  },
  "fourier-series": (p5) => {
    createFourierSketch.setup(p5);
    createFourierSketch.draw(p5);
  },
  "julia-set": (p5) => {
    createJuliaSetSketch.setup(p5);
    createJuliaSetSketch.draw(p5);
  },
  "tessellation-art": (p5) => {
    createTessellationSketch.setup(p5);
    createTessellationSketch.draw(p5);
  },
};

const ProcessingPage: React.FC = () => {
  const { processingUrl } = useParams<{ processingUrl: string }>();
  const navigate = useNavigate();
  const sketch = processingUrl ? sketchMap[processingUrl] : undefined;

  // If no matching sketch is found, redirect to home.
  useEffect(() => {
    if (!sketch) {
      navigate("/");
    }
  }, [sketch, navigate]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {sketch && <P5Wrapper sketch={sketch} />}
      {/* Fixed button at bottom left to navigate to /collections */}
      <Link
        to="/collections"
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
          zIndex: 1000,
        }}
      >
        Go to Collections
      </Link>
    </div>
  );
};

export default ProcessingPage;
