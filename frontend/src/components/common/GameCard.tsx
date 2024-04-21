import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  game: {
    image: string;
    description: string;
    title: string;
    tag: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { image, description, title, tag } = game;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      className={`relative rounded-lg overflow-hidden shadow-lg ${
        isHovered ? "transform scale-110" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={`/${title}`}
    >
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
      <p className="absolute top-0 left-0 bg-[#fff] px-4 py-0.5 m-2 rounded-md">
        {tag}
      </p>
      <div className="p-4 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default GameCard;
