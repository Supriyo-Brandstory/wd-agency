"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/common/commonGame.module.css";

// Number of rows and columns for the puzzle
const ROWS = 3;
const COLS = 3;

const CommonGame = () => {
  const [pieces, setPieces] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);

  const imageSrc = "/images/website-screenshot.jpg"; // replace with your screenshot

  // Initialize pieces
  useEffect(() => {
    const tempPieces = [];
    for (let i = 0; i < ROWS * COLS; i++) {
      tempPieces.push(i);
    }
    shuffleArray(tempPieces);
    setPieces(tempPieces);
    setStartTime(Date.now());
  }, []);

  // Shuffle array helper
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Handle drag start
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  // Handle drop
  const handleDrop = (index) => {
    if (draggedIndex === null) return;
    const newPieces = [...pieces];
    [newPieces[draggedIndex], newPieces[index]] = [newPieces[index], newPieces[draggedIndex]];
    setPieces(newPieces);
    setDraggedIndex(null);

    // Check if solved
    if (isSolved(newPieces)) {
      const endTime = Date.now();
      setTimeTaken(((endTime - startTime) / 1000).toFixed(2));
      alert(`🎉 Puzzle solved in ${((endTime - startTime) / 1000).toFixed(2)} seconds!`);
    }
  };

  const isSolved = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i) return false;
    }
    return true;
  };

  return (
    <div className={`frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 ${styles.puzzleGame}`}>
      <h1 className='text-center mb-50'>Play Games with Us</h1>
      <div
        className={styles.puzzleContainer}
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: "2px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {pieces.map((piece, index) => {
          const row = Math.floor(piece / COLS);
          const col = piece % COLS;
          const pieceSize = 100 / COLS;

          return (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className={styles.puzzlePiece}
              style={{
                width: "100%",
                height: "0",
                paddingBottom: `${100 / COLS}%`,
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                backgroundPosition: `${(col * 100) / (COLS - 1)}% ${(row * 100) / (ROWS - 1)}%`,
                border: "1px solid #fff",
                cursor: "pointer",
              }}
            ></div>
          );
        })}
      </div>
      {timeTaken && <p className='text-center mt-20'>Time taken: {timeTaken} seconds</p>}
    </div>
  );
};

export default CommonGame;
