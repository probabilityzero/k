import type p5Type from 'p5';

export type SketchData = {
  id: string;
  title: string;
  sketch: {
    setup: (p5: p5Type) => void;
    draw: (p5: p5Type) => void;
  };
};
