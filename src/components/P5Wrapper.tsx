// src/components/P5Wrapper.tsx
import React, { Component, createRef } from "react";
import type p5 from "p5";

export interface SketchProps {
  sketch: (p: p5) => void;
}

export default class P5Wrapper extends Component<SketchProps> {
  containerRef = createRef<HTMLDivElement>();
  p5Instance: p5 | null = null;

  componentDidMount() {
    if (this.containerRef.current) {
      // Create a new p5 instance using the provided sketch and mount it on the container
      // @ts-ignore
      this.p5Instance = new p5(this.props.sketch, this.containerRef.current);
    }
  }

  componentWillUnmount() {
    if (this.p5Instance) {
      this.p5Instance.remove();
    }
  }

  render() {
    return <div ref={this.containerRef} />;
  }
}
