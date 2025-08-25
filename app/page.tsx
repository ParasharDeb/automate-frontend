'use client'
import { useState } from 'react';
import LetterGlitch from './components/background';

export default function Home() {
  const [glitchColors, setGlitchColors] = useState<string[]>(['#2b4539', '#61dca3', '#61b3dc']);
  const [glitchSpeed, setGlitchSpeed] = useState<number>(50);
  const [centerVignette, setCenterVignette] = useState<boolean>(true);
  const [outerVignette, setOuterVignette] = useState<boolean>(false);
  const [smooth, setSmooth] = useState<boolean>(true);

  // Helper to update a specific color in the glitchColors array
  const updateColor = (index: number, value: string) => {
    const next = glitchColors.slice();
    next[index] = value;
    setGlitchColors(next);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>


      {/* The animated background */}
      <LetterGlitch
        glitchColors={glitchColors}
        glitchSpeed={glitchSpeed}
        centerVignette={centerVignette}
        outerVignette={outerVignette}
        smooth={smooth}
      />
      {/* Foreground content */}
      <div style={{
        position: "absolute",
        zIndex: 3,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "0 1px 3px rgba(0,0,0,0.7)"
        }}>
          Ready to make your 
        </h1>
        <button style={{
          margin: 16,
          padding: "12px 32px",
          borderRadius: 9999,
          background: "#fff",
          color: "#333",
          border: "none",
          fontSize: "1.25rem",
          cursor: "pointer"
        }}>
          Get Started
        </button>
        <button style={{
          margin: 16,
          padding: "12px 32px",
          borderRadius: 9999,
          background: "#222",
          color: "#808080",
          border: "none",
          fontSize: "1.25rem",
          cursor: "pointer"
        }}>
          Learn More
        </button>
      </div>
    </div>
  );
}
