"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const photos = [
  {
    id: 1,
    category: "concerts",
    src: "/images/portfolio/IMG_1333.png",
    width: 500,
    height: 750,
  },
  {
    id: 2,
    category: "concerts",
    src: "/images/portfolio/IMG_1830.png",
    width: 500,
    height: 750,
  },
  {
    id: 3,
    category: "concerts",
    src: "/images/portfolio/IMG_1831.png",
    width: 500,
    height: 750,
  },
  {
    id: 4,
    category: "portraits",
    src: "/images/portfolio/IMG_1832.png",
    width: 500,
    height: 750,
  },
  {
    id: 5,
    category: "portraits",
    src: "/images/portfolio/IMG_1833.png",
    width: 500,
    height: 750,
  },
  {
    id: 6,
    category: "portraits",
    src: "/images/portfolio/IMG_1834.png",
    width: 500,
    height: 750,
  },
  {
    id: 7,
    category: "portraits",
    src: "/images/portfolio/IMG_1835.png",
    width: 500,
    height: 750,
  },
  {
    id: 8,
    category: "concerts",
    src: "/images/portfolio/IMG_1838.png",
    width: 500,
    height: 750,
  },
  {
    id: 9,
    category: "portraits",
    src: "/images/portfolio/IMG_1839.png",
    width: 500,
    height: 750,
  },
  {
    id: 10,
    category: "portraits",
    src: "/images/portfolio/IMG_1840.png",
    width: 500,
    height: 750,
  },
  {
    id: 11,
    category: "portraits",
    src: "/images/portfolio/IMG_1841.png",
    width: 500,
    height: 750,
  },
  {
    id: 12,
    category: "concerts",
    src: "/images/portfolio/IMG_2871.png",
    width: 500,
    height: 750,
  },
  {
    id: 13,
    category: "portraits",
    src: "/images/portfolio/IMG_5700.png",
    width: 500,
    height: 750,
  },
];

export default function Portfolio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState('all');


  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [category]);

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div>
          <div className="flex justify-center mb-4 space-x-4">
        <span 
          className={`cursor-pointer ${selectedCategory === 'all' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </span>
        <span 
          className={`cursor-pointer ${selectedCategory === 'concerts' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setSelectedCategory('concerts')}
        >
          Concerts
        </span>
        <span 
          className={`cursor-pointer ${selectedCategory === 'portraits' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => setSelectedCategory('portraits')}
        >
          Portraits
        </span>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="mb-4 break-inside">
            <Image 
              src={photo.src} 
              alt={photo.category} 
              width={photo.width} 
              height={photo.height} 
              layout="responsive" 
              className="w-full h-auto" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};
