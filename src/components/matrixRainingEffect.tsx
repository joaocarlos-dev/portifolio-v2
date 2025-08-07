"use client";

import { hexToRGB } from "@/utils/hexToRGB";
import React, { useEffect, useRef } from "react";

type MatrixRainingCodeProps = {
  characters?: string;
  fontSize?: number;
  columnWidth?: number;
  speed?: number;
  trailLength?: number;
  lightColor?: string;
  darkColor?: string;
  trailOpacityStep?: number;
  globalOpacity?: number;
  charChangeInterval?: number;
};

const MatrixRainingCode: React.FC<MatrixRainingCodeProps> = ({
  characters = "abcdefghijklmnopqrstuvwxyz0123456789",
  fontSize = 20,
  columnWidth = 20,
  speed = 0.075,
  trailLength = 100,
  lightColor = "#975eff",
  darkColor = "#975eff",
  trailOpacityStep = 0.1,
  globalOpacity = 0.3,
  charChangeInterval = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / columnWidth);
    const charArray = characters.split("");
    let drops: number[] = [];
    const currentChars: string[] = new Array(columns).fill("");
    const trailChars: string[][] = Array.from({ length: columns }, () =>
      new Array(trailLength).fill("")
    );

    const isDarkMode = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    const baseColor = isDarkMode ? darkColor : lightColor;
    const [r, g, b] = hexToRGB(baseColor);

    for (let i = 0; i < columns; i++) {
      drops[i] = (Math.random() * height) / fontSize;
    }

    let lastCharChangeTime = performance.now();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      const now = performance.now();
      const shouldChangeChar = now - lastCharChangeTime > charChangeInterval;

      for (let i = 0; i < drops.length; i++) {
        const x = i * columnWidth;
        const y = drops[i] * fontSize;

        if (shouldChangeChar) {
          currentChars[i] =
            charArray[Math.floor(Math.random() * charArray.length)];

          for (let j = 0; j < trailLength; j++) {
            trailChars[i][j] =
              charArray[Math.floor(Math.random() * charArray.length)];
          }
        }

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${globalOpacity})`;
        ctx.fillText(currentChars[i], x, y);

        for (let j = 1; j <= trailLength; j++) {
          const fadeText = trailChars[i][j - 1];
          const opacity = Math.max(0, 1 - j * trailOpacityStep);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * globalOpacity})`;
          ctx.fillText(fadeText, x, y - j * fontSize);
        }

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speed;
      }

      if (shouldChangeChar) {
        lastCharChangeTime = now;
      }
    };

    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / columnWidth);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = (Math.random() * height) / fontSize;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    characters,
    fontSize,
    columnWidth,
    speed,
    trailLength,
    trailOpacityStep,
    darkColor,
    lightColor,
    globalOpacity,
    charChangeInterval,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-10] pointer-events-none"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default MatrixRainingCode;
