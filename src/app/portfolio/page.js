"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

export default function Portfolio() {
  const allImages = useMemo(
    () => [
      // Portraits
      "/images/portfolio/portraits/IMG_0417.jpg",
      "/images/portfolio/portraits/IMG_9684.jpg",
      "/images/portfolio/portraits/IMG_0092.jpg",
      "/images/portfolio/portraits/IMG_6866.jpg",
      "/images/portfolio/portraits/IMG_3345.jpg",
      "/images/portfolio/portraits/IMG_01222.jpg",
      "/images/portfolio/portraits/IMG_9953.jpg",
      "/images/portfolio/portraits/IMG_4242.jpg",

      // Couples
      "/images/portfolio/couples/IMG_0895.jpg",
      "/images/portfolio/couples/IMG_7393.jpg",
      "/images/portfolio/couples/IMG_3182.jpg",
      "/images/portfolio/couples/IMG_3144.jpg",
      "/images/portfolio/couples/IMG_8118.jpg",
      "/images/portfolio/couples/IMG_0679.jpg",
      "/images/portfolio/couples/IMG_9946.jpg",
      "/images/portfolio/couples/IMG_0064.jpg",

      // Weddings
      "/images/portfolio/weddings/IMG_9790.jpg",
      "/images/portfolio/weddings/IMG_0673.jpg",
      "/images/portfolio/weddings/IMG_0873.jpg",
      "/images/portfolio/weddings/IMG_2165.jpg",
      "/images/portfolio/weddings/IMG_9611.jpg",
      "/images/portfolio/weddings/IMG_0405.jpg",
      "/images/portfolio/weddings/IMG_9783.jpg",
      "/images/portfolio/weddings/IMG_2281.jpg",

      // Concerts
      "/images/portfolio/concerts/IMG_0492.jpg",
      "/images/portfolio/concerts/IMG_4850.jpg",
      "/images/portfolio/concerts/IMG_0283.jpg",
      "/images/portfolio/concerts/IMG_9724.JPG",
      "/images/portfolio/concerts/IMG_4980.jpg",
      "/images/portfolio/concerts/IMG_4888.jpg",
      "/images/portfolio/concerts/IMG_7722.jpg",
      "/images/portfolio/concerts/IMG_0001.jpg",
    ],
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (src) => {
    const index = allImages.indexOf(src);
    setSelectedIndex(index);
  };

  const closeImage = () => setSelectedIndex(null);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );

  const selectedImage =
    selectedIndex !== null ? allImages[selectedIndex] : null;

  const renderGrid = (images) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pb-8">
      {images.map((column, colIdx) => (
        <div key={colIdx} className="grid gap-2">
          {column.map((src, idx) => (
            <div
              key={idx}
              onClick={() => openImage(src)}
              className="cursor-pointer"
            >
              <Image
                className="h-auto max-w-full"
                src={src}
                alt=""
                width={2432}
                height={1442}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="bg-white lg:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900 pb-6">
              Creative Portraits
            </h2>
            {renderGrid([
              [
                "/images/portfolio/portraits/IMG_0417.jpg",
                "/images/portfolio/portraits/IMG_9684.jpg",
              ],
              [
                "/images/portfolio/portraits/IMG_0092.jpg",
                "/images/portfolio/portraits/IMG_6866.jpg",
              ],
              [
                "/images/portfolio/portraits/IMG_3345.jpg",
                "/images/portfolio/portraits/IMG_01222.jpg",
              ],
              [
                "/images/portfolio/portraits/IMG_9953.jpg",
                "/images/portfolio/portraits/IMG_4242.jpg",
              ],
            ])}
          </div>

          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900 pb-6">
              Family / Couples
            </h2>
            {renderGrid([
              [
                "/images/portfolio/couples/IMG_0895.jpg",
                "/images/portfolio/couples/IMG_7393.jpg",
              ],
              [
                "/images/portfolio/couples/IMG_3182.jpg",
                "/images/portfolio/couples/IMG_3144.jpg",
              ],
              [
                "/images/portfolio/couples/IMG_8118.jpg",
                "/images/portfolio/couples/IMG_0679.jpg",
              ],
              [
                "/images/portfolio/couples/IMG_9946.jpg",
                "/images/portfolio/couples/IMG_0064.jpg",
              ],
            ])}
          </div>

          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900 pb-6">
              Micro Weddings
            </h2>
            {renderGrid([
              [
                "/images/portfolio/weddings/IMG_9790.jpg",
                "/images/portfolio/weddings/IMG_0673.jpg",
              ],
              [
                "/images/portfolio/weddings/IMG_0873.jpg",
                "/images/portfolio/weddings/IMG_2165.jpg",
              ],
              [
                "/images/portfolio/weddings/IMG_9611.jpg",
                "/images/portfolio/weddings/IMG_0405.jpg",
              ],
              [
                "/images/portfolio/weddings/IMG_9783.jpg",
                "/images/portfolio/weddings/IMG_2281.jpg",
              ],
            ])}
          </div>

          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900 pb-6">
              Concerts / Band Promos
            </h2>
            {renderGrid([
              [
                "/images/portfolio/concerts/IMG_0492.jpg",
                "/images/portfolio/concerts/IMG_4850.jpg",
              ],
              [
                "/images/portfolio/concerts/IMG_0283.jpg",
                "/images/portfolio/concerts/IMG_9724.JPG",
              ],
              [
                "/images/portfolio/concerts/IMG_4980.jpg",
                "/images/portfolio/concerts/IMG_4888.jpg",
              ],
              [
                "/images/portfolio/concerts/IMG_7722.jpg",
                "/images/portfolio/concerts/IMG_0001.jpg",
              ],
            ])}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage} // this handles background clicks
        >
          <div className="relative flex items-center justify-center w-full px-4 sm:px-12">
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent closing
                prevImage();
              }}
              className="absolute left-4 lg:left-6 text-white text-3xl lg:text-4xl p-2 hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              ‹
            </button>

            <img
              src={selectedImage}
              alt="Expanded"
              className="w-full max-w-full max-h-[80vh] sm:max-w-4xl sm:max-h-[90vh] shadow-lg object-contain"
              onClick={(e) => e.stopPropagation()} // stops closing when clicking on image
            />

            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent closing
                nextImage();
              }}
              className="absolute right-4 lg:right-6 text-white text-3xl lg:text-4xl p-2 hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
