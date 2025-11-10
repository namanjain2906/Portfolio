import React, { useState, useEffect, useCallback, useRef } from 'react';
import AppFramedContent from "../components/AppFramedContent.jsx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const GRID_SIZE = 14;
const CELL_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIRECTION = { x: 0, y: 0 };
const INITIAL_FOOD = { x: 10, y: 10 };
const GAME_SPEED = 200;

const MiniGame = () => {
  const navigate = useNavigate();
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const directionRef = useRef(direction);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    setFood(newFood);
  }, []);

  // Start game
  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
    generateFood();
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted || gameOver) return;

      const currentDir = directionRef.current;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (currentDir.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (currentDir.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (currentDir.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (currentDir.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const currentDir = directionRef.current;
        const newHead = {
          x: prevSnake[0].x + currentDir.x,
          y: prevSnake[0].y + currentDir.y
        };

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setGameOver(true);
          setGameStarted(false);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          setGameStarted(false);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => prev + 1);
          generateFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [food, gameStarted, gameOver, generateFood]);

  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <AppFramedContent
        safeArea={{ top: 8, right: 6, bottom: 8, left: 6 }}
        heightClass="h-[95dvh] max-h-[900px]"
        className="max-w-[430px]"
      >
        <div className="absolute inset-0  flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-1 pb-2 shrink-0">
            <button
              aria-label="Go Back"
              onClick={() => navigate(-1)}
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-white text-lg font-semibold">Mini Game</h1>
          </div>
          
          {/* Content - Centered */}
          <div className="flex-1 flex flex-col p-2 items-center justify-evenly ">
            {/* Game Board */}
            <div 
              className="relative bg-gray-900  rounded-lg mb-3 border border-gray-700 shrink-0"
              style={{
                width: `${GRID_SIZE * CELL_SIZE}px`,
                height: `${GRID_SIZE * CELL_SIZE}px`,
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                gap: '1px'
              }}
            >
              {/* Grid cells */}
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                const x = index % GRID_SIZE;
                const y = Math.floor(index / GRID_SIZE);
                const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                const isHead = snake[0]?.x === x && snake[0]?.y === y;
                const isFood = food.x === x && food.y === y;

                return (
                  <div
                    key={index}
                    className={`
                      ${isSnake ? (isHead ? 'bg-red-500' : 'bg-red-400') : 'bg-white/70'}
                      ${isFood ? 'bg-green-500 animate-pulse' : ''}
                      rounded-sm
                    `}
                  />
                );
              })}

              {/* Game Over Overlay */}
              {gameOver && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <h2 className="text-white text-xl font-bold mb-1">Game Over!</h2>
                    <p className="text-gray-300 text-sm">Final Score: {score}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center gap-2 w-full max-w-60 shrink-0">
              <button
                onClick={startGame}
                className="w-full px-6 py-2 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors shadow-lg text-sm"
              >
                {gameOver ? 'Restart' : gameStarted ? 'Restart' : 'Start'}
              </button>

              {/* Score */}
              <div className="text-white text-lg font-bold">
                Score: {score}
              </div>

              {/* Instructions */}
              <p className="text-gray-400 text-xs text-center leading-tight">
                Use arrow keys to control the snake
              </p>
            </div>
          </div>
        </div>
      </AppFramedContent>
    </div>
  )
}

export default MiniGame