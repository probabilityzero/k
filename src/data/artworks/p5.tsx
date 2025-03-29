import type p5Type from 'p5';

export const createMandelbrotSketch = {
  setup: (p5: p5Type) => {
    p5.createCanvas(400, 400);
    p5.pixelDensity(1);
    p5.loadPixels();
  },

  draw: (p5: p5Type) => {
    const time = p5.millis() * 0.0001;
    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let a = p5.map(x, 0, p5.width, -2, 0.5);
        let b = p5.map(y, 0, p5.height, -1.25, 1.25);
        
        const ca = a;
        const cb = b;
        
        let n = 0;
        
        while (n < 100) {
          const aa = a * a - b * b;
          const bb = 2 * a * b;
          
          a = aa + ca + Math.sin(time) * 0.1;
          b = bb + cb;
          
          if (a * a + b * b > 16) {
            break;
          }
          n++;
        }

        const bright = p5.map(n, 0, 100, 0, 1);
        const hue = (bright * 360 + time * 50) % 360;
        p5.colorMode(p5.HSB);
        const col = p5.color(hue, 100, bright * 100);
        
        const pix = (x + y * p5.width) * 4;
        p5.pixels[pix + 0] = p5.red(col);
        p5.pixels[pix + 1] = p5.green(col);
        p5.pixels[pix + 2] = p5.blue(col);
        p5.pixels[pix + 3] = 255;
      }
    }
    p5.updatePixels();
  }
};

export const createLorenzSketch = {
  setup: (p5: p5Type) => {
    p5.createCanvas(400, 400, p5.WEBGL);
    p5.colorMode(p5.HSB);
  },
  
  draw: (function() {
    let x = 0.01;
    let y = 0;
    let z = 0;
    const points: Array<{ x: number; y: number; z: number }> = [];
    
    return function(p5: p5Type) {
      p5.background(0);
      p5.rotateY(p5.frameCount * 0.01);
      
      const dt = 0.01;
      const sigma = 10;
      const rho = 28;
      const beta = 8/3;
      
      const dx = sigma * (y - x) * dt;
      const dy = (x * (rho - z) - y) * dt;
      const dz = (x * y - beta * z) * dt;
      
      x += dx;
      y += dy;
      z += dz;
      
      points.push({ x, y, z });
      if (points.length > 1000) points.shift();
      
      p5.noFill();
      p5.beginShape();
      points.forEach((point, i) => {
        const hue = (i / points.length) * 360;
        p5.stroke(hue, 100, 100);
        p5.vertex(point.x, point.y, point.z);
      });
      p5.endShape();
    };
  })()
};

export const createFourierSketch = {
  setup: (p5: p5Type) => {
    p5.createCanvas(400, 400);
    p5.colorMode(p5.HSB);
  },
  
  draw: (function() {
    const waves: number[] = [];
    return function(p5: p5Type) {
      p5.background(240, 20, 10);
      p5.translate(200, 200);
      
      let x = 0;
      let y = 0;
      
      for (let i = 0; i < 5; i++) {
        const prevX = x;
        const prevY = y;
        
        const n = i * 2 + 1;
        const radius = 75 * (4 / (n * p5.PI));
        const angle = n * p5.frameCount * 0.02;
        
        x += radius * p5.cos(angle);
        y += radius * p5.sin(angle);
        
        p5.stroke(280, 50, 90, 0.5);
        p5.noFill();
        p5.ellipse(prevX, prevY, radius * 2);
        
        p5.stroke(280, 50, 90);
        p5.line(prevX, prevY, x, y);
      }
      
      waves.unshift(y);
      if (waves.length > 300) waves.pop();
      
      p5.translate(100, 0);
      p5.beginShape();
      for (let i = 0; i < waves.length; i++) {
        p5.stroke(280, 50, 90);
        p5.vertex(i, waves[i]);
      }
      p5.endShape();
    };
  })()
};

export const createJuliaSetSketch = {
  setup: (p5: p5Type) => {
    p5.createCanvas(400, 400);
    p5.pixelDensity(1);
  },
  
  draw: (p5: p5Type) => {
    const time = p5.millis() * 0.001;
    const cReal = 0.7885 * Math.cos(time * 0.3);
    const cImag = 0.7885 * Math.sin(time * 0.3);
    
    p5.loadPixels();
    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let a = p5.map(x, 0, p5.width, -2, 2);
        let b = p5.map(y, 0, p5.height, -2, 2);
        
        let n = 0;
        while (n < 100 && a * a + b * b < 4) {
          const aa = a * a - b * b;
          const bb = 2 * a * b;
          a = aa + cReal;
          b = bb + cImag;
          n++;
        }
        
        const hue = p5.map(n, 0, 100, 200, 300);
        const sat = 80;
        const bri = n === 100 ? 0 : 100;
        
        p5.colorMode(p5.HSB, 360, 100, 100);
        const pix = (x + y * p5.width) * 4;
        const col = p5.color(hue, sat, bri);
        p5.pixels[pix + 0] = p5.red(col);
        p5.pixels[pix + 1] = p5.green(col);
        p5.pixels[pix + 2] = p5.blue(col);
        p5.pixels[pix + 3] = 255;
      }
    }
    p5.updatePixels();
  }
};

export const createTessellationSketch = {
  setup: (p5: p5Type) => {
    p5.createCanvas(400, 400);
    p5.colorMode(p5.HSB);
  },
  
  draw: (function() {
    return function(p5: p5Type) {
      p5.background(0, 0, 95);
      const time = p5.millis() * 0.001;
      const tileCount = 8;
      const tileSize = p5.width / tileCount;
      
      for (let x = 0; x < tileCount; x++) {
        for (let y = 0; y < tileCount; y++) {
          const posX = x * tileSize;
          const posY = y * tileSize;
          
          p5.push();
          p5.translate(posX + tileSize/2, posY + tileSize/2);
          p5.rotate((x + y) * 0.5 + time);
          
          const hue = (x + y) * 30 + time * 20;
          p5.fill(hue % 360, 40, 95);
          p5.stroke(hue % 360, 60, 60);
          p5.strokeWeight(2);
          
          p5.beginShape();
          for (let i = 0; i < 6; i++) {
            const angle = p5.TWO_PI / 6 * i;
            const rad = tileSize / 2 * 0.8;
            p5.vertex(rad * p5.cos(angle), rad * p5.sin(angle));
          }
          p5.endShape(p5.CLOSE);
          p5.pop();
        }
      }
    };
  })()
};
