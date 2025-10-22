"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/(frontend)/assets/style/common/commonGame.module.css";

const CommonGame = () => {
  const [playerY, setPlayerY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);
  const gravity = 0.5;
  const jumpPower = 12;

  // Spawn new obstacles endlessly
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles((prev) => [
        ...prev,
        { id: Date.now(), x: 1000, width: 30 + Math.random() * 30 },
      ]);
    }, 1500);
    return () => clearInterval(interval);
  }, [gameOver]);

  // Game loop: update positions
  useEffect(() => {
    if (gameOver) return;
    let velocity = 0;
    const loop = setInterval(() => {
      // Player jump logic
      if (isJumping) {
        setPlayerY((y) => {
          const newY = y + velocity;
          velocity -= gravity;
          if (newY <= 0) {
            setIsJumping(false);
            return 0;
          }
          return newY;
        });
      }

      // Move obstacles
      setObstacles((prev) =>
        prev
          .map((obs) => ({ ...obs, x: obs.x - 8 }))
          .filter((obs) => obs.x > -50)
      );

      // Collision detection
      setObstacles((prev) => {
        for (let obs of prev) {
          if (
            obs.x < 100 &&
            obs.x + obs.width > 60 &&
            playerY < 50 // height of jump clearance
          ) {
            setGameOver(true);
          }
        }
        return prev;
      });

      // Score
      setScore((s) => s + 1);
    }, 30);

    return () => clearInterval(loop);
  }, [isJumping, gameOver]);

  // Handle jump
  const handleJump = () => {
    if (!isJumping && !gameOver) {
      setIsJumping(true);
    }
    if (gameOver) {
      // Reset game
      setGameOver(false);
      setPlayerY(0);
      setObstacles([]);
      setScore(0);
    }
  };

  // Listen to space key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") handleJump();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div
      className={`frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 ${styles.codeRunner}`}
    >
      <h1 className="text-center mb-50">💻 Code Runner</h1>

      <div
        className={styles.gameArea}
        ref={gameRef}
        onClick={handleJump}
      >
        {/* Player */}
        <div
          className={styles.player}
          style={{ bottom: `${playerY}px` }}
        ></div>

        {/* Obstacles */}
        {obstacles.map((obs) => (
          <div
            key={obs.id}
            className={styles.obstacle}
            style={{ left: `${obs.x}px`, width: `${obs.width}px` }}
          ></div>
        ))}

        {/* Ground */}
        <div className={styles.ground}></div>

        {/* UI */}
        <div className={styles.score}>Score: {score}</div>
        {gameOver && <div className={styles.gameOver}>💀 Game Over! Click or press SPACE to restart</div>}
      </div>
    </div>
  );
};

export default CommonGame;
