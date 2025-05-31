import Image from "next/image";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Scroll = () => {
  const scrollRef = useRef(null);

  // Scroll handler function
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="hidden md:flex overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        <div className="flex">
          <Image
            src="/images/scroll/IMG_0283.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 1"
            priority={true}
          />
          <Image
            src="/images/scroll/IMG_0630.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 2"
          />
          <Image
            src="/images/scroll/IMG_7722.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 3"
          />
          <Image
            src="/images/scroll/IMG_9684.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 4"
          />
          <Image
            src="/images/scroll/IMG_9783.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 5"
          />
          <Image
            src="/images/scroll/IMG_9946.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 6"
          />
          <Image
            src="/images/scroll/IMG_9953.jpg"
            width={700}
            height={600}
            className="object-cover inline-block mr-2"
            alt="Photo 7"
          />
        </div>
        </div>
      

      {/* Left Bar Button */}
      <button
        onClick={() => handleScroll("left")}
        className="hidden absolute left-0 top-0 h-full w-10 bg-black bg-opacity-25 text-white md:flex items-center justify-center hover:bg-opacity-50 transition"
        style={{ marginLeft: "-10px" }}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Right Bar Button */}
      <button
        onClick={() => handleScroll("right")}
        className="hidden absolute right-0 top-0 h-full w-10 bg-black bg-opacity-25 text-white md:flex items-center justify-center hover:bg-opacity-50 transition"
        style={{ marginRight: "-10px" }}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
     

      <div className="flex flex-col md:hidden relative">
        <Image
          src="/images/scroll/IMG_0283.jpg"
          width={700}
          height={600}
          className="object-cover mb-2"
          alt="Photo 1"
        />
        <Image
          src="/images/scroll/IMG_0630.jpg"
          width={700}
          height={600}
          className="object-cover mb-2"
          alt="Photo 2"
        />
        <Image
          src="/images/scroll/IMG_7722.jpg"
          width={700}
          height={600}
          className="object-cover mb-2"
          alt="Photo 3"
        />
        <Image
          src="/images/scroll/IMG_9684.jpg"
          width={700}
          height={600}
          className="object-cover mb-2"
          alt="Photo 4"
        />
        <Image
          src="/images/scroll/IMG_9783.jpg"
          width={700}
          height={600}
          className="object-cover mb-2"
          alt="Photo 5"
        />
        <Image
          src="/images/scroll/IMG_9946.jpg"
          width={700}
          height={600}
          className="object-cover mb-2"
          alt="Photo 6"
        />
        <Image
          src="/images/scroll/IMG_9953.jpg"
          width={700}
          height={600}
          className="object-cover"
          alt="Photo 7"
        />
      </div>
    </div>
  );
};

export default Scroll;
