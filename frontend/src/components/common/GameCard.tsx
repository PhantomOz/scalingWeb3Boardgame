"use client"

import React, { useState } from "react";
import Image from "next/image";

interface GameCardProps {
  game: {
    image: string;
    description: string;
    title: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { image, description, title } = game;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${
        isHovered ? "transform scale-110" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
      <Image
        alt={title}
        className="w-full h-48 object-cover"
        height={200}
        src={image}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width={300}
      />
      <div className="p-4 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
