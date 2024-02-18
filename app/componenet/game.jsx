"use client"
import React, { useState, useEffect } from 'react';

const Game = () => {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState('RIGHT');

    useEffect(() => {
        const interval = setInterval(moveSnake, 100);
        return () => clearInterval(interval);
    }, [snake]);

    const moveSnake = () => {
        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        switch (direction) {
            case 'UP':
                head.y -= 1;
                break;
            case 'DOWN':
                head.y += 1;
                break;
            case 'LEFT':
                head.x -= 1;
                break;
            case 'RIGHT':
                head.x += 1;
                break;
            default:
                break;
        }

        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            setFood(generateFoodPosition());
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    const generateFoodPosition = () => {
        const newFood = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20),
        };
        return newFood;
    };

    const handleKeyDown = (e) => {
        e.preventDefault();
        switch (e.key) {
            case 'ArrowUp':
                setDirection('UP');
                break;
            case 'ArrowDown':
                setDirection('DOWN');
                break;
            case 'ArrowLeft':
                setDirection('LEFT');
                break;
            case 'ArrowRight':
                setDirection('RIGHT');
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="relative" style={{ width: '40vh', height: '50vh' }}>
                {Array.from({ length: 20 }).map((_, rowIndex) =>
                    Array.from({ length: 20 }).map((_, colIndex) => {
                        const isSnake = snake.some(
                            (part) => part.x === colIndex && part.y === rowIndex
                        );
                        const isFood = food.x === colIndex && food.y === rowIndex;
                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`absolute w-2/20 h-2/20 ${isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-gray-700'
                                    }`}
                                style={{ top: `${rowIndex * 5}%`, left: `${colIndex * 5}%` }}
                            ></div>
                        );
                    })
                )}
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setSnake([{ x: 10, y: 10 }])}>
                Start Game
            </button>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded ml-4" onClick={() => setDirection('')}>
                Skip
            </button>
            <div tabIndex="0" onKeyDown={handleKeyDown}></div>
        </div>
    );
};

export default Game;
